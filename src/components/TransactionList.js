import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
import TransactionListItem from './TransactionListItem';

class TransactionList extends Component {
  constructor(props) {
    super(props);

    this.createDataSource(this.props);
  }

  // this needs to run every time the props change, so our list grows
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ transactions }) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.dataSource = ds.cloneWithRows(transactions);
  }

  addTransaction() {
    Actions.addTransaction();
  }

  renderRow(transaction) {
    return <TransactionListItem transaction={transaction} />;
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
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
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
    const transactions = _.map(state.balance.transactions, (val, uid) => {
      return { ...val, uid };
    });

    return { transactions };
  }
};

export default connect(mapStateToProps, {})(TransactionList);
