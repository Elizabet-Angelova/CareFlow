import React, { useContext, useState } from 'react';
import Button from './ButtonComponent';
import FormContext from './Context/FormContext';
import Input from './Input';
import { init, send } from 'emailjs-com';

const Form = () => {
    init("user_tkUUu5jK7RuIDyZh8Udvk");

    const { formVisible, setFormVisible } = useContext(FormContext)
    const [sucessRequest, setSucessRequest] = useState(false)
    const [failRequest, setFailRequest] = useState(false)
    const [onceSumbited, setOnceSubmited] = useState(false)
    const [emtyFields, setEmptyFields] = useState(false)
    const [buttonLoader, setButtonLoader] = useState(false)


    const [data, setData] = useState({
        name: {
            value: '',
            touched: false,
            valid: undefined,
        },
        phone: {
            value: '',
            touched: false,
            valid: undefined,
        },
        email: {
            value: '',
            touched: false,
            valid: undefined,
        },
        preferences: {
            value: '',
            touched: false,
            valid: undefined,
        }
    });

    const updateData = (prop, value) => setData({
        ...data,
        [prop]: {
            value,
            touched: true,
            valid: dataValidators[prop].reduce((isValid, validatorFn) => isValid && (typeof validatorFn(value) !== 'string'), true),
        }
    });


    const getValidationErrors = (prop) => {
        return dataValidators[prop].map((validatorFn) => validatorFn(data[prop].value))
            .filter(value => typeof value === 'string');
    }


    const validateForm = () => !Object
        .keys(data)
        .reduce((isValid, prop) => isValid && data[prop].valid && data[prop].touched, true)

    const saveHour = () => {
        setOnceSubmited(true)
        setButtonLoader(true)

        if (!validateForm()) {
            send("service_180772", "template_9dfi68m", {
                customer_name: data.name.value,
                customer_phone: data.phone.value,
                customer_email: data.email.value,
                customer_prefference: data.preferences.value,
            })
                .then((response) => {
                    console.log('SUCCESS!');
                    setEmptyFields(false)
                    setSucessRequest(true)
                    setButtonLoader(false)
                }).catch(error => {
                    console.log('FAIL');
                    setEmptyFields(false)
                    setFailRequest(true)
                    setButtonLoader(false)
                });

        } else {
            setEmptyFields(true)
            setButtonLoader(false)
        }
    }

    const getClassNames = (prop) => {
        let classes = '';
        if (data[prop].touched && onceSumbited) {
            classes += ' touched '
        }
        if (data[prop].valid && onceSumbited) {
            classes += ' valid ';
        }
        if (data[prop].touched && !data[prop].valid && onceSumbited) {
            classes += ' invalid ';
        } else {
            classes += ''
        }

        return classes
    }

    const dataValidators = {
        name: [
            value => value?.length >= 2 || 'Името трябва да е поне 2 символа.',
            value => /^[^<>%$#&@*-/@!?^=`'"_]*$/.test(value) || 'Името може да съдържа само букви.',

        ],
        phone: [
            value => /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) || 'Моля въведете валиден телефонен номер.',
        ],
        email: [
            value => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Моля въведете валиден имейл адрес.',
        ],
        preferences: [
            value => value?.length > 1 || 'Моля въведете предпочитани дата и час за консултацията.',
        ],
    };


    return (
        <FormContext.Provider value={{ formVisible, setFormVisible }}>
            <div className='form'>
                <div className='form-window'>
                    <div className='close-icon-holder'><i onClick={() => setFormVisible(!formVisible)} className='fa fa-times'></i></div>


                    {sucessRequest && <div style={{ marginBottom: '2em', fontWeight: 'bold', color: 'green' }}>Успешно запазихте час! Наш консултант ще се свърже с вас за потвърждение.</div>}
                    {failRequest && <div style={{ marginBottom: '2em', fontWeight: 'bold', color: 'rgb(196, 0, 0)' }}>Нещо се обърка! Моля опитайте по-късно.</div>}
                    <div className={`form-content-container ${sucessRequest || failRequest ? 'displayNone' : ''}`} >
                        <div className='inputs-holder'>
                            <Input
                                className={getClassNames('name')} value={data.name.value} onChange={(ev) => updateData('name', ev.target.value)} type='text' placeholder='Име и фамилия'
                                label='Име и фамилия'
                                error={onceSumbited && data.name.touched && !data.name.valid
                                    ? getValidationErrors('name').filter((er) => getValidationErrors('name').indexOf(er) === 0 && `${er}`)
                                    : ''} />
                            <Input
                                className={getClassNames('phone')} value={data.phone.value} onChange={(ev) => updateData('phone', ev.target.value)} type='text' placeholder='Телефонен номер'
                                label='Телефонен номер'
                                error={onceSumbited && data.phone.touched && !data.phone.valid
                                    ? getValidationErrors('phone').filter((er) => getValidationErrors('phone').indexOf(er) === 0 && `${er}`)
                                    : ''} />
                            <Input
                                className={getClassNames('email')} value={data.email.value} onChange={(ev) => updateData('email', ev.target.value)} type='text' placeholder='Имейл адрес'
                                label='Имейл адрес'
                                error={onceSumbited && data.email.touched && !data.email.valid
                                    ? getValidationErrors('email').filter((er) => getValidationErrors('email').indexOf(er) === 0 && `${er}`)
                                    : ''} />
                        </div>

                        <div className='textarea-holder'>
                            <label className='input-label'>
                                Предпочитана дата и час за консултация
                                <div style={{ fontWeight: 'normal' }}>(можете да въведете повече от един ден и час, който е удобен за вас)</div>
                                <textarea className={`input ${getClassNames('preferences')}`} value={data.preferences.value} onChange={(ev) => updateData('preferences', ev.target.value)} />
                            </label>
                            <div className='error-message'>
                                {onceSumbited && data.preferences.touched && !data.preferences.valid
                                    && getValidationErrors('preferences').filter((er) => getValidationErrors('preferences').indexOf(er) === 0 && `${er}`)
                                }
                            </div>

                            <div className='regular-text' style={{ fontSize: '0.8em' }}>
                                Наш консултант ще се свърже с вас за потвърждение на часа или за уговорка на нов, ако посочения от вас е зает.
                    </div>
                        </div>
                    </div>

                    {emtyFields && <div style={{ fontSize: '0.8em', color: 'rgb(196, 0, 0)' }}>Моля попълнете коректно всички полета.</div>}
                    {buttonLoader
                        ? <div style={{ marginBottom: '1.5em', marginTop: '1em', fontSize: '1.3em', fontWeight: 'bold', color: 'var(--green)' }}>Зареждане...</div>
                        : <Button label='ЗАПАЗИ ЧАС' style={{ marginBottom: '2em' }} onClick={saveHour} className={`${sucessRequest || failRequest ? 'displayNone' : ''}`} />}
                    <div style={{ display: 'flex', paddingRight: '1em' }}>
                        <div className='the-easiest-way-to-contact-us-text' style={{ padding: 0, textAlign: 'left', lineHeight: '1.3em', width: '80%', fontSize: '0.85em', fontFamily: 'Century Gothic, sans-serif' }}>
                            Най-бързия и лесен начин да запазите час е като ни пишете във <a target="blank" href='https://www.facebook.com/CareFlowConsulting'>Фейсбук страницата на CareFlow </a>
                или чрез позвъняване на +359 878 971 776.
            </div>
                        <img src='/cf-black.png' className='logo-form' style={{ marginLeft: 'auto', width: 'auto', height: '6vh' }} />
                    </div>

                </div>
            </div>
        </FormContext.Provider>
    );
}

export default Form;