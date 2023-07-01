import React from 'react';
import styles from './index.module.scss';

const RadioButton = ({ id, label, onChange, checked }) => {
    return (
        <div className={styles.root}>
            <input
                type='radio'
                className={styles.radio}
                id={id}
                onChange={onChange}
                checked={checked}
            />
            <label className={styles.label} htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioButton;