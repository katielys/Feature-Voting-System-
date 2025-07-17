
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FeatureList from './components/FeatureList';
import FeatureSubmit from './components/FeatureSubmit';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FeatureSubmit />
      <FeatureList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
