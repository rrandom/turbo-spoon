
const gateways = [
  'https://cloudflare-ipfs.com',
  'https://untangle.care',
  'https://pactcare.online',
  'https://ipfs.adder.black',
  'https://ipfs.sopinka.com',
];


export async function getDoc(hash) {
  return Promise.race(
    gateways.map(gateway => fetch(`${gateway}/ipfs/${hash}`)),
  );
}

export default getDoc;
