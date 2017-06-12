import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Moment from './src/Moment';

const { height, width } = Dimensions.get("window");

const Images = [
  { image: require('./src/assets/pichu.jpg'), title: "Pichu n.172" },
  { image: require('./src/assets/pikachu.jpg'), title: "Pikachu n.025" },
  { image: require('./src/assets/raichu.jpg'), title: "Raichu n.026" },
]

export default class horizontalparallax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedScroll: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={
            Animated.event([ 
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.state.animatedScroll
                  }
                }
              }
            ])
          }
        >
        {Images.map((image, i) => {
          return <Moment 
            key={i}
            {...image}
          />
        })}
        
        </ScrollView>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('horizontalparallax', () => horizontalparallax);
