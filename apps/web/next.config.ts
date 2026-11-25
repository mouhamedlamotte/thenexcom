import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@repo/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Le portfolio est servi sur /@mouhamedlamotte. Un dossier « @… » est un slot de routes parallèles
  // pour Next, donc la page vit dans app/mouhamed-lamotte et on la réécrit ; l'ancienne adresse redirige.
  async rewrites() {
    return [{ source: "/@mouhamedlamotte", destination: "/mouhamed-lamotte" }];
  },
  async redirects() {
    return [{ source: "/mouhamed-lamotte", destination: "/@mouhamedlamotte", permanent: true }];
  },
};

export default nextConfig;
