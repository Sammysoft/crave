import React from "react";
import { View, Text, Dimensions } from "react-native";

const { height, width }  = Dimensions.get("screen")


const HeadText = ()=>{
    return(
        <>
            <View style={{width, paddingHorizontal:10}}>
                <Text style={{fontFamily: "NunitoMedium", fontSize: 24}}>
                    Welcome, Amaka!
                </Text>
            </View>
            <View style={{width, paddingHorizontal: 10, paddingVertical:10}}>
                <Text style={{fontFamily: "NunitoLight", fontSize: 16}}>
                    What would you like to have today?
                </Text>
            </View>
        </>
    )
}

export default HeadText;