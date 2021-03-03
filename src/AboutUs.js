import React from 'react';

const AboutUs = () => {
    return (
        <div className='about-page-container' id='aboutUs'>
            <div className='about-content'>
                <div className='image-holder'>
                    <img src='/elizabet.jpg' alt='image' className='my-image' />
                    <div className='regular-text' style={{ fontSize: '0.7em' }}>Михаела, основател и консултант</div>
                </div>

                <div className='about-text'>
                    <div className='green-title' >ЗА НАС</div>
                    <div className='image-holder2'>
                    <img src='/elizabet.jpg' alt='image' className='my-image' />
                    <div className='regular-text' style={{ fontSize: '0.7em' }}>Елизабет, основател и консултант</div>
                </div>
                    <div className='regular-text' style={{paddingTop: '1.7em'}}>
                        Здравейте!
                    </div>
                    <div className='regular-text'>
                        Името ми е Михаела и освен основател на <img src='/careflow-black.png' alt='CareFlow' style={{width: '7em', padding: '0em 0.3em 0 0.3em'}}/> съм един от милионите хора по света, чието качество на живот е било повлияно от психологическо разстройство. Всъщност от цели 3 такива!
                        След дългогодишна битка и всевъзможни неуспешни методи и терапии успях да се възстановя напълно.

                    </div>
                    <div className='regular-text'>Днес съм благодарна за всяка една трудност по пътя, тъй като именно това бе причината да развия интерес към психологията и да науча от опит множество стратегии и подходи за справяне с негативни ментални състояния.
                    </div>
                    <div className='regular-text'>Желанието да помогна на хора, попаднали в ситуация, подобна на моята, се зароди естествено в мен и CareFlow е продукт именно на това.</div>
                </div>
            </div>

            <div className='green-subheading' style={{margin: '1.5em 0 0 0'}}>Нашата мисия </div>
            <div className='accent-regular-text'>е да осигурим необходимата на всеки подкрепа и информация за да води пълноценен живот, без ежедневието му да е помрачено от психологически неразположения.</div>
        </div>
    );
}

export default AboutUs;