import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import TextInputComponent from "@/Component/TextInputComponent";
import Button from "@/Component/Button";
import { useNavigation } from "expo-router";

const weeksDay = (startDay = 0) => {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return [...weeks.slice(startDay), ...weeks.slice(0, startDay)];
};

const AppointmentDetails = () => {
  const [patientName, setPatientName] = useState("");
  const [action, setAction] = useState("");
  const [email, setEmail] = useState("");
 
  const navigation = useNavigation()

  const weeks = weeksDay(0);
  const currentDayIndex = new Date().getDay();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Schedule Appointment</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>APPOINTMENT FOR</Text>
          <Text style={styles.subLabel}>Patient Name</Text>
          <TextInputComponent
            placeholder="..............."
            value={patientName}
            onChangeText={setPatientName}
            style={styles.textInput}
          />

          <Text style={styles.subLabel}>Action</Text>
          <TextInputComponent
            placeholder="........................"
            value={action}
            onChangeText={setAction}
            style={styles.textInput}
          />

          <Text style={styles.subLabel}>Email</Text>
          <TextInputComponent
            placeholder=".............."
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>

        <View>
          <Text style={styles.timeTitle}>Select Day</Text>
        </View>

        <View style={styles.weekRow}>
          {weeks.map((day, index) => (
            <View key={index}>
              <View style={styles.timeCard}>
                <Text
                  style={[
                    styles.dayText,
                    index === currentDayIndex && styles.currentDay,
                  ]}
                >
                  {day}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.timeTitle}>Time Slot Monday</Text>
          <View style={styles.flexCard}>
            <Button title="8:00 pm - 9:00pm" onpress={() => {}} buttonStyle={styles.button}/>

            <Button title="8:00 pm - 9:00pm" onpress={() => {}} buttonStyle={styles.button2}/>
          </View>
        </View>

        <View>
            <Button
              title="Confrim"
              onpress={() => navigation.navigate('ConfirmationScreen')}
              buttonStyle={styles.confromButton}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 30,
  },
  mainContainer: {
    padding: 10,
  },
  inputSection: {
    marginTop: 20,
    fontWeight: "300",
  },
  label: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 10,
  },
  subLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "300",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 3,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  timeCard: {
    padding: 5,
    backgroundColor: "red",
    width: 40,
    height: 75,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: 14,
    color: "black",
  },
  currentDay: {
    color: "blue",
    fontWeight: "bold",
  },
  timeTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "300",
    marginTop: 20,
  },
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent :'center'
  },
  flexCard:{
    flexDirection :'row',
    gap :10
  },
  button2:{
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent :'center'
  },
  confromButton:{
    width :295,
    height :48,
    backgroundColor :'blue',
    marginTop :20,
    marginLeft :20
  }
});
