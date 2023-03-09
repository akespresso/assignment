import { Button } from "@mantine/core"
import Head from "next/head"

const Home = () => {
  return (
    <div>
      <Head>
        <title>Quantum Assignment</title>
      </Head>

      <main className="mx-auto mt-8 lg:px-6 max-w-7xl px-14">
        <div className="w-2/3 p-8 mx-auto my-auto bg-white border rounded bg-shadow">
          <h1 className="font-semibold text-center">Upload the file(s)</h1>

          <form>
            <div className="px-4 py-2 mt-8 border rounded bg-gray-50">
              <p>
                Form input that captures email for routing of the file for parsing by appropriate
                template.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Use the{" "}
                  <a
                    href="https://mantine.dev/form/use-form/"
                    className="underline hover:no-underline"
                  >
                    Mantine Form hook
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4 py-8 mt-8 border rounded bg-gray-50">
              <p>Drop zone for file uploads.</p>
              <ul className="list-disc list-inside">
                <li>
                  Use the{" "}
                  <a
                    href="https://mantine.dev/others/dropzone/"
                    className="underline hover:no-underline"
                  >
                    Mantine Dropzone component
                  </a>
                </li>
                <li>
                  If the submission was successful, display a green box with success message, else
                  show a red box with an error message.
                </li>
              </ul>
            </div>

            <Button type="submit" className="mt-4">
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home
