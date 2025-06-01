import { View, StyleSheet, Dimensions, TouchableOpacity,Text,Image} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/AsyncStorage";


const{width}= Dimensions.get('window');

export default function OnBoardingScreen() {
 const navigation= useNavigation();
const handleDone =()=>{
  navigation.navigate('Home');
  setItem('onboarded','1');
}
const doneButton =({...props})=>{
    return(
        <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
        </TouchableOpacity>
    )
}
  return (
    <View style={styles.create}>
      <Onboarding onDone={handleDone}
      onSkip={handleDone}
      DoneButtonComponent={doneButton}
      bottomBarHighlight={false}
      containerStyles={{paddingHorizontal:15}}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                 <Image
                  source={require("../assets/gifs/savemind.gif")}
                  style={styles.gif}
                />
             
              </View>
            ),
            title: "Save Mindfully",
            subtitle:
              " Cut out small daily expenses and turn them  into big wins",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                 <Lottie source={require('../assets/animations/Secure.json')} autoPlay loop />
             
              </View>
            ),
            title: "Track Progress Easily",
            subtitle: " Visual dashboards and milestones for  each goal",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottie}>
                 <Lottie source={require('../assets/animations/trackProgress.json')} autoPlay loop />
             
              </View>
            ),
            title: "Bank  Level Security",
            subtitle: "Your savings are secure,encrypted, and protected",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  create: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie:{
    width:width*0.9,
    height:width,
  },
  doneButton:{
padding:20,
backgroundColor:"white",
borderBottomLeftRadius:'100%',
borderTopLeftRadius:'100%',

  }
});
