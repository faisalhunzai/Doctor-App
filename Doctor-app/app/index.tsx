import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import Header from "@/Component/Header";
import TextInputComponent from "@/Component/TextInputComponent";
import doctorsData from "../Utitities/DoctorData.json";
import Button from "@/Component/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import CardComponent from "@/Component/card";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useNavigation} from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';


const Index = () => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedDoctor, setSelectedDoctor] = useState('');
   const navigation = useNavigation();
  const showActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const doctorsToShow = showAll ? filteredDoctors : filteredDoctors.slice(0, 3);


  return (
    <ScrollView style={styles.container}>
      <Header location="Danyore, Gilgit" onPress={() => navigation.navigate('profile')} />

      <View>
        <TextInputComponent
          placeholder="Search Doctor Speciality"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <View>
        <Text style={styles.titleText}>Upcoming appointments</Text>
        <View style={styles.appointmentCard}>
          <Image
            source={require("../assets/images/dcotor.jpg")}
            style={styles.doctorImage}
          />
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.Drname}>Dr. Musa Karim</Text>
              <Text style={styles.specialist}>Heart Specialist</Text>
              <Text style={styles.specialist}>Family Health</Text>
              <Text style={styles.timingText}>Time: 2pm 12/08/2020</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10 }}>Patient Before You</Text>
              <Text style={{ color: "#19A9F1" }}>05</Text>
              <Text>Queue No</Text>
              <Text style={{ color: "#19A9F1"}}>23</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.heading}>
          <Text>Featured Doctors</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text style={styles.viewAllText}>
              {showAll ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {doctorsToShow.map((doctor) => (
        <View key={doctor.id} style={styles.doctorCard}>
          <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
          <View style={styles.doctorDetails}>
            <Text style={styles.Drname}>{doctor.name}</Text>
            <Text style={styles.specialist}>{doctor.specialty}</Text>
            <Text style={styles.timingText}>{doctor.recentVisit}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="star" size={20} color="#FFBD00" />
              <Text style={styles.specialist}> {doctor.rating}</Text>
            </View>
            <Button
              title="Add Appointment"
              onpress={showActionSheet}
              buttonStyle={styles.appointmentButton}
              titleStyle={{ fontSize: 8 }}
            />
          </View>
        </View>
      ))}

      <View style={{ padding: 10 }}>
        <View style={styles.heading}>
          <Text>Doctors You Have Visited</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text style={styles.viewAllText}>
              {showAll ? "Show Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 10 }}
      >
        {doctorsToShow.map((doctor) => (
          <View key={doctor.id} style={styles.doctorCard2}>
            <Image source={{ uri: doctor.image }} style={styles.doctorImage2} />
            <View style={{ alignItems: "center", marginTop: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {doctor.name}
              </Text>
              <Text style={{ color: "gray", fontSize: 14 }}>
                {doctor.specialty}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <AntDesign name="star" size={18} color="yellow" />
                <AntDesign name="star" size={18} color="yellow" />
                <AntDesign name="star" size={18} color="yellow" />
                <AntDesign name="star" size={18} color="yellow" />
                <Text style={{ marginLeft: 4, fontSize: 14 }}>
                  {doctor.rating}
                </Text>
              </View>
              <Text style={{ color: "#009CEA", fontSize: 12, marginTop: 6 }}>
                Recent Visit: {doctor.recentVisit}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View>
        <View style={styles.heading}>
          <Text>Speciallist Doctors</Text>
          <Text>View All</Text>
        </View>
      </View>

      <View style={styles.cards}>
        <CardComponent
          title="skin Specialist"
          imageSource={require("../assets/images/Skin.png")}
        />
        <CardComponent
          title="Heart Specialist"
          imageSource={require("../assets/images/heart.png")}
          cardStyle={{backgroundColor :"rgba(252, 152, 129, 1)"}}
        />
        <CardComponent
          title="Kidney Specialist"
          imageSource={require("../assets/images/kidney.png")}
          cardStyle={{backgroundColor :"#9AE571"}}
        />
        <CardComponent
          title="Eyes Specialist"
          imageSource={require("../assets/images/eye.png")}
          cardStyle={{backgroundColor :'#71B4FB'}}
        />
        <CardComponent
          title="Child Specialist"
          imageSource={require("../assets/images/Group.png")}
          cardStyle={{backgroundColor :'#98E4FE'}}
        />
        <CardComponent
          title="General Surgeon"
          imageSource={require("../assets/images/Skin.png")}
          cardStyle={{backgroundColor :'#FDD36E'}}
        />
           
      </View>

      <View>
      <ActionSheet ref={actionSheetRef}>
     
        <View style={styles.actionContainer}>
            <View>
              <Text>
                APPOINMENT FOR
              </Text>
                <View style={styles.inputCard}>
                  <Text>Patient Name</Text>
                  <TextInputComponent
                    placeholder="Leslie Alexander"
                    value={selectedDoctor}
                    onChangeText={setSelectedDoctor}
                    style={styles.searchInput}
                  />
                </View>
                <View style={styles.inputCard}>
                  <Text>Email</Text>
                  <TextInputComponent
                    placeholder="Lestie.Alexandar@Exmaple.Com"
                    value={selectedDoctor}
                    onChangeText={setSelectedDoctor}
                    style={styles.searchInput}
                  />
                </View>

                <View style={styles.inputCard}>
                  <View>
                  <Button
                   title="Request For Appointment"
                   onpress={() =>  navigation.navigate('AppointmentDetails')}
                   buttonStyle={{backgroundColor :'blue'}}
                  />
                  <Button
                   title="Schedule Appointment"
                   onpress={()=>{}}
                   buttonStyle={{backgroundColor :'white'}}
                   titleStyle={{color :'blue'}}
                   />
                  </View>
                </View>
            </View>
        </View>
      </ActionSheet>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  searchInput: {
    marginBottom: 20,
    backgroundColor: "white",
    elevation :3,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  appointmentCard: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius:5,
    marginRight: 10,
  },
  doctorImage2: {
    width: 80,
    height: 80,
    borderRadius:40,
    marginLeft :20
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  Drname: {
    fontSize: 15,
    fontWeight: "bold",
  },
  specialist: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  timingText: {
    fontSize: 12,
    color: "#19A9F1",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  viewAllText: {
    color: "blue",
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  doctorCard2: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    marginVertical: 5,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  doctorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  ratingContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer2: {
    justifyContent: "space-between",
  },
  appointmentButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  cards:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  actionContainer:{
    padding :30,
     alignItems :'center',
     justifyContent :'center'
  },
  inputCard:{
   padding :20,
  }
});

export default Index;
