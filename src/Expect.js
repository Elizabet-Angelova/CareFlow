import React, { useContext } from 'react';
import Button from './ButtonComponent';
import FormContext from './Context/FormContext';

const Expect = () => {
    const {formVisible, setFormVisible} = useContext(FormContext)

    return (
        <div className='expect-page-container' id='expect'>
            <div className='title-and-text-holder'>
            <div className='green-title expect-title' style={{marginBottom: '0.8em'}}>КАКВО ДА ОЧАКВАТЕ?</div>
            <img src='/kakvo-da-ochakvate.png' alt='image' className='expect-image-resp' />
          
          <div className='regular-text'>
            Първата консултация при нас протича в рамките на 1 час и представлява разговор с вашия личен консултант.
            </div>
            <div className='regular-text'>Целта е той да се запознае с това кои сте вие и какво е естеството на проблема, по който бихте искали да работите или сферата от вашия живот, която бихте искали да подобрите.</div>
            <div className='regular-text'>В последващите консултации главните цели ще бъдат активно осъзнаване, изследване и преодоляване на проблема, като средствата за това се подбират индивидуално за всеки човек.</div>
            <Button onClick={() => setFormVisible(!formVisible)} label='ЗАПОЧНЕТЕ ОЩЕ ДНЕС' style={{fontSize: '1.1em'}}/>
            </div>
            <img src='/kakvo-da-ochakvate.png' alt='image' className='expect-image' />
        </div>
    );
}

export default Expect;