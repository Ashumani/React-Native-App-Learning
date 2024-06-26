import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

import { useOAuth } from '@clerk/clerk-expo'
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser'

WebBrowser.maybeCompleteAuthSession()

export default function Login() {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'})
    const onPress = React.useCallback(async () => {
        try {
            const {createdSessionId, signIn, signUp, setActive}= await startOAuthFlow();

            if(createdSessionId) {
                setActive({session:createdSessionId})
            }else{
                //later use
            }
        } catch (error) {
            console.error("Auth Error", error);
        }
    },[]);
  return (
    <View style={{alignItems:'center'}}>
      <Text>Login Screen</Text>
      <Image source={require('../../../assets/images/login.png')} 
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'center'}}>
            Let's Find <Text style={{fontWeight:'bold'}}>professional Cleaning and repair</Text> services
        </Text>
        <Text style={{fontSize:17,color:Colors.WHITE, textAlign:'center', marginTop:20}}>
            Best App to find th srvics nar you to delivr services
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign:'center', fontSize:17, color:Colors.PRIMARY}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
       
    },
    subContainer: {
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'70%',
        marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:90,
        borderWidth:2,
        borderColor:Colors.BLACK,
        marginTop:20,
       
    }
})