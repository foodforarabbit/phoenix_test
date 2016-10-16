// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "web/static/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/my_app/endpoint.ex":
import {Socket} from "phoenix"

class WtsChatSocket {

  constructor({ room } = {}) {
    this.room = (room && `room:${room}`) || 'lobby';
  }

  connect() {
    let socket = new Socket("/socket", {params: {token: window.userToken}})

    socket.connect()

    // Now that you are connected, you can join channels with a topic:
    console.log(`joining: ${this.room}`)
    let channel = socket.channel(this.room, {});
    let list    = $('#message-list');
    let message = $('#message');
    let name    = $('#name');

    message.on('keypress', event => {
      if (event.keyCode == 13) {
        channel.push('new_message', { name: name.val(), message: message.val() });
        message.val('');
      }
    });

    channel.on('new_message', payload => {
      list.append(`<b>${payload.name || 'Anonymous'}:</b> ${payload.message}<br>`);
      list.prop({scrollTop: list.prop("scrollHeight")});
    });

    channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }
}



export default WtsChatSocket
