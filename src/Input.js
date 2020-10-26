import React from 'react';

const Input = ({ labelStyle, label, type, value, style, onChange, placeholder, className, error }) => {
    return (
        <div className='input-label-holder'>
            <label style={labelStyle} className='input-label'>{label}
                <input className={`input ${className}`} type={type} value={value} onChange={onChange} style={style} placeholder={placeholder} />
            </label>
            <div className='error-message'> {error}</div>
        </div>
    );
}

export default Input;