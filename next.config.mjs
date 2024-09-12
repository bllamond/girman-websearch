/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the current file URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-side code: Remove Node.js built-in modules
      config.resolve.alias['fs'] = path.resolve(__dirname, 'empty-module.js');
      config.resolve.alias['net'] = path.resolve(__dirname, 'empty-module.js');
      config.resolve.alias['tls'] = path.resolve(__dirname, 'empty-module.js');
      config.resolve.alias['child_process'] = path.resolve(__dirname, 'empty-module.js');
    } else {
      // Client-side code: Ensure no server-side modules are used
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false,
        // Add other modules that may need to be excluded or polyfilled
      };
    }

    return config;
  },
};

export default nextConfig;
