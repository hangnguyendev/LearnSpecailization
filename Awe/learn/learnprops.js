
import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';



export class LearnProps extends Component {
    render() {
      return (
        <View >
          <Text >I love {this.props.name}</Text>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
      );
    }
  }
  
let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};


// File app 
/*



import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import {LearnProps} from './learn/learnprops';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text >Welcome to React Native!</Text>
        <LearnProps name="Hằng"></LearnProps>

      </View>
    );
  }
}

*/ 