defmodule PhoenixTest.ChatController do
  use PhoenixTest.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def show(conn, %{"room" => room}) do
    render conn, "show.html", room: room
  end
end
