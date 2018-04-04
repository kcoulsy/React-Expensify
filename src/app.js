import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'

import getVisibleExpenses from './selectors/expenses';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


//firebase/app-types
//react-with-direction
//remove extract - text -plugin

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>

)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(jsx, document.getElementById('app'));
});
