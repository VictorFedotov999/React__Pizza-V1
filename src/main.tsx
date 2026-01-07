import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/reduxStore.js';
import App from './App.jsx';
import './scss/app.scss';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
