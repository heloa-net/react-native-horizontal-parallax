import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const { height, width } = Dimensions.get("window");

class Moment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image 
          source={this.props.image}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    overflow: "hidden"
  },
  image: {
    flex: 1,
    height: null,
    width: null
  }
})

export default Moment;
