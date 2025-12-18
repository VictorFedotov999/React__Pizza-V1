import React from 'react';
import preloader from '../assets/img/c.gif';

const Preloader = (props) => {
    return (
        <div className='Preloader'>
            <img src={preloader} alt='' />
        </div>
    );
};

export default Preloader;
