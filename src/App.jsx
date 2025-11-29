import { Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import PageProductsContainer from './components/PageProducts/PageProductsContainer';
import PageBasketContainer from './PageBasket/PageBasketContainer';

function App() {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <Routes>
                    <Route path='/' element={<PageProductsContainer />} />
                    <Route path='/basket' element={<PageBasketContainer />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
