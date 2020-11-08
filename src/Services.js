import React from 'react';

const Services = () => {
    return (
        <div className='services-page-container' id='services'>
            <div className='green-title'>УСЛУГИ И ЦЕНИ</div>
            <div className='services-holder'>
                <div className='service-container'>
                    <i className="couch2 fas fa-couch"></i>
                    <div style={{ fontWeight: 'bold' }}>Консултация в офис</div>
                    <div className='regular-text'>
                        Към момента поради ситуацията в страната консултации се провеждат само онлайн.
                    </div>

                    <div className='regular-text'>
                        Продължителност: 60 минути
                    </div>

                    <div className='regular-text'>
                        Цена: 50 лв
                    </div>
                </div>

                <div className='service-container'>
                    <i className="fas fa-laptop"></i>
                    <div style={{ fontWeight: 'bold' }}>Онлайн
                    консултации
                    </div>
                    <div className='regular-text'>
                        Провеждат се по Zoom,
                        Skype, Facebook или друга платформа по желание на клиента

                    </div>

                    <div className='regular-text'>
                        Продължителност: 60 минути
                    </div>

                    <div className='regular-text'>
                        Цена: 50 лв
                    </div>
                </div>

                <div className='service-container'>
                    <i className="fas fa-paint-brush"></i>
                    <div style={{ fontWeight: 'bold' }}>Арт терапия
</div>
                    <div className='regular-text'>
                        Провеждат се в офиса на
                        CareFlow.
                        Поради ситуацията в страната към момента не се предлага.

                    </div>

                    <div className='regular-text'>
                        Продължителност: 60 минути
                    </div>

                    <div className='regular-text'>
                        Цена: 60 лв
                    </div>
                </div>

            </div>
            <div className='regular-text' style={{fontSize: '0.8em'}}>Плащанията за онлайн консултациите се осъществяват по банков път или чрез паричен превод през Спиди/Еконт.</div>
        </div>
    );
}

export default Services;