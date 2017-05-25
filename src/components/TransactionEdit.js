import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import { balanceUpdate, addTransaction } from '../actions';
import { Button, Input } from './common';

class TransactionEdit extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props.transaction };

    console.log('props: ', this.props);
    console.log('state: ', this.state);
  }

  getDateTimeString(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const hour = date.getHours();
    const mins = date.getMinutes();

    return `${month}/${day}/${year} ${hour}:${mins}`;
  }

  displayActions() {
    return (
      <View style={styles.supportView}>
        <Button onPress={this.addTransaction.bind(this)}>Save</Button>
        <Button onPress={this.cancel.bind(this)}>Cancel</Button>
      </View>
    );
  }

  addTransaction() {
    // const { dateEntered, amount, note } = this.state;
    // this.props.addTransaction({ dateEntered, amount, note });

    console.log('transaction saved');
  }

  cancel() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.defaultView}>
        <View style={styles.mainView}>
          <View style={styles.formSection}>
            <Input
              label="Entered"
              placeholder="5/11/17 9:00 PM"
              value={this.state.dateEntered}
              onChangeText={dateEntered => this.setState({ dateEntered })}
            />
          </View>

          <View style={styles.formSection}>
            <Input
              label="Amount"
              placeholder="10"
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })}
            />
          </View>

          <View style={[styles.formSection, styles.noteSection]}>
            <Text style={styles.noteStyleLabel}>Note</Text>
            <TextInput
              style={styles.noteStyle}
              multiline
              numberOfLines={4}
              placeholder="note"
              placeholderTextColor="grey"
              value={this.state.note}
              onChangeText={note => this.setState({ note })}
            />
          </View>
        </View>

        {this.displayActions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultView: {
    flex: 1
  },
  formSection: {
    flexDirection: 'row',
  },
  mainView: {
    flex: 2,
  },
  supportView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  noteSection: {
    marginTop: 5
  },
  noteStyle: {
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    marginRight: 5
  },
  noteStyleLabel: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  }
});

const mapStateToProps = (state) => {
  if (state.balance) {
    return { ...state.balance };
  }
};

export default connect(mapStateToProps, {})(TransactionEdit);
