import React, { useContext } from 'react';
import Button from './ButtonComponent';
import FormContext from './Context/FormContext';
import Form from './Form';

const HomePage = () => {
    const { formVisible, setFormVisible } = useContext(FormContext)

    return (
        <>
        {formVisible && <Form />}
        <div className='home-page-container' id='home'>
            <div className='home-page-text-content'>
                <img src='/care-black.png' alt='CareFlow' />
                <div className='green-subheading'>Консултации за ментално здраве</div>
                <div className='black-subheading'>Всяко негативно състояние на психиката подлежи на подобрение.</div>
                <div className='black-subheading'>Нека заедно открием ВАШИЯ начин да го постигнете!</div>
                <Button label='ЗАПАЗИ ЧАС' onClick={() => setFormVisible(!formVisible)}/>

                <div className='text-columns-container'>
                    <div className='column'>
                        <div style={{textAlign: 'center'}}><i className="couch fas fa-couch"></i></div>
                        <div className='column-text'>
                            Среща с опитен консултант в
                            уютната и предразполагаща обстановка на нашия офис или чрез онлайн консултация.
                        </div>
                    </div>

                    <div className='column'>
                    <div style={{textAlign: 'center'}}><i className="fas fa-brain"></i></div>
                        <div className='column-text'>
                            Стремеж към намиране на истинската причина за състоянието ви и активна работа за подобряването му.
                        </div>
                    </div>

                    <div className='column'>
                    <div style={{textAlign: 'center'}}><i className="fas fa-user-check"></i></div>
                        <div className='column-text'>
                            Индивидуален подход към всеки човек със съображение към уникалния за него начин на мислене и поведение.
                        </div>
                    </div>
                </div>

            </div>

            <img src='/bg-responsive.png' alt='background-image' className='background-responsive'/>
            <img src='/bg.png' alt='background-image' className='background'/>
        </div>
        </>
    );
}

export default HomePage;