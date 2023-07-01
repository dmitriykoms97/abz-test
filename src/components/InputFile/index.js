import React from 'react';
import styles from './index.module.scss';

const InputFile = ({ handleChange, file, error }) => {
    return (
        <div className={styles.root}>
            <label htmlFor="file-upload" className={styles.customInput}>
                <div className={`${styles.leftPart} ${error ? styles.error : ''}`}>
                    Upload
                </div>
                <div className={`${styles.rightPart} ${error ? styles.error : ''}`}>
                    <p>{file ? file.name : 'Upload your photo'}</p>
                </div>
            </label>
            <input type='file' id='file-upload' onChange={handleChange}/>
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
};

export default InputFile;