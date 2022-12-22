export async function get() {
  const upstashEndpoint = import.meta.env.VITE_UPSTASH_ENDPOINT;
  const upstashBearer = import.meta.env.VITE_UPSTASH_BEARER;
  const response = await fetch(upstashEndpoint + "/get/event_body", {
    headers: {
      Authorization: `Bearer ${upstashBearer}`
    }
  });
  const rawBody = await response.json();
  const body = JSON.parse(rawBody.result);

  return { body };
}