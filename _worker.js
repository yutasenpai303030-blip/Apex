import worker from './worker.js';
export default {
  async fetch(r, e, c) {
    const u = new URL(r.url);
    const ref = r.headers.get("referer") || "";
    if (u.pathname.includes("rio-x7p9-k4m2-apex-private")) {
      if (!u.href.includes("riosaputra") && !ref.includes("riosaputra")) {
        return new Response("404 Not Found", {status: 404});
      }
    }
    return worker.fetch(r, e, c);
  }
};
