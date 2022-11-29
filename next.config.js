/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 유저가 contact로 갈려면
        source: "/old-url/:path*",
        // 우리가 유저를 form으로 보냄
        destination: "/new-url/:path*",
        // 저장(기억)해야되면 true로
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig
