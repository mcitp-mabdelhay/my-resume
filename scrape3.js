const urls = [
  "https://www.credly.com/badges/64e62f8e-2605-4c33-8d44-8e7c8bfeda0e/public_url",
  "https://www.credly.com/badges/11a41b13-b4ef-4816-96e4-31e057f5628a/public_url",
  "https://www.credly.com/badges/7c1fbb77-06ad-4a98-af1f-22d814844a19/public_url",
  "https://www.credly.com/badges/0d0cb36d-f4ac-4047-a1a5-27e2ca0c5177/public_url"
];
async function scrape() {
  for (const url of urls) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    // Find issuer by looking for something near "Issuer:" or in meta tags
    const issuerMatch = html.match(/"issuer"\s*:\s*\{\s*"name"\s*:\s*"([^"]+)"/i) || html.match(/class="cr-badge-issuer-name"[^>]*>([^<]+)</i);
    console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'Not found'}`);
    console.log(`Issuer: ${issuerMatch ? issuerMatch[1].trim() : 'Not found'}`);
  }
}
scrape();
