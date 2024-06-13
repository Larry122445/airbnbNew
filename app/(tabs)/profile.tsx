// screens/UserProfile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const UserProfile = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <Text style={styles.title}>User Profile</Text>
        {/* Add more profile details here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default UserProfile;
