import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { balanceUpdate } from '../actions';
import { Button, Input, CardSection } from './common';

class AddTransaction extends Component {
  render() {
    return (
      <View style={styles.defaultView}>
        <View style={styles.mainView}>
          <View style={styles.formSection}>
            <Input
              label="Entered"
              placeholder="5/11/17 9:00 PM"
            />
          </View>

          <View style={styles.formSection}>
            <Input
              label="Amount"
              placeholder="10"
              keyboardType="number-pad"
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
            />
          </View>
        </View>

        <View style={styles.supportView}>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </View>
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

export default connect(mapStateToProps, {
  balanceUpdate
})(AddTransaction);
