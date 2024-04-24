/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinifyModeEnabled: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{  member }}"
    }
  }
};

export default nextConfig;
