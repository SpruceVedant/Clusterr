import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation, route }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get the user email from the navigation route parameters
    const { userEmail } = route.params || {};
    setUserEmail(userEmail || '');
  }, [route.params]);

  const logout = () => {
    AsyncStorage.setItem('userData', JSON.stringify({ loggedIn: false }));
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome, {userEmail}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
