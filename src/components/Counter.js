import { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  increment() {
    this.setState({ count: this.state.count + 100000000000000000 });
  }
  diminuiment() {
    this.setState({ count: this.state.count - 30000000000 });
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text>
          Contador: {this.state.count}
          <Button onPress={() => this.increment()} title="adicinar numero pra kct" />
          <Button onPress={() => this.diminuiment()} title="perde numeros buaaaaa(ian gay)" />
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
