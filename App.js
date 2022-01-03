import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import Timer from './component/Timer'
import TabButtons from './component/AppOptions'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="light-content"
        showHideTransition="slide" />
      <Timer />
      <View style={styles.tabButtons}>
        <TabButtons />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  tabButtons: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});
