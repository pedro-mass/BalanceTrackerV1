import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { balanceUpdate } from '../actions';
import { Button } from './common';

class ViewTransactions extends Component {
  addTransaction() {
    Actions.addTransaction();
  }

  render() {
    return (
      <View style={styles.defaultView}>
        <View style={styles.mainView}>
          <Text>View Transactions</Text>
        </View>

        <View style={styles.supportView}>
          <Button onPress={this.addTransaction.bind(this)}>Add</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1
  },
  mainView: {
    flex: 2,
  },
  supportView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  if (state.balance) {
    return { ...state.balance };
  }
};

export default connect(mapStateToProps, {
  balanceUpdate
})(ViewTransactions);
