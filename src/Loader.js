import React from 'react';

const Loader = ({fadeout}) => {
    return (
        <div className={`form fade-out`} style={{ background: 'black', zIndex: '100' }} >
                <div className='loader-text' style={{fontFamily: 'Onyx, serif', color: 'white', letterSpacing: '0.14em'}}>CareFlow</div>
            <div className='loader-circle'>
            </div>
        </div>
    );
}

export default Loader;