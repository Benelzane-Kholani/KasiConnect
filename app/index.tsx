import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from "react-native";
import Header from "./header"; // Import Header from the same folder

// Placeholder data for top-rated users
const topRatedUsers = [
  { id: 0, name: "Sipho Dlamini", specialty: "Mechanic" },
  { id: 1, name: "Thandi Mokoena", specialty: "Electrician" },
  { id: 2, name: "Lungi Ndlovu", specialty: "Plumber" },
  { id: 3, name: "Kabelo Maseko", specialty: "Carpenter" },
  { id: 4, name: "Zandile Zulu", specialty: "Painter" },
  { id: 5, name: "Mpho Khumalo", specialty: "Gardener" },
  { id: 6, name: "Nandi Sibiya", specialty: "Welder" },
  { id: 7, name: "Bongani Cele", specialty: "Builder" },
  { id: 8, name: "Ayanda Gumede", specialty: "Hairdresser" },
  { id: 9, name: "Sizwe Nxumalo", specialty: "Chef" },
  { id: 10, name: "Palesa Mohlala", specialty: "Seamstress" },
  { id: 11, name: "Jabu Mahlangu", specialty: "Tutor" },
  { id: 12, name: "Nomsa Dube", specialty: "Nurse" },
  { id: 13, name: "Themba Mthethwa", specialty: "Driver" },
];

// Data for categories with images
const categories = [
  {
    name: "Food and Catering",
    image: require("../assets/images/Food.jpg"), // NOTE: Replace with your actual image for this category
  },
  {
    name: "Hair and Beauty",
    image: require("../assets/images/hair.jpg"), // NOTE: Replace with your actual image for this category
  },
  {
    name: "Domestic Help",
    image: require("../assets/images/domestic.jpg"), // NOTE: Replace with your actual image for this category
  },
  {
    name: "Tutor",
    image: require("../assets/images/tutor.jpg"), // NOTE: Replace with your actual image for this category
  },
  {
    name: "Events",
    image: require("../assets/images/events.jpg"), // NOTE: Replace with your actual image for this category
  },
  {
    name: "Maintenance",
    image: require("../assets/images/maintenance.jpg"), // NOTE: Replace with your actual image for this category
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Custom Header at the top */}
      <Header />

      {/* Top Section  */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/download1.jpg")}
          style={styles.welcomeImage}
          resizeMode="cover"
        />
      </View>

      {/* Top Rated Users Section 
      <View style={styles.ratedUsersSection}>
        <Text style={styles.sectionTitle}>Top Rated</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {topRatedUsers.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userSpecialty}>{user.specialty}</Text>
            
              <View style={styles.userImage} />
            </View>
          ))}
        </ScrollView>
      </View>*/}

      <View style={styles.bottomSection}>
        {/* Additional content can go here */}
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services..." />
        </View>

        {/* Explore Categories Heading */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.exploreCategoriesTitle}>Explore Categories</Text>
          <ScrollView contentContainerStyle={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={{
                  pathname: "/category_screen",
                  params: { category: category.name },
                }} asChild>
                <TouchableOpacity style={styles.button}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.buttonText}>{category.name}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topSection: { // This section now contains the welcome image and the search button
    flex: 1,
    backgroundColor: "#ECF0F1",
    justifyContent: "center",
    alignItems: "center",
  },

  ratedUsersSection: {
    flex: 0.8,
    backgroundColor: "#ECF0F1", // Changed to light grey
    paddingTop: 2,
    paddingBottom: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000ff",
    marginLeft: 16,
    marginBottom: 10,
  },

  userCard: {
    width: 60, // Increased width to properly contain the image and text
    alignItems: "center",
    marginHorizontal: 20, // Increased margin to add more space between users
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#BDC3C7",
  },

  userName: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#000000ff",
  },

  userSpecialty: {
    fontSize: 10,
    color: "#000000ff",
    marginBottom: 5,
  },

  bottomSection: {
    flex: 1.8,
    backgroundColor: "#d3d3d3",
    paddingTop: 20,
  },
  categoriesContainer: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 5,
  },

  welcomeImage: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: 95,
    height: 95,
    borderRadius: 12, // This creates a square with rounded corners
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#1A5276", // Changed to dark blue for contrast
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 5,
  },
  searchBarContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  exploreCategoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A5276', // Changed to dark blue for contrast
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchInput: {
    width: '90%',
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
});