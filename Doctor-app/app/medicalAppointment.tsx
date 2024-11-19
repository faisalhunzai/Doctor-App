import {StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from 'expo-router';
import Button from '@/Component/Button';

const MedicalAppointment = () => {

    const navigation =useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="arrowleft" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.header}>Confirmation</Text>
      </View>

      <View style={styles.textCard}>
        <Text>Current Queue State For</Text>
        <Text style={{fontWeight :'bold', fontSize :18}}>Medical Appointment</Text>
        <Text style={styles.instructionText}>
          Please proceed to the assessment area{'\n'} when you arrive before seeing the doctor.{'\n'} Let us know when you are here.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Your Queue Number</Text>
        <Text style={styles.queueNumber}>23</Text>
        <Text style={styles.cardSubtitle}>Patients Before You</Text>
        <Text style={styles.patientCount}>04</Text>
        <Text style={styles.cardSubtitle}>As At</Text>
        <Text style={styles.time}>02:05 PM</Text>
      </View>
      <View>
        <Button
         title='Back TO Home'
         onpress={() => navigation.navigate('index')}
        />
      </View>
    </View>
  );
};

export default MedicalAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginLeft: 40,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 15,
    width: '90%',
  },
  textCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  instructionText: {
    textAlign: 'center',
    marginTop: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  queueNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 10,
  },
  cardSubtitle: {
    marginTop: 10,
    fontWeight: '600',
  },
  patientCount: {
    fontSize: 24,
    marginBottom: 10,
  },
  time: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});
