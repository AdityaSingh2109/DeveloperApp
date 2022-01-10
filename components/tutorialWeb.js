import React from 'react';
 import { WebView } from 'react-native-webview';
  
const TutorialWeb = ({link}) => {
  return (
    <WebView 
 
    source={{ uri:  link}} />
  );
}
 
export default TutorialWeb;