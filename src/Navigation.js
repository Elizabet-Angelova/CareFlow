import React from 'react';
import { Link } from 'react-scroll';

const Navigation = ({ menuClass }) => {
    return (
        <div className={`navigation-container ${menuClass}`}>
            <Link activeClass="active" to="forWho" spy={true} smooth={true} duration={800}><div className='menu-item'>За кого са подходящи консултациите</div></Link>
            <Link activeClass="active" to="expect" spy={true} smooth={true} duration={800}><div className='menu-item'>Какво да очаквате</div></Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} duration={800}><div className='menu-item'>Услуги и цени</div></Link>
            <Link activeClass="active" to="aboutUs" spy={true} smooth={true} duration={800}><div className='menu-item'>За нас</div></Link>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={800}><div className='menu-item'>Контакти</div></Link>
            
            
            
            

            <div className='icon-container'>
                <a target='blank' style={{color: 'white'}} href='https://www.facebook.com/CareFlowConsulting'><i className="fab fa-facebook"></i></a>
                <a target='blank' style={{color: 'white'}} href='https://www.instagram.com/carefloww/'><i className="fab fa-instagram"></i></a>
            </div>

            <div className='email-phone-holder'>
                <span className='phone' style={{ display: 'block' }} ><i style={{ marginRight: '0.5em', marginBottom: '0.5em' }} className="fas fa-phone-alt"></i>+359 878 971 776</span>
                <span className='email' style={{ display: 'block' }}><i style={{ marginRight: '0.5em' }} className="fas fa-envelope"></i>careflow.info@gmail.com</span>
            </div>

        </div>
    );
}

export default Navigation;