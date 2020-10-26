import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import Button from './ButtonComponent';
import FormContext from './Context/FormContext';

const Footer = () => {
    const {formVisible, setFormVisible} = useContext(FormContext)

    return (
        <div className='footer-container' id='contacts'>

            <div className='footer-menu'>
            <Link activeClass="active" to="forWho" spy={true} smooth={true} duration={800}><div className='footer-menu-item'>За кого са подходящи консултациите</div></Link>
            <Link activeClass="active" to="expect" spy={true} smooth={true} duration={800}><div className='footer-menu-item'>Какво да очаквате</div></Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} duration={800}><div className='footer-menu-item'>Услуги и цени</div></Link>
            <Link activeClass="active" to="aboutUs" spy={true} smooth={true} duration={800}><div className='footer-menu-item'>За нас</div></Link>
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={800}><div className='footer-menu-item'>Начало</div></Link>
            </div>

            <div className='footer-center'>
                <img src='/careflow-white.png' alt='logo' />
                <div style={{ fontSize: '1em' }}>Консултации за ментално здраве</div>
                <Button label='ЗАПАЗИ ЧАС' onClick={() => setFormVisible(!formVisible)} style={{ fontSize: '1em', marginLeft: 'auto', marginRight: 'auto', marginTop: '2em' }} />

                <span className='phone' style={{ display: 'block' }} ><i style={{ marginRight: '0.5em', marginBottom: '0.5em' }} className="fas fa-phone-alt"></i>+359 878 971 776</span>
                <span className='email' style={{display: 'block'}}><i style={{ marginRight: '0.5em' }} className="fas fa-envelope"></i>careflow.info@gmail.com</span>
                <div className='icon-container' style={{justifyContent: 'center', marginTop: '1em'}}>
                <a target='blank' style={{color: 'white'}} href='https://www.facebook.com/CareFlowConsulting'><i className="fab fa-facebook"></i></a>
                <a target='blank' style={{color: 'white'}} href='https://www.instagram.com/carefloww/'><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <div className='the-easiest-way-to-contact-us-text'>
                Най-бързия и лесен начин да се свържете с нас е като ни пишете във <a target="blank" href='https://www.facebook.com/CareFlowConsulting'>Фейсбук страницата ни</a>
            </div>


        </div>
    );
}

export default Footer;