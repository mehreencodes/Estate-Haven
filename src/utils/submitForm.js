// One shared helper for every form on the site (viewing request, contact, etc.).
// The endpoint lives in .env so it is easy to swap without touching components.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL;

export async function submitForm(data) {
  if (!FORM_ENDPOINT) {
    throw new Error("VITE_FORMSPREE_URL is not set");
  }

  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Form submission failed");
  }

  return res.json();
}