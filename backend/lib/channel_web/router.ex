defmodule ChannelWeb.Router do
  use ChannelWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ChannelWeb do
    pipe_through :api
  end

  # Enable LiveDashboard in development
  if Application.compile_env(:channel, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: ChannelWeb.Telemetry
    end
  end
end
