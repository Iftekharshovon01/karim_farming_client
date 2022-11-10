import React, { createContext } from 'react';
import { getAuth } from "../../Firebase/app";
import app from '../../Firebase/firebase.config'

const AuthContext = createContext();
const auth = getAuth(app);

const authInfo = {}

const AuthProvider = () => {
    return (
        <AuthContext.provider value={authInfo}>

        </AuthContext.provider>
    );
};

export default AuthProvider;