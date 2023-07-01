import React from 'react';
import backgroundImage from './images/backgroundImage.png';
import styles from './index.module.scss';
import Button from '../Button';

const IntroBanner = ({ handleSignUpScroll }) => {
    return (
        <div className={styles.root}>
            <img
                src={backgroundImage}
                alt='background'
                className={styles.backgroundImage}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Test assignment for front-end developer
                </h1>
                <p className={styles.description}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                    vast understanding of User design thinking as they'll be building web interfaces with accessibility
                    in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Button label='Sign up' onClick={handleSignUpScroll}/>
            </div>
        </div>
    );
};

export default IntroBanner;