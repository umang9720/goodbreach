import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useRef, useEffect } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { setItem } from "../utils/AsyncStorage";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function OnBoardingScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1");
  };
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.create}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View >
                <LottieView
                  autoPlay
                  ref={animation}
                  style={styles.lottie}
                  source={require("../assets/animations/saveMind.json")}
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
              <View >
                    <LottieView
                  autoPlay
                  ref={animation}
                  style={styles.lottie}
                  source={require("../assets/animations/trackProgress.json")}
                />
              </View>
            ),
            title: "Track Progress Easily",
            subtitle: " Visual dashboards and milestones for  each goal",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View >
                    <LottieView
                  autoPlay
                  ref={animation}
                  style={styles.lottie}
                  source={require("../assets/animations/Secure.json")}
                />
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
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: "100%",
    borderTopLeftRadius: "100%",
  },
});
