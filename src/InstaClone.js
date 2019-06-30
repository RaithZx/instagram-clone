import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component{

    render(){
        return(
            <View style={{ flex:1, width: 100+'%', height: 100 + "%" }}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                    

                <Image
                  style={{width: 100+'%', height: 100}}
                  source={{uri: 'https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg'}}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    tempNav:{
        width: 100 + '%',
        height:75,
        backgroundColor:'rgb(250,250,250)',
        borderBottomColor:'rgb(233,33,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default InstaClone;