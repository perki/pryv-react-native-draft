import React from 'react';
import WebView from '../../../lib/webview';

//const registerUrl = 'https://sw.pryv.me/access/register.html';
export default ({ route }) => {
  const { url } = route.params;
    return (
      <WebView
        source={{ uri: url }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    );
};
