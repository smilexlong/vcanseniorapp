import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Platform,
	ActivityIndicator
} from 'react-native';

/*size: Inverse,Large,Small*/
export default class LoadingView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.isVisible) {
			return (
				<View style={styles.container}>
					<ActivityIndicator styleAttr={this.props.size} color={this.props.color}/>
					<Text style={styles.text}>{this.props.text}</Text>
                </View>
			);
		} else {
			return (<View/>);
		}
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#999999',
		fontSize: 15,
		marginTop: 10,
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
	}
});