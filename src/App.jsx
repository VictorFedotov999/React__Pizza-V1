import { Route, Routes } from 'react-router';
import PageProductsContainer from './components/PageProducts/PageProductsContainer';
import PageBasketContainer from './PageBasket/PageBasketContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
    return (
        <>
            <div className='wrapper'>
                <HeaderContainer />
                <Routes>
                    <Route path='' element={<PageProductsContainer />} />
                    <Route path='/basket' element={<PageBasketContainer />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
