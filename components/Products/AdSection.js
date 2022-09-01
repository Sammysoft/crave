import * as React from "react";
import { View, Image, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen")


const AdSection = ()=>{
    return(
        <>
            <View style={{width}}>
                <Image style={{width, height: height/5}} source={require('./../../assets/images/ads.png')} resizeMode="cover" />
            </View>
        </>
    )
}
export default AdSection;