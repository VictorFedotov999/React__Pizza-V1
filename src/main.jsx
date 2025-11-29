import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './scss/app.scss';
import { BrowserRouter } from 'react-router';
import store from './Redux/reduxStore.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
