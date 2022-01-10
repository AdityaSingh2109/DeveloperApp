import React from 'react';
 import { WebView } from 'react-native-webview';
  
const CompilerWeb = ({link}) => {
  return (
    <WebView 
 style={{marginTop:-50}}
    source={{ uri:  link}} />
  );
}
 
export default CompilerWeb;