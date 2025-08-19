// Automatically generated to provide app.keys from environment
module.exports = ({ env }) => {
  // APP_KEYS should be a comma-separated list in /srv/cms/.env
  const raw = env(APP_KEYS, ) || ;
  const keys = raw ? raw.split(,).map(k => k.trim()).filter(Boolean) : [];

  return {
    host: env(HOST, 0.0.0.0),
    port: env.int(PORT, 1337),
    app: {
      keys: keys.length ? keys : [env(APP_KEY_FALLBACK, strapi-fallback-key)],
    },
    url: env(PUBLIC_URL, `http://${env(HOST, 127.0.0.1)}:${env.int(PORT, 1337)}`),
  };
};
