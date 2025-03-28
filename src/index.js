name = "mon-worker"
type = "javascript"

account_id = "c0dc54190b51d680cc5df0390222bdbb"  # Remplace par ton ID Cloudflare

# Ajoute ici le lien avec ton KV Storage
[[kv_namespaces]]
binding = "EMAILS_NAMESPACE"
id = "14c438b10a474d649f25c66880326f9a"