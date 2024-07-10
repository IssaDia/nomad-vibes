export default async function request(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  return res.json();
}
