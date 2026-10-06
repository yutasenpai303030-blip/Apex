import worker from './worker.js';
export default {
  async fetch(r, e, c) {
    const u = new URL(r.url);
    if (!u.href.includes("riosaputra")) {
      if (u.pathname.includes("panel") || u.pathname.includes("rio-")) {
        return new Response("404 Not Found", {status: 404});
      }
    }
    return worker.fetch(r, e, c);
  }
};
