const https = require('https');

const url = 'https://mrpraveenkumar.vercel.app';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // Check for OpenGraph tags
    const ogImage = data.match(/<meta[^>]*property="og:image"[^>]*>/g);
    const ogTitle = data.match(/<meta[^>]*property="og:title"[^>]*>/g);
    const ogDesc = data.match(/<meta[^>]*property="og:description"[^>]*>/g);

    console.log('\nMetadata Verification Results:');
    console.log('----------------------------');
    console.log('OG Image:', ogImage ? '✅ Present' : '❌ Missing');
    console.log('OG Title:', ogTitle ? '✅ Present' : '❌ Missing');
    console.log('OG Description:', ogDesc ? '✅ Present' : '❌ Missing');

    // Check for absolute URLs in image tags
    if (ogImage) {
      const imageUrl = ogImage[0].match(/content="([^"]*)/)[1];
      console.log('\nImage URL:', imageUrl);
      console.log('Is Absolute URL:', imageUrl.startsWith('http') ? '✅ Yes' : '❌ No');
    }
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
}); 