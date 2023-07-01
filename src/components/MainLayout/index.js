import React from 'react';
import Header from '../Header';
import styles from './index.module.scss';

const MainLayout = ({ children, handleSignUpScroll, handleUsersScroll }) => {
    return (
        <div className={styles.root}>
            <Header handleSignUpScroll={handleSignUpScroll} handleUsersScroll={handleUsersScroll}/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;