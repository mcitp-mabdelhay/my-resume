async function scrape() {
  const url = "https://learn.microsoft.com/en-us/users/mabdelhay/credentials/df2810729c8db8a0";
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  console.log(`ogTitle: ${ogTitleMatch ? ogTitleMatch[1].trim() : 'Not found'}`);
  console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'Not found'}`);
}
scrape();
