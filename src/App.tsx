import { Route, Routes } from 'react-router-dom';
import PageProductsContainer from './components/PageProducts/PageProductsContainer';
import PageBasketContainer from './PageBasket/PageBasketContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';
const App: React.FC = () => {
    return (
        <>
            <div className='wrapper'>
                <HeaderContainer />
                <Routes>
                    <Route path='' element={<PageProductsContainer />} />
                    <Route path='/cart' element={<PageBasketContainer />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
