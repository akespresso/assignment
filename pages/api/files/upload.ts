import { client } from "@/lib/apollo"
import { gql } from "@apollo/client"
import { NextApiRequest, NextApiResponse } from "next"

/**
 * Implement an API route that handles the upload of to Google Cloud storage and
 * processing of the file for saving into the database.
 *
 * 3rd party requirements:
 *   - Google Cloud Storage account (free)
 *
 * - See https://cloud.google.com/nodejs/docs/reference/storage/latest for the
 *   Google Cloud Storage API (already installed in package.json). The storage
 *   instance is already created in lib/storage.ts. Create your own instance of Google
 *   Cloud storage for testing and use a bucket called "rawdata".
 * - Save the file metadata (filename, url, email of the user, time & date)
 *   to the files table in the database with a status "uploaded"
 *     - The email value is accessible from the req object
 * - Process the file using a specific parsing template (you'll need to write it)
 * - Note that the files can come in CSV of XLSX format and they use formatting such as:
 *   - Numbers might have currency symbols or decimal separators
 *     - For example, $1,000.00 should be parsed as 1000.00
 *  - Dates might be in different formats
 *     - For example, 1/1/2021 or 01/01/2021 or 01-01-2021 should all be parsed as 2021-01-01
 *
 * - There are a few packages that can help with the parsing of the files:
 *   - https://www.npmjs.com/package/xlsx-style
 *   - https://www.npmjs.com/package/csvtojson
 *   - https://www.npmjs.com/package/xlsx
 *
 * - dayjs is already installed and can help with parsing dates
 *
 * - Once the file is parsed
 *    - Prepare a json object that will save the data to the Hasura database
 *    - Update the entry in the files table to set the status to "processed"
 *
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 *  */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Please implement the above functionality

  // Save information about the file in the database in the database
  const { data } = await client.mutate({
    mutation: insertFilesMutation,
    variables: {
      objects: [
        {
          fileName: "test.csv",
          url: "https://storage.googleapis.com/rawdata/test.csv",
          email: "",
          status: "uploaded",
        },
      ],
    },
  })

  return res.json({ success: true })
}

// Pre-written mutation
const insertFilesMutation = gql`
  mutation InsertFiles($objects: [files_insert_input!]!) {
    insert_files(objects: $objects) {
      affected_rows
    }
  }
`
