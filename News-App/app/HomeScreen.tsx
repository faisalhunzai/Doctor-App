import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const data = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Dropdown
          style={styles.dropdown}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select"
          value={selectedValue}
          onChange={(item) => setSelectedValue(item.value)}
        />

        <View style={styles.searchContainer}>
          {/* <Icon name="search" size={20} color="#333" style={styles.icon} /> */}
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 16,
    margin :20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  dropdown: {
    width: '45%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
