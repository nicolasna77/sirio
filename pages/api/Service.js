// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
