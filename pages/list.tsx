import { client } from "@/lib/apollo"
import { gql } from "@apollo/client"
import { Table } from "@mantine/core"
import Head from "next/head"

export const getServerSideProps = async () => {
  const { data } = await client.query({ query: queryAllFiles })
  const { files } = data || []

  return { props: { files } }
}

const List = (props: any) => {
  const { files } = props

  return (
    <div>
      <Head>
        <title>List | Quantum Assignment</title>
      </Head>

      <main className="mx-auto mt-8 lg:px-6 max-w-7xl px-14">
        <Table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Date</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file: any) => (
              <tr key={file.id}>
                <td>{file.fileName}</td>
                <td>{file.created_at}</td>
                <td>{file.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  )
}

export default List

const queryAllFiles = gql`
  query queryAllFiles {
    files {
      id
      fileName
      created_at
      status
    }
  }
`
