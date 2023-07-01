import React from 'react';
import { ReactComponent as SuccessImage } from './images/success-image.svg';
import styles from './index.module.scss';

const RegisteredSuccess = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>
                User successfully registered
            </h1>
            <SuccessImage />
        </div>
    );
};

export default RegisteredSuccess;