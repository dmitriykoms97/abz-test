import React from 'react';
import styles from './index.module.scss';

const Input = ({ value, onChange, placeholder, hint, error }) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <input
                    value={value}
                    onChange={onChange}
                    className={`${styles.input} ${error ? styles.error : ''}`}
                />
                <label className={`${styles.placeholder}
                ${value ? styles.placeholderActive : ''}
                ${error ? styles.placeholderError : ''}`}>
                    {placeholder}
                    <div className={`${styles.placeholderBack} ${value ? styles.placeholderBackActive : ''}`}/>
                </label>
            </div>
            {hint && !error && <p className={styles.hint}>{hint}</p>}
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
};

export default Input;