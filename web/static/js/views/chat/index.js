import MainView from '../main';

import WtsChatSocket from "./wts_chat_socket"

export default class View extends MainView {
  mount() {
    super.mount();
    const wts_chat_socket = new WtsChatSocket();
    wts_chat_socket.connect();
    // Specific logic here
    console.log('ChatIndexView mounted');
  }

  unmount() {
    super.unmount();

    // Specific logic here
    console.log('ChatIndexView unmounted');
  }
}
