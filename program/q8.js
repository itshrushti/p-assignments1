import fetch from 'node-fetch';
async function fetchGooglePage() {
  try {
    const url = 'https://www.google.com';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

async function main() {
  const googlePageData = await fetchGooglePage();
  if (googlePageData) {
    console.log('Data from Google page:', googlePageData);
  }
}

main();
