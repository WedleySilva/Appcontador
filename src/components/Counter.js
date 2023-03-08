import { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };
  increment() {
    this.setState({ count: this.state.count + this.state.step });
  }
  diminuiment() {
    this.setState({ count: this.state.count - this.state.step });
  }
  alterarStep(texto) {
    this.setState({step: parseInt(texto) || 0});
  }
  render() {
    return (
      <View style={styles.contador}>
        <TextInput
        v alue={this.state.step.toString()}
        onChange={(e) => this.alterarStep(e.nativeEvent.text)}
        keyboardType="numeric"
        />
        <Text>
          Contador: {this.state.count}
          <Button onPress={() => this.increment()} title="+" />
          <Button onPress={() => this.diminuiment()} title="-" />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    marginButton: 10,
    alignItems: "center",
  },

});
