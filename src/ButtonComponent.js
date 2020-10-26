import React from 'react';

const Button = ({label, style, onClick, className}) => {
    return ( 
        <div className={`green-button ${className}`} style={style} onClick={onClick}>
            {label}
        </div>
     );
}
 
export default Button;