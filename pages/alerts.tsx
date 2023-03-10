import Head from "next/head"

// export const getServerSideProps = async () => {
//   const { data } = await client.query({ query: queryAllAlerty })
//   const { files } = data || []

//   return { props: { files } }
// }

const Alerts = (props: any) => {
  const { files } = props

  return (
    <div>
      <Head>
        <title>List | Quantum Assignment</title>
      </Head>

      <main className="mx-auto mt-8 lg:px-6 max-w-7xl px-14">
        <p>Please list all errors</p>
      </main>
    </div>
  )
}

export default Alerts
