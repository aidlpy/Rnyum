import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView,Dimensions} from 'react-native';


const { width, height } = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height: 64, width:width, justifyContent:'center', alignItems:'center'}}>
                    <Text>测试webView适配高度</Text>
                </View>
                <View style={{height: 49, width:width, justifyContent:'center', alignItems:'center'}}>
                    <Text>测试webView适配高度</Text>
                </View>
            </View>
        );
    }
}

