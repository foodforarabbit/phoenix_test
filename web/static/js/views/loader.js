
import MainView    from './main';
import ChatShowView from './chat/show';
import ChatIndexView from './chat/index';

// Collection of specific view modules
const views = {
  ChatShowView,
  ChatIndexView,
};

export default function loadView(viewName) {
  return views[viewName] || MainView;
}
