import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';


class TransactionListItem extends Component {

  onRowPress() {
    Actions.transactionEdit({
      transaction: this.props.transaction
    });
  }

  render() {
    const { transaction } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.listItem}>
          <Text style={styles.listItemData}>{transaction.dateEntered}</Text>
          <Text style={styles.listItemData}>{transaction.amount}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,

    borderBottomWidth: 1,
    borderColor: '#ddd',
    // position: 'relative'
  },
  listItemData: {
    flex: 1,
    textAlign: 'center'
  }
});

export default TransactionListItem;
