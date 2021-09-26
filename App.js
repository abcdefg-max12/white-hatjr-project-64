import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdbfile';


export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      text:''
    }
  }

  render(){
    return(
      <View>
        <View>
          <Header backgroundColor = {''} centerComponent = {{
            text:"Offline Dictionary",
            style:{color:'black', fontSize:20}
          }}/>
        </View>

      <View>
        <TextInput 
        style = {styles.inputBox} 
        onChangeText = {(text) =>{
         this.setState({
           text:text
         })
         }} 
         value = {this.state.text}
      />
      </View>
      </View>
     
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  inputBox: {
    marginTop:40,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
})

