// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from '../app/index';
import AppointmentDetails from '@/app/AppointmentDetails';
import ConfirmationScreen from '@/app/ConfirmationScreen';
import medicalAppointment from '@/app/medicalAppointment';
import profile from '@/app/profile';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="medicalAppointment" component={medicalAppointment} />
        <Stack.Screen name="profile" component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
