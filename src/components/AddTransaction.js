import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { balanceUpdate } from '../actions';
// import { Spinner, Button } from './common';

class AddTransaction extends Component {
  render() {
    return (
      <View style={styles.defaultView}>
        <Text>Add Transaction</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  if (state.balance) {
    return { ...state.balance };
  }
};

export default connect(mapStateToProps, {
  balanceUpdate
})(AddTransaction);
