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
  ActivityIndicator
} from 'react-native';
var ReactNative = require('react-native');
var SearchResults = require('./SearchResults');
function queryGenerator(searchString){

	var queryString = searchString + '&appid=5612d77e941e951d16765907e819f232';

	return 'http://api.openweathermap.org/data/2.5/weather?q=' + queryString
}

class searchPage extends Component{
	constructor(props) {
  		super(props);
  		this.state = {
    		isLoading: false,
    		message:'',
    		searchString:'',
    		temperature:'',
    		isResponse:false,
        description:'', 
        name:''
 		};
	}
	onSearchTextChange(event){
		this.setState( {searchString:event.nativeEvent.text});
	}
	_executeQuery(query){
		fetch(query)
		.then(response => response.json())
		.then(json => this._handleResponse(json))
		.catch(error =>
		 this.setState({
		  isLoading: false,
		  message: 'Something bad happened ' + error
		}));
	}
	onSearchPressed(event){
		var query = queryGenerator(this.state.searchString);

		this.setState({isLoading:true});
		this._executeQuery(query);
	}
	_handleResponse(response) {
		this.setState({ isLoading: false , message: '', temperature: response.main, description: response.weather[0], name: response.name });
    console.log(this.state.description);
    this.props.navigator.push({
      title: this.state.name,
      component: SearchResults,
      passProps: {temperature: this.state.temperature, description: this.state.description}
    });
	}


	render(){	
		var spinner = this.state.isLoading ?
			( <ActivityIndicator
			  size='large'/> ) :
			( <View/>);

		return (
			<View style={styles.container}>
				<Text style ={styles.text}>Search by city name </Text>
				<View style= {styles.flowRight}>
					<TextInput style = {styles.searchInput}
					onChange = {this.onSearchTextChange.bind(this)}
					value = {this.state.searchString}
					placeholder = "Enter the name"/> 
					<TouchableHighlight style = {styles.button}>
						<Text style = {styles.buttonText}
						onPress = {this.onSearchPressed.bind(this)}
						> Search </Text>
					</TouchableHighlight>
				</View>
				{spinner}
				
				
			</View>
			
			);
	}
}
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
    margin:80,
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
module.exports = searchPage;