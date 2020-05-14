

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import LoginForm from "./LoginForm";
import MyButton from "../components/MyButton";


export default class Login extends Component{
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.headBackground}/>
                <KeyboardAvoidingView behavior ={"position"}>
                    <View>
                        <Text style = {styles.logo}>UDAC</Text>
                        <Text style = {styles.logoDescription}>Property & Tax Server</Text>
                    </View>
                    <ScrollView>
                        <View style = {styles.logoArea}>
                            <Text style = {styles.loginAreaTitle}>Property & Tax Server</Text>
                            <Text style = {styles.loginAreaDescription}>
                                Unique Door No Easily Fill Your Entire Property Tax Using App
                            </Text>
                            <LoginForm></LoginForm>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#F5FCFF",
        paddingVertical : 60
    },
    headBackground: {
        position : 'absolute',
        top : 0,
        left : 0,
        height : 250,
        width : '100%',
        backgroundColor: '#1572de'
    },
    logo : {
        textAlign : 'center',
        fontSize : 40,
        fontWeight : 'bold',
        color : '#f2f2f2'
    },
    logoDescription : {
        textAlign: 'center',
        fontSize: 20,
        color: "#f2f2f2"
    },
    logoArea : {
        marginHorizontal : 40,
        marginVertical : 40,
        backgroundColor : "#ffffff",
        padding : 20,
        borderRadius : 5,
        shadowColor : 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    loginAreaTitle : {
        fontSize : 20,
        textAlign : 'center',
    },
    loginAreaDescription : {
        fontSize : 11,
        color : "#7e868f",
        marginVertical: 10,
        textAlign : 'center'
    }
});
