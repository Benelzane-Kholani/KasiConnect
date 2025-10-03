import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// The logo import is no longer needed
// const logo = require("../assets/images/logo.jpg"); 

export default function Header() {
  return (
    <View>
      {/* Main Header */}
      <View style={styles.headerContainer}>
        {/* Left Side: Logo and tagline */}
        <View style={styles.leftSide}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              <Text style={styles.logoTextBold}>Kasi</Text>Connect
            </Text>
            <Image
              source={require("../assets/images/circles.png")}
              style={styles.logoImage}
            />
          </View>
          <Text style={styles.tagline}>
            <Text style={styles.taglineWord}>Convenience</Text>
            <Text style={styles.taglinePipe}> | </Text>
            <Text style={styles.taglineWord}>Resilience</Text>
            <Text style={styles.taglinePipe}> | </Text>
            <Text style={styles.taglineWord}>Local</Text>
          </Text>
        </View>

        {/* Right Side: Auth and Profile */}
        <View style={styles.rightSide}>
          <View style={styles.authLinks}>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.authText}>Log In</Text>
              </TouchableOpacity>
            </Link>
            {/* You can add a Sign Up link here if you want */}
            {/* <Link href="/signup" asChild><TouchableOpacity><Text style={styles.authText}>Sign Up</Text></TouchableOpacity></Link> */}
          </View>
        </View>
      </View>

      {/* Bottom Banner */}
      <View style={styles.bottomBanner}>
        <Link href="/" style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </Link>
        <Link href="/about" style={styles.navButton}>
          <Text style={styles.navButtonText}>About</Text>
        </Link>
        <Link href="/help" style={styles.navButton}>
          <Text style={styles.navButtonText}>Help</Text>
        </Link>
        <Link href="/settings" style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#fff", // White
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftSide: {
    flex: 1,
    justifyContent: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoImage: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },

  logoText: {
    color: "#3d00f5ff",
    fontSize: 22, // Increased font size for the logo
  },
  logoTextBold: {
    color: "#3d00f5ff",
  },

  tagline: {
    fontSize: 10,
    marginTop: 10,
  },

  taglineWord: {
    color: "#3d00f5ff", // Blue
    fontWeight: "bold",
  },

  taglinePipe: {
    color: "#F57C00", // Orange
    fontWeight: "bold",
  },

  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  authLinks: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },

  authText: {
    color: "#3d00f5ff", // Blue
    fontSize: 12,
    fontWeight: "bold",
  },

  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#BDC3C7", // A simple grey circle for the icon
  },

  bottomBanner: {
    backgroundColor: "#f58700ff", // Orange
    paddingVertical: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  navButton: {
    marginHorizontal: 10, // Adjust spacing between buttons
  },
  navButtonText: {
    color: "#ffffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});