import { createSecureHeaders } from "next-secure-headers";


let nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "amazonaws.com", "lh3.googleusercontent.com", "alephholding--test.sandbox.file.force.com"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              workerSrc: ["'self'", "blob:"],
              defaultSrc: [
                "'self'",
                "'unsafe-inline'",
                "'unsafe-eval'",
                "https://res.cloudinary.com"
              ],
              scriptSrcElem: [
                "'self'",
                "'unsafe-inline'",
              ],
              styleSrc: [
                "https://fonts.googleapis.com",
                "'self'",
                "'unsafe-inline'",
              ],
              imgSrc: ["'self'", "blob: data:", "data:", "https://res.cloudinary.com"],
            },
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 2592000, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }).concat([
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "",
          },
        //   {
        //     key: "Access-Control-Allow-Origin",
        //     value: "https://usequantum.ai",
        //   },
        ]),
      },
    ];
  },
  swcMinify: true
};

export default nextConfig;
