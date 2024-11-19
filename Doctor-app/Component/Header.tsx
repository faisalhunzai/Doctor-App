import React from 'react';
import { Image, StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

type HeaderProps = {
  location?: string;
  profileImage?: ImageSourcePropType;
  onPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ location = "Danyore, Gilgit", profileImage, onPress }) => {
  return (
    <View style={styles.header}>
      <AntDesign name="left" size={24} color="black" style={styles.icon} />
      <View style={styles.location}>
        <EvilIcons name="location" size={24} color="black" style={styles.icon} />
        <Text style={styles.locationText}>{location}</Text>
        <AntDesign name="down" size={24} color="black" style={styles.icon} />
      </View>
      <TouchableOpacity onPress={onPress} accessible accessibilityLabel="Profile image">
        <Image
          source={profileImage || require('../assets/images/profile.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8', 
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginHorizontal: 5,
    fontSize: 16,
  },
  icon: {
  
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
