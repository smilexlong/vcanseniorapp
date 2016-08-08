'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	StyleSheet,
	Dimensions,
	WebView
} from 'react-native';

export default class HomeRadar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var DEFAULT_URL = 'http://dss.hongtai.org.cn/Apps/Index?orgId=' + this.props.orgId;
		var windowsHeight = Dimensions.get('window').height;
		return (
			<View style={styles.containers}>		
			    <WebView style={styles.webview_style} source={{uri: DEFAULT_URL}} startInLoadingState={true} domStorageEnabled={true} javaScriptEnabled={true}
          >
        </WebView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	webview_style: {
		backgroundColor: '#fcfcfc',
	}
});