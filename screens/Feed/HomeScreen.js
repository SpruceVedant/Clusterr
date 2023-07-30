import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>This is Home Screen</Text>
        <Button 
        title="Profile"
        onPress={()=>
        navigation.navigate('Profile')}
        />
        </View>
    ) 
}

export default HomeScreen;    