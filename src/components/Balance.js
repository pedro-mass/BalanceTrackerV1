import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { balanceFetch, balanceUpdate } from '../actions';
import { Spinner } from './common';

class Balance extends Component {
  componentWillMount() {
    this.props.balanceFetch();
  }

  updateBalance(amount) {
    let { balance } = this.props;
    // default to 0 of null balance
    balance = balance || 0;

    this.props.balanceUpdate({ balance: balance + amount });
  }

  displayBalance() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
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
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.balanceDisplay}>
          {this.displayBalance()}
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
  if (state.balance) {
    return { ...state.balance };
  }
};

export default connect(mapStateToProps, {
  balanceFetch, balanceUpdate
})(Balance);
