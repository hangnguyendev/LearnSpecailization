/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, Image, TextInput} from 'react-native';
 
let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};

export default class App extends Component {

  render() {
    return (
      <View  style={{width: 565, height: 800,backgroundColor: 'steelblue'}}>
        <Image source={pic} style={{marginTop:150, width: 193, height: 110, marginLeft:110}}/> 
        <View>
          <TextInput style={{height: 40,marginTop:15,marginLeft:15,width:380, backgroundColor: 'white'}}
              placeholder="Điện thoại hoặc email"/>
          <TextInput style={{marginTop:15,marginLeft:15,width:380,height: 40,backgroundColor: 'white'}}
              placeholder="Mật khẩu "/>
        </View>
        <View style={{alignContent:"center"}}>
          <Text style={{color: "white"}}>Quên mật khẩu ?</Text>
          <Text style={{color: "white"}}>Login với tài khoản mới</Text>
        </View>


      </View>
    );
  }
}

