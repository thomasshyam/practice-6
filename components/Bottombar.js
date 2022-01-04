import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Bottombar extends Component {

    render() {
        return (
            <View style={styles.Bottombar}>
                <TouchableOpacity style={styles.container}>
                    <Icon name="home" size={25} />
                    <Text style={styles.mytext}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon name="whatshot" size={25} />
                    <Text style={styles.mytext}>whatshot</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon name="subscriptions" size={25} />
                    <Text style={styles.mytext}>Subscriptions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon name="add-alert" size={25} />
                    <Text style={styles.mytext}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon name="folder" size={25} />
                    <Text style={styles.mytext}>Account</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    Bottombar: {
        backgroundColor:'#fff',
        height:60,
        borderTopWidth:2,
        borderColor:'#e5e5e5',
        flexDirection:'row',
        justifyContent:'space-around',
        
    
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        
    },
    mytext:{
        fontSize:14,
        textAlign:'center',
        paddingTop:2,
        color:'rgb(50,50,50)',
    },
});