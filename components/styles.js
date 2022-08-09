import styled from "styled-components";
import  Constants  from "expo-constants";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const StatusBarHeight  = Constants.statusBarHeight;
const {width, height} = Dimensions.get('screen')

export const Colors = {
  GRAD1: "linear-gradient(101.63deg, #BD0000 -26.55%, #FEB52E 100%)",
  DEEP: "#BD0000",
  LIGHT: "#FEDD82",
};



const { GRAD1, DEEP, LIGHT } = Colors;

export const StyledContainer = styled.View`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: ${StatusBarHeight + 10}px;
`;

export const HeadText = styled.Text`
color: ${DEEP};
font-size: 25px;
`;

export const DeepText = styled.Text`
color: ${DEEP};
`



export const TransparentButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  border: 1px solid ${DEEP};
  border-radius: 20px;
`;

export const AreaView = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;

${(props)=> props.placement == true && `
 align-items: flex-end;
 justify-content: flex-end;
`}

${(props)=> props.average == true && `
width: 60%;
margin:auto;
`}

`;


export const StyledImage = styled.Image`
 width: 450;
 height: 450px;
`;

export const CenterText = styled.Text`
text-align:center;
`;

export const SvgImage = styled.Image`

`;


