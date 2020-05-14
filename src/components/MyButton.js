import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
      const {color, backgroundColor} = this.props
    return (
      <TouchableOpacity style = {[styles.button,{backgroundColor: backgroundColor}]}>
          <Text style = {{color: color}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

MyButton.prototypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center'

    }
});
