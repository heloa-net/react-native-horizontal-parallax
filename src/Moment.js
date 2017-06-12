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
    const animatedStyle = {
      transform: [
        { translateX: this.props.translateX }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.Image 
          source={this.props.image}
          style={[styles.image, animatedStyle]}
          resizeMode="cover"
        />
        <View style={[StyleSheet.absoluteFill, styles.center]}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
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
  },
  center: {
    justifyContent: "center"
  },
  textWrap: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 10
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center"
  }
})

export default Moment;
