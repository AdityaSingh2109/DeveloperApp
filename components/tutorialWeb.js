import React from 'react';
 import { WebView } from 'react-native-webview';
  
const TutorialWeb = () => {
  return (
    <WebView source={{ uri: 'https://www.w3schools.com/js/js_es6.asp' }} />
  );
}
 
export default TutorialWeb;