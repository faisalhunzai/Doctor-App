import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/Component/Button';
import { useNavigation } from 'expo-router';

const AppointmentConfirmationScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
    <View >
        <View style={{flexDirection :'row'}}>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.backIcon} />
      <Text style={styles.header}>Confirmation</Text>
      </View>
      <View style={styles.confirmationContainer}>
        <AntDesign name="checkcircle" size={80} color="white" />
        <Text style={styles.confirmationText}>Appointment Confirmed</Text>
        <Text style={styles.subText}>
          Confirmation email and SMS has been sent on your registered details
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.queueNumber}>Booking Queue Number: 23</Text>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.doctorName}>Dr. Musa Karim</Text>
            <Text style={styles.specialization}>heart specialist</Text>
            <Text style={styles.degree}>MBBS</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
            <View>
          <Text style={styles.detailLabel}>Patient</Text>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailLabel}>Time</Text>
          </View>
          <View>
          <Text style={styles.detailValue}>Ahsam Uddin</Text>
          <Text style={styles.detailValue}>12/09/2020</Text>
          <Text style={styles.detailValue}>2PM To 3PM</Text>
          </View>
        </View>
      </View>

      
       
    <View style={{marginTop :20}}>
      <Button
       title='View Queue Status'
       onpress={() =>  navigation.navigate("medicalAppointment")}
       buttonStyle={styles.button}
       titleStyle={{color :'black'}}
      />
       <Button
       title='Cancel Appointment'
       onpress={() =>{}}
       buttonStyle={{backgroundColor :'#0288d1'}}
      />
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0288d1',
    padding: 16,
  },
  backIcon: {
    marginBottom: 10,
  },
  header: {
    color: 'white',
    fontSize: 18,
    marginLeft :40
   
  },
  confirmationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmationText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  queueNumber: {
    color: '#0288d1',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius:10,
    marginRight: 10,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  specialization: {
    color: 'gray',
  },
  degree: {
    color: 'gray',
    fontSize: 12,
  },
  detailsContainer: {
    marginTop: 10,
    flexDirection :'row',
    justifyContent :'space-between',
    margin :10
  },
  detailLabel: {
    color: 'gray',
    fontWeight: 'bold',
  },
  detailValue: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  cancelText: {
    color: 'gray',
    textAlign: 'center',
  },
});

export default AppointmentConfirmationScreen;
