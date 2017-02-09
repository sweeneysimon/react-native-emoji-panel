/**
 * @file: Demo for react-native-emoji-panel
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';
import EmojiPanel from 'react-native-emoji-panel';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      inputText: ''
    }
  }

  render() {
    const { inputText } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={text => this.setState({ inputText: text })}
        />
        <EmojiPanel onPick={this.handlePick} />
      </View>
    );
  }

  handlePick(emoji) {
    const { inputText } = this.state;

    this.setState({ inputText: inputText + emoji });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: 'white'
  },
});

AppRegistry.registerComponent('Example', () => Example);
