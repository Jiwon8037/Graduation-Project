import React from 'react';
import AuthContainer from '../../containers/AuthContainer';
import AuthTemplate from './AuthTemplate';
import Register from './Register';

const AuthPage = ({componentName}) => {
    return (
        <AuthTemplate>
            {componentName==='login'?(
                <AuthContainer/>
            ):(
                <Register/>
            )}
        </AuthTemplate>
    );
};

export default AuthPage;