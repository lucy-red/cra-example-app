import React from 'react';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducer/index';
import App from './component/App'
import './index.css';

const store = configureStore(reducer,{
	"todos" : [
		{"id":1, "todo":"빨래하기", "complete":false},
		{"id":2, "todo":"청소하기", "complete":false},
		{"id":3, "todo":"공부하기", "complete":false}
	]
});

ReactDOM.render(
  <Provider store={store}>
	    <App/>
  </Provider>,
  document.getElementById('root')
);

// store.subscribe(render);
// render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
