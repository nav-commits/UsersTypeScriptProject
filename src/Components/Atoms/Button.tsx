import React from 'react';
import { ButtonPropsType } from '../Types/ButtonType';

const Button = (props: ButtonPropsType) => {
    const { title, color, backgroundColor } = props;
    return (
        <div style={{ background: backgroundColor, borderRadius: 10, width: 120, color: color }}>
            <p>{title}</p>
        </div>
    );
};

export default Button;
