import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Input from '../Input';
import getPositions from '../../api/getPositions';
import RadioButton from '../RadioButton';
import InputFile from '../InputFile';
import Button from '../Button';
import signUp from '../../api/signUp';
import RegisteredSuccess from '../RegisteredSuccess';
import Loader from '../Loader';
import getUsers from '../../api/getUsers';
import setUsers from '../../store/actions/setUsers';
import { useDispatch } from 'react-redux';

const SignUpForm = ({ signUpRef }) => {
    const dispatch = useDispatch();

    const [positions, setPositions] = useState([]);
    const [submitCount, setSubmitCount] = useState(0);
    const [checkedPosition, setCheckedPosition] = useState(null);
    const [file, setFile] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isRegisteredSuccess, setIsRegisteredSuccess] = useState(false);
    const [registrationError, setRegistrationError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPositions()
            .then(result => {
                setPositions(result);
            })
    }, [])

    let isSubmitDisabled = useMemo(() => {
        let isDisable;
        const registrationValues = Object.values(values);
        isDisable = !!(registrationError
            || registrationValues.some(value => !value)
            || !checkedPosition
            || !file);
        return isDisable;
    }, [registrationError, values, checkedPosition, file]);

    useEffect(() => {
        setRegistrationError({});
        setSubmitCount(0);
    }, [values, file])

    const handleRadioChange = (id) => {
        setCheckedPosition(id);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };
    const handleChangeName = (event) => {
        setValues({
            ...values,
            name: event.target.value
        });
    };
    const handleChangeEmail = (event) => {
        setValues({
            ...values,
            email: event.target.value
        });
    };
    const handleChangePhone = (event) => {
        setValues({
            ...values,
            phone: event.target.value
        });
    };
    const handleSubmit = () => {
        if (!checkedPosition || !file) {
            setSubmitCount(prev => prev + 1);
        } else {
            setIsLoading(true);
            const formData = new FormData();
            formData.append('photo', file);
            formData.append('name', values.name);
            formData.append('phone', values.phone);
            formData.append('email', values.email);
            formData.append('position_id', checkedPosition);
            signUp(formData)
                .then(response => {
                    console.log(response);
                    if (response.data) {
                        setIsRegisteredSuccess(true);
                        getUsers(1)
                            .then(({users}) => {
                                const sortedUsers = users.sort((a, b) => a.registration_timestamp > b.registration_timestamp);
                                dispatch(setUsers(sortedUsers));
                            });
                    } else {
                        setRegistrationError(response.response.data.fails);
                        setIsRegisteredSuccess(false);
                    }
                })
                .catch(error => {
                    setRegistrationError(error);
                })
                .finally(() => {
                    setIsLoading(false);
                    setSubmitCount(prev => prev + 1);
                })
        }
    };
    const requiredError = submitCount > 0 && Object.values(values).some(value => !value)
        ? 'Field is required!'
        : '';
    return (
        <div className={styles.root} ref={signUpRef}>
            <h1 className={styles.title}>
                Working with POST request
            </h1>
            {isRegisteredSuccess
                ? <RegisteredSuccess/>
                : <form className={styles.form}>
                    <div className={styles.inputsWrapper}>
                        <Input
                            placeholder='Your name'
                            value={values.name}
                            onChange={handleChangeName}
                            error={(registrationError['name'] && registrationError['name'][0])
                                || (!values.name && requiredError)}
                        />
                        <Input
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChangeEmail}
                            error={(registrationError['email'] && registrationError['email'][0])
                                || (!values.email && requiredError)}
                        />
                        <Input
                            placeholder='Phone'
                            value={values.phone}
                            onChange={handleChangePhone}
                            error={(registrationError['phone'] && registrationError['phone'][0])
                                || (!values.phone && requiredError)}
                            hint='+38 (XXX) XXX - XX - XX'
                        />
                    </div>
                    <p className={styles.positionTitle}>Select your position</p>
                    <div className={styles.radioGroup}>
                        {positions.map(({ id, name }) => {
                            return <div key={id}>
                                <RadioButton
                                    id={id}
                                    label={name}
                                    onChange={() => handleRadioChange(id)}
                                    checked={checkedPosition === id}
                                />
                            </div>
                        })}
                        {submitCount > 0 && !checkedPosition && <p className={styles.error}>
                            Field is required!
                        </p>}
                    </div>
                    <div className={styles.inputFile}>
                        <InputFile
                            handleChange={handleFileChange}
                            file={file}
                            error={(registrationError['photo'] && registrationError['photo'][0])
                                || (submitCount > 0 && !file && 'Field is required!')}
                        />
                    </div>
                    <div className={styles.submitButton}>
                        <Button label='Sign up' onClick={handleSubmit} disabled={submitCount > 0 && isSubmitDisabled}/>
                    </div>
                </form>}
            {isLoading && <Loader/>}
        </div>
    );
};

export default SignUpForm;