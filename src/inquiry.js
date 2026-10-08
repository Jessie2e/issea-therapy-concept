// Add the public Formspree endpoint to .env.local when the form is ready.
const configuredEndpoint = import.meta.env?.VITE_FORMSPREE_ENDPOINT?.trim() || "";
export const formEndpoint = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(configuredEndpoint) ? configuredEndpoint : "";

export async function submitInquiry(endpoint, data, send = fetch) {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) throw new Error("Invalid form endpoint");
  const response = await send(endpoint, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("The form service did not accept the request");
}
