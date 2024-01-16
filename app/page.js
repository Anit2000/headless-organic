import { client } from "../client";


export default function Home() {
  async function getServerSideProps() {
    const response = await fetch(client.getStorefrontApiUrl(), {
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
      }),
      // Generate the headers using the private token.
      headers: client.getPrivateTokenHeaders(),
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    // data is typed as `number`
    console.log(json)
    return { props: json };
  }
  const GRAPHQL_QUERY = `
    query {
      shop {
        name
      }
    }
  `;
  getServerSideProps();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Starter template</h1>
    </main>
  )
}
