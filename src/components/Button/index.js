import React from 'react';
import styles from './index.module.scss';

const Button = ({ label, onClick, className, type = 'button', disabled }) => {
    return (
        <button
            className={`${styles.root} ${className ? className : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;