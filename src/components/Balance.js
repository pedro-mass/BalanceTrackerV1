import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { balanceUpdate } from '../actions';

class Balance extends Component {
  updateBalance(amount) {
    this.props.balanceUpdate({ amount });
  }

  clearBalance() {

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
            {this.props.balance}
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

const mapStateToProps = (state) => {
  const { balance } = state.balance;

  return { balance };
};

export default connect(mapStateToProps, {
  balanceUpdate
})(Balance);
