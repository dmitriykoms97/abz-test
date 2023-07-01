import React from 'react';
import styles from './index.module.scss';

const Card = ({ avatar, name, position, email, phone }) => {
    return (
        <div className={styles.root}>
            <img src={avatar} alt={name} className={styles.avatar}/>
            <p>
                {name}
            </p>
            <div className={styles.info}>
                <p>
                    {position}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    {phone}
                </p>
            </div>
        </div>
    );
};

export default Card;