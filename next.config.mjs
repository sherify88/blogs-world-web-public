/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [process.env.NEXT_PUBLIC_S3_DOMAIN,],
    },
  };
  
  export default nextConfig;
  