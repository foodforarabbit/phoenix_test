defmodule PhoenixTest.RoomChannel do
  require Logger
  use Phoenix.Channel

  def join("room:" <> room, _payload, socket) do
    {:ok, assign(socket, :room, room)}
  end

  def handle_in("new_message", payload, socket) do
    %{"message" => message, "name" => name} = payload
    Logger.debug "new_message: #{inspect payload} name: #{name} message: #{message}"
    Logger.debug "for room: #{socket.assigns.room}"
    broadcast! socket, "new_message", payload
    {:noreply, socket}
  end
end
