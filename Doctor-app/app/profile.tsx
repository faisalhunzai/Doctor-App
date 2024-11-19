import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "@/Component/Button";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
      </View>
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Dr. Harshal</Text>
        <Text style={styles.profileSubText}>Orthopedic</Text>
        <Text style={styles.profileSubText}>Gilgit Pakistan</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Text style={[styles.tabText, styles.activeTab]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabText}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.overviewSection}>
        <View style={styles.overviewItem}>
          <AntDesign name="layout" size={24} color="blue" />
          <View>
            <Text style={styles.overviewText}>Experience</Text>
            <Text style={styles.overviewValue}>20 Years</Text>
          </View>
        </View>
        <View style={styles.overviewItem}>
          <Entypo name="star" size={24} color="yellow" />
          <Text style={styles.overviewText}>Rating</Text>
          <Text style={styles.overviewValue}>4.0</Text>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.timingHeader}>Available Timing</Text>
      </View>
      <View style={styles.timingSection}>
        <View style={styles.timingCard}>
          <MaterialIcons name="calendar-today" size={24} color="black" />
          <View>
            <Text style={styles.timingDay}>Today Timing</Text>
            <Text style={styles.timingDate}>03/13/2020</Text>
          </View>
          <Text style={styles.timingTime}>8:00 pm - 9:00 pm</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text>Monday</Text>
            <Text>Tuesday</Text>
            <Text>Friday</Text>
          </View>
          <View>
            <Text>8:00 pm - 9:00 pm</Text>
            <Text>8:00 pm - 9:00 pm</Text>
            <Text>8:00 pm - 9:00 pm</Text>
          </View>
        </View>
      </View>
      <View style={styles.feedbackSection}>
        <View
          style={{
            backgroundColor: "white",
            elevation: 5,
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Text style={styles.feedbackHeader}>Leave a review</Text>
          <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
              <Entypo name="star" size={24} color="yellow" />
            ))}
          </View>
          <Text style={styles.feedbackSubtext}>
            Your feedback can help people decide
          </Text>
        </View>

        <View>
          <TextInput
            placeholder="Write Your Feedback..."
            style={styles.textInput}
          />
        </View>

        <Button
          title="Submit"
          onpress={() => {}}
          buttonStyle={styles.submitButton}
        />
      </View>

      <Button
        title="Schedule Appointment"
        onpress={() => {}}
        buttonStyle={styles.scheduleButton}
      />

      <Button
        title="Request An Appointment"
        onpress={() => {}}
        buttonStyle={styles.appointmentButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 120,
    backgroundColor: "#007bff",
    padding: 10,
    justifyContent: "space-between",
  },
  backIcon: {
    marginRight: 10,
  },
  profileSection: {
    alignItems: "center",
    marginTop: -50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  profileSubText: {
    color: "gray",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabText: {
    paddingVertical: 10,
    fontSize: 16,
    color: "gray",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
    color: "#007bff",
  },
  overviewSection: {
    backgroundColor: "white",
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    margin: 20,
  },
  overviewItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  overviewText: {
    fontSize: 14,
    color: "gray",
  },
  overviewValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timingSection: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  timingHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  timingCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
  },
  timingDay: {
    fontSize: 14,
    fontWeight: "bold",
  },
  timingDate: {
    fontSize: 12,
    color: "gray",
  },
  timingTime: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  feedbackSection: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  feedbackHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 7,
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  feedbackSubtext: {
    color: "gray",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    height: 120,
    marginBottom: 10,
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#007bff",
    padding: 10,
    alignItems: "flex-end",
    borderRadius: 5,
    width: 100,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  appointmentButton: {
    backgroundColor: "#007bff",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  appointmentButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  scheduleButton: {
    backgroundColor: "blue",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  scheduleButtonText: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
