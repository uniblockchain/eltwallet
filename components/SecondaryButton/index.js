import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 20,
  },
  text: {
    backgroundColor: 'transparent',
    color: '#4D00FF',
    fontSize: 18,
  },
});

export default class SecondaryButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    return (
      <TouchableHighlight
        activeOpacity={0.8}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
        style={{
          opacity: this.props.disabled ? 0.5 : 1,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
