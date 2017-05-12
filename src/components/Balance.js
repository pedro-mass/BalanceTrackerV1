import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { balanceFetch } from '../actions';
import { Spinner, Button } from './common';

class Balance extends Component {
  componentWillMount() {
    this.props.balanceFetch();
  }

  displayLoading() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
  }

  addTransaction() {
    Actions.addTransaction();
  }

  viewTransactions() {
    Actions.viewTransactions();
  }

  displayBalance() {
    if (!this.props.loading) {
      return (
        <View style={[styles.defaultView]}>
          <View style={styles.balanceDisplay}>
            <Text style={styles.balance}>
              {this.props.balance}
            </Text>
          </View>

          {this.displayActions()}
        </View>
      );
    }
  }

  displayActions() {
    return (
      <View style={[styles.actionDisplay]}>
        <Button onPress={this.addTransaction.bind(this)}>Add</Button>
        <Button onPress={this.viewTransactions.bind(this)}>View All</Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.defaultView}>
          {this.displayLoading()}

          {this.displayBalance()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1
  },
  layoutDebug: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red'
  },
  balanceDisplay: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
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
  balanceFetch
})(Balance);
