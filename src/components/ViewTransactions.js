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

  renderRow(transaction) {
    return (
      <View>
        <Text>{transaction.dateEntered}</Text>
        <Text>{transaction.amount}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.defaultView}>
        <View style={styles.mainView}>
          {/* List Header */}
          <View style={styles.listHeaderSection}>
            <Text style={styles.listHeader}>Entered</Text>
            <Text style={styles.listHeader}>Amount</Text>
          </View>

          {/* List Items */}
          <View style={styles.listSection}>
            <Text>Item</Text>
          </View>
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
  },
  listHeaderSection: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
  listHeader: {
    flex: 1,
    textAlign: 'center'
  },
  listSection: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
