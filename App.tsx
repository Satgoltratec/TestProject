/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
// import 'react-native-gesture-handler';
import {RootNavigation} from './components/src/navigation';
import AuthProvider from './components/context/AuthContext';

function App(): React.JSX.Element {
  return (
    <>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </>
  );
}

export default App;
