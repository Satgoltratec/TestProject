/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {createContext, useContext, useState} from 'react';
import 'react-native-gesture-handler';
import MainNavigation from './components/MainNavigation';
import AuthProvider from './components/context/AuthContext';

function App(): React.JSX.Element {
  return (
    <>
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
    </>
  );
}

export default App;
