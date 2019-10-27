import React, {useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {withNavigation} from 'react-navigation';
import htmlWrapper from '../../helpers/htmlWrapper';
import styles from './styles';

const AutoHeightWebView = ({html}) => {
  const [htmlHeight, setHtmlHeight] = useState(0);
  const onWebViewMessage = event => {
    setHtmlHeight(Number(event.nativeEvent.data));
  };

  return (
    <View
      style={{
        ...styles.container,
        height: htmlHeight || styles.container.height,
      }}>
      <WebView
        source={{html: htmlWrapper(html)}}
        domStorageEnabled={true}
        startInLoadingState={true}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        onMessage={onWebViewMessage}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </View>
  );
};

export default withNavigation(AutoHeightWebView);
