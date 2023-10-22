/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
};

module.exports = {
    // other configurations...
    serverRuntimeConfig: {
      // add any server runtime configuration here
    },
    publicRuntimeConfig: {
      // add any public runtime configuration here
    },
    // enable Server Actions
    experimental: {
      serverActions: true,
    },
  };
  