import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :channel, ChannelWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "cXI4tr12LqPhETRWg278kLBUOm5FqU8idU2yzlV8SDku2sKx+CJdlPdv4H0mLgiB",
  server: false

# In test we don't send emails
config :channel, Channel.Mailer, adapter: Swoosh.Adapters.Test

# Disable swoosh api client as it is only required for production adapters
config :swoosh, :api_client, false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime

# Sort query params output of verified routes for robust url comparisons
config :phoenix,
  sort_verified_routes_query_params: true
