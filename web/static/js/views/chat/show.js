import MainView from '../main';

import WtsChatSocket from "./wts_chat_socket"

export default class View extends MainView {
  mount() {
    super.mount();
    let list    = $('#message-list');
    const room = list.data('room');
    const wts_chat_socket = new WtsChatSocket({room});
    wts_chat_socket.connect();
    // Specific logic here
    console.log('ChatShowView mounted');
  }

  unmount() {
    super.unmount();

    // Specific logic here
    console.log('ChatShowView unmounted');
  }
}
