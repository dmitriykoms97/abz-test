import React from 'react';
import { ReactComponent as Logo } from './images/Logo.svg';
import styles from './index.module.scss';
import Button from '../Button';

const Header = ({ handleUsersScroll, handleSignUpScroll }) => {
    return (
        <div className={styles.root}>
            <Logo />
            <div className={styles.buttonsGroup}>
                <Button label='Users' onClick={handleUsersScroll}/>
                <Button label='Sign up' onClick={handleSignUpScroll}/>
            </div>
        </div>
    );
};

export default Header;