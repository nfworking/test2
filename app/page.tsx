import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function DynamicPage() {
  const requestTime = new Date().toISOString();
  const requestHeaders = await headers();

  const userAgent = requestHeaders.get("user-agent") ?? "Unknown";
  const requestId = crypto.randomUUID();

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        padding: "4rem 2rem",
      }}
    >
      <h1>Dynamic MeshScale Test</h1>

      <p>
        This page is rendered dynamically by the Next.js server.
      </p>

      <hr />

      <dl>
        <dt>
          <strong>Request time</strong>
        </dt>
        <dd>{requestTime}</dd>

        <dt>
          <strong>Request ID</strong>
        </dt>
        <dd>{requestId}</dd>

        <dt>
          <strong>User-Agent</strong>
        </dt>
        <dd>{userAgent}</dd>
      </dl>

      <p>
        Refresh the page. The request time and request ID should change on
        every request.
      </p>
    </main>
  );
}

