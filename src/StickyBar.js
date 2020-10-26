import React, { useContext, useState } from 'react';
import FormContext from './Context/FormContext';
import MenuContext from './Context/MenuContext';
import Navigation from './Navigation';

const StickyBar = () => {
    const { menuIsOpen, setMenuIsOpen} = useContext(MenuContext)
    const {formVisible, setFormVisible} = useContext(FormContext)

    return ( 
        <>
        <div className='sticky-container'>
            <img src='/careflow-white.png' alt='logo' className='logo-sticky'/>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
            <span className='phone'><i style={{marginRight: '0.5em'}} className="fas fa-phone-alt"></i>+359 878 971 776</span>
            <span className='email'><i style={{marginRight: '0.5em', marginLeft: '2.3em'}} className="fas fa-envelope"></i>careflow.info@gmail.com</span>
            <span className='zapazi-chas' onClick={() => setFormVisible(!formVisible)} >ЗАПАЗИ ЧАС</span>
            <i onClick={() => setMenuIsOpen(!menuIsOpen)} className={`${menuIsOpen ? 'fas fa-times' : 'fas fa-bars'}`}></i>

</div>
        
        </div>
        <Navigation menuClass={menuIsOpen ? 'showMenu' : 'hideMenu'}/>
        </>
     );
}
 
export default StickyBar;