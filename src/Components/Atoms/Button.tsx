import React from 'react';
import { ButtonPropsType } from '../Types/ButtonType';

const Button = (props: ButtonPropsType) => {
    const { title, color, backgroundColor } = props;
    return (
        <div
            style={{
                background: backgroundColor,
                borderRadius: 5,
                width: 120,
                color: color,
                
            }}
        >
            <p style={{ textAlign: 'center', padding: 10 }}>{title}</p>
        </div>
    );
};

export default Button;
