import React from 'react';
import { ReactComponent as LoaderIcon } from './images/Preloader.svg';
import styles from './index.module.scss';

const Loader = () => {
    return <div className={styles.loaderWrapper}>
        <LoaderIcon className={styles.loader}/>
    </div>;
};

export default Loader;