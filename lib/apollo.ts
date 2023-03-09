import { ApolloClient, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"

const credentials = "include"
const headers = {
  "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
}
const uri = process.env.HASURA_URL as string

import { HttpLink } from "@apollo/client"

export default function createApolloClient(initialState = {}) {
  const link = new HttpLink({ uri, credentials, headers, fetch })
  const cache = new InMemoryCache({ addTypename: false }).restore(initialState)
  const client = new ApolloClient({ ssrMode: true, link, cache })

  return client
}

export const client = createApolloClient()
