import styled from "styled-components";
import  Constants  from "expo-constants";
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput } from "react-native";

const StatusBarHeight  = Constants.statusBarHeight;
const {width, height} = Dimensions.get('screen')

export const Colors = {
  GRAD1: "linear-gradient(101.63deg, #BD0000 -26.55%, #FEB52E 100%)",
  DEEP: "#BD0000",
  LIGHT: "#FEDD82",
  BUTTON: "#F6B300",
  DARK: "#1A1A19",
  NORMAL: "#717171",
  WHITE: "#FFFFFF",
  GREY:"#E5E5E5"
};



const { GRAD1, DEEP, LIGHT, WHITE, DARK, NORMAL, GREY } = Colors;

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

export const SignInButton = styled.View`
background-color: ${LIGHT};
border-radius: 10;
color: ${DEEP};
padding: 8;
`



export const FormInput = styled.TextInput`
background-color: ${WHITE};
width: 100%;
border-radius: 5px;
padding: 10px;
color: ${DEEP};
font-size: 16px;
marginTop: 10px
`

export const FormInput2 = styled.TextInput`
width: 100%;
border-radius: 5px;
padding: 10px;
color: ${DARK};
font-size: 16px;
`

export const FormInputHalf = styled.TextInput`
background-color: ${WHITE};
width: 100%;
border-radius: 5px;
padding: 10px;
color: ${DEEP};
font-size: 16px;
marginTop: 10px
`

export const FormText  =styled.Text`
font-size: 16;
font-weight: 400;
color: ${NORMAL};
`

export const SearchFormInput =  styled.TextInput`
background-color: ${WHITE};
width: 100%;
border-radius: 20px;
padding: 10px;
color: ${DEEP};
font-size: 16px;
`



