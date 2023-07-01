import React from 'react';
import IntroBanner from '../IntroBanner';
import GetRequestBlock from '../GetRequestBlock';
import SignUpForm from '../SignUpForm';

const MainPage = ({ usersRef, signUpRef, handleSignUpScroll }) => {
    return (
        <>
            <IntroBanner signUpRef={signUpRef} handleSignUpScroll={handleSignUpScroll}/>
            <GetRequestBlock usersRef={usersRef}/>
            <SignUpForm signUpRef={signUpRef}/>
        </>
    );
};

export default MainPage;