import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Balance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 40,
    };
  }

  updateBalance(amount) {
    this.setState(prevState => ({
      balance: prevState.balance + amount
    }));
  }

  clearBalance() {
    this.setState({
      balance: 0
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.balanceDisplay}>

          <TouchableOpacity onPress={() => this.updateBalance(1)}>
            <Text style={styles.touchText}>
              +
            </Text>
          </TouchableOpacity>

          <Text style={styles.balance}>
            {this.state.balance}
          </Text>

          <TouchableOpacity onPress={() => this.updateBalance(-1)}>
            <Text style={styles.touchText}>
              -
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.moreOptions}>
          <Text>
            Transactions  |
          </Text>

          <TouchableOpacity onPress={this.clearBalance.bind(this)}>
            <Text style={styles.touchText | styles.clearBalance}>
              Clear Balance
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  balanceDisplay: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    fontSize: 40,
  },
  touchText: {
    padding: 10,
  },
  clearBalance: {
    padding: 5
  }
});

export default Balance;
