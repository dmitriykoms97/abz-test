import React from 'react';
import MainLayout from './components/MainLayout';
import MainPage from './components/MainPage';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { useStore } from './store/store';

function App() {
    const store = useStore({});
    const usersRef = useRef();
    const signUpRef = useRef();
    const handleUsersScroll = () => {
        usersRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "start"
        });
    };
    const handleSignUpScroll = () => {
        signUpRef.current.scrollIntoView({
            behavior: "smooth",
            inline: "start"
        });
    };
    return (
        <Provider store={store}>
            <MainLayout
                handleUsersScroll={handleUsersScroll}
                handleSignUpScroll={handleSignUpScroll}>
                <MainPage
                    handleSignUpScroll={handleSignUpScroll}
                    usersRef={usersRef}
                    signUpRef={signUpRef}
                />
            </MainLayout>
        </Provider>
    );
}

export default App;
