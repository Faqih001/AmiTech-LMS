import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { windowHeight, windowWidth } from "../themes/app.constant";
import { useTheme } from "@/context/theme.context";
import { scale } from "react-native-size-matters";

// Skeleton Loader component
export default function SkeltonLoader() {

  // Theme Context to get the current theme
  let { theme } = useTheme();

  // Get the current color scheme of the device
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
      style={[styles.container, styles.padded]}
      animate={{ backgroundColor: theme.dark ? 'transparent' : "#fff" }}
    >
      {/* <Spacer /> */}
      <Skeleton
        width={windowWidth(440)}
        height={windowHeight(160)}
        colorMode={theme.dark ? "dark" : "light"}
      />
      <Spacer />
      <View style={{ flexDirection: "row", gap: windowWidth(15) }}>
        <Skeleton
          colorMode={theme.dark ? "dark" : "light"}
          radius="round"
          height={windowWidth(80)}
          width={windowWidth(80)}
        />
        <View>
          <Skeleton
            width={windowWidth(338)}
            height={windowHeight(20)}
            colorMode={theme.dark ? "dark" : "light"}
          />
          <Spacer />
          <Skeleton
            width={windowWidth(338)}
            height={windowHeight(20)}
            colorMode={theme.dark ? "dark" : "light"}
          />
          <Spacer />
        </View>
      </View>
    </MotiView>
  );
}

// Spacer component to add space between the components
export const Spacer = ({ height = 16 }) => <View style={{ height }} />;

// Styles for the Skeleton Loader
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  padded: {
    padding: scale(14),
  },
});
