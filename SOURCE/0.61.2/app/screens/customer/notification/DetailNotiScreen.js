import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native";

export class DetailNotiScreen extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> DetailNotiScreen </Text>
        </SafeAreaView>
      </View>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailNotiScreen);
const styles = StyleSheet.create({});
