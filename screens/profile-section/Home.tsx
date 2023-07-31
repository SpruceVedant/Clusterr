import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../config/theme';

const Home = () =>{
    return (
        <View style={styles.mainContainer}>
            <View style={styles.home}>
                <Text style={styles.textC}>This is some basic text</Text>
            </View>
            <View style={styles.card}>
                
                <Text style={styles.textC}>Mobile Number</Text>
                
            </View>
            <View style={styles.card}>
                
                <TouchableOpacity>
                <Text style={styles.textC}>Mobile Number</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        
    },
    home:{
        backgroundColor:colors.dark.bg, 
        height:250, 
        alignItems:"center", paddingTop:125,
        paddingBottom:10
    },
    textC:{
        color:colors.dark.primary
    }, 
    card:{
        height:50,
        backgroundColor:'red',
        paddingTop:10,
        paddingLeft:150, 
        paddingRight:50,
        borderRadius:8 
    }
})

export default Home;