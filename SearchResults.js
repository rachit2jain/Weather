'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  TextInput,
  TouchableHighlight,
  Image, 
  ListView,
  ActivityIndicator
} from 'react-native';
var ReactNative = require('react-native');
function round(value) {
    
    return (Math.round(value))-273;
}
class SearchResults extends Component{
	constructor(props){
		super(props);	
		this.state = {
			currentTemp: this.props.temperature.temp,
			minTemp: this.props.temperature.temp_min,
			maxTemp: this.props.temperature.temp_max,
			humidity: this.props.temperature.humidity,
			description: this.props.description.main,
			
		};
	}

	render(){
		return(
			<View style = {styles.container} >
				
				<Text style ={styles.text1}> Current Temperature: {round(this.state.currentTemp,1)} </Text>
				<Text style ={styles.text}> Maximum Temperature: {round(this.state.maxTemp,1)} </Text>
				<Text style ={styles.text}> Minumum Temperature: {round(this.state.minTemp,1)} </Text>
				<Text style ={styles.text}> Humidity: {this.state.humidity} </Text>
				<Text style ={styles.text}> Description: {this.state.description} </Text>
			</View>
			);

	}
}
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 15,
    margin:20,
    textAlign: 'center'
  },
  text1: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 15,
    marginTop:80,
    textAlign: 'center'
  },
  container: {
    flex: 1
  },
  flowRight: {
  flexDirection: 'row',
  
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  marginRight: 5,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
image: {
	marginLeft : 60
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  marginLeft:5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
}
});
module.exports = SearchResults;