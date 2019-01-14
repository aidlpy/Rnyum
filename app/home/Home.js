import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView} from 'react-native';



var url = 'http://localhost/index';
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{height:40}}>简单的网页显示</Text>
                <WebView style={styles.webview_style}
                         source={{uri: 'http://www.baidu.com'}}
                         startInLoadingState={true}
                         domStorageEnabled={true}
                         javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },webview_style:{
        backgroundColor:'#00ff00',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});