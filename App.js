import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './views/redux/store';
import { checkAuthStatus } from './views/redux/authSlice';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './components/routes/navigation';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
    dispatch(checkAuthStatus());
  }, []);

  return <RootNavigator />;
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
