export async function get() {
  // const upstashUrl = import.meta.env.VITE_UPSTASH_URL;
  // let client = new Redis(upstashUrl);
  // const rawData = await client.get('monthly_data');
  // const body = JSON.parse(rawData);

  const upstashEndpoint = import.meta.env.VITE_UPSTASH_ENDPOINT;
  const upstashBearer = import.meta.env.VITE_UPSTASH_BEARER;
  const response = await fetch(upstashEndpoint + "/get/monthly_data", {
    headers: {
      Authorization: `Bearer ${upstashBearer}`
    }
  });
  const rawBody = await response.json();
  const body = JSON.parse(rawBody.result);

  return { body };
}