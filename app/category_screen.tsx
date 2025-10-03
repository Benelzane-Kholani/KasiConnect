import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CategoryScreen() {
  return (
    <View style={styles.topSection}>
      <Text style={styles.text}>Hair and Beauty</Text>
      <Link href={"/category_screen"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore More</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 2,
    backgroundColor: "#ECF0F1",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  button: {
      width: 150,
      height: 150,
      borderRadius: 12, // This creates a square with rounded corners
      backgroundColor: "#F57C00", // Orange color
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});