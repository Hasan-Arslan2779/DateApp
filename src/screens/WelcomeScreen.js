import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGrotestSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGrotestBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGrotestMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      className="flex-1"
      style={{
        width: wp(100),
      }}
      onLayout={onLayoutRootView}
    >
      <View
        className="justify-center items-center"
        style={{
          width: wp(100),
          height: hp(100),
        }}
      >
        {/* Heart Icon Image */}
        <View
          className="justify-center items-center my-4"
          style={{
            width: wp(100),
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: wp(100),
              height: hp(40),
              resizeMode: "contain",
              marginRight: 20,
            }}
          />
        </View>
        {/* Welcome Text */}
        <View className="w-full p-6 px-10">
          <Text
            className="tracking-widest leading-none"
            style={{
              fontSize: wp(10),
              fontFamily: "SpaceGrotestBold",
            }}
          >
            Embrace
          </Text>
          <Text
            className="tracking-widest w-[70% leading-none]"
            style={{ fontSize: wp(10), fontFamily: "SpaceGrotestBold" }}
          >
            A New Way of Dating
          </Text>
          <Text
            style={{ fontSize: wp(4), fontFamily: "SpaceGrotestMedium" }}
            className="text-gray-500 leading-6 tracking-wider  w-[60%] mt-2"
          >
            We combine cutting edge technologies with a modern approach to
            matchmaking.
          </Text>
        </View>

        <View className="w-full px-10">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeTabs")}
            className="bg-[#3e22f2] py-4 rounded-xl flex-row justify-center items-center "
          >
            <Text
              className="text-white font-bold mr-2"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGrotestMedium",
              }}
            >
              Get Started
            </Text>
            <ArrowUpRightIcon color="white" size={20} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
