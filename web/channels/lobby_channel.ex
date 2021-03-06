defmodule PhoenixTest.LobbyChannel do
  require Logger
  use Phoenix.Channel

  def join("lobby", _payload, socket) do
    {:ok, socket}
  end

  def handle_in("new_message", payload, socket) do
    %{"message" => message, "name" => name} = payload
    Logger.debug "new_message: #{inspect payload} name: #{name} message: #{message}"
    broadcast! socket, "new_message", payload
    {:noreply, socket}
  end
end
