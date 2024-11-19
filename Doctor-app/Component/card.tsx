import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, ViewStyle, ImageStyle } from 'react-native';

type CardComponentProps = {
  title: string;
  imageSource: ImageSourcePropType;
  cardStyle?: ViewStyle;
  imageStyle?: ImageStyle;
};

const CardComponent: React.FC<CardComponentProps> = ({ title, imageSource, cardStyle, imageStyle }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={styles.text}>{title}</Text>
      <Image source={imageSource} style={[styles.cardImage, imageStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 121,
    height: 119,
    backgroundColor: 'rgba(76, 209, 188, 1)',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    marginTop :20
  },
  cardImage: {
    marginLeft: 50,
    width: 50,
    height: 50,
  },
  text:{
    color: 'white',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 5,
    marginLeft: 5
  }
});

export default CardComponent;
