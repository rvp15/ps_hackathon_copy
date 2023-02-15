import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
//import provider,store for redux
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <Provider store={store}>
         <App />
    </Provider>
</ProSidebarProvider>;
   
 
  </React.StrictMode>
);