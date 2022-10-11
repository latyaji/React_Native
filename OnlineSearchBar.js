import React, { useState } from 'react';

import { Alert, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

export default function OnlineSearchBar() {
    

  const [TEMP_DATA, setTEMP_DATA] = useState([
    {
      id: 1,
      name: 'one',
    },
    {
      id: 2,
      name: 'two',
    },
    {
      id: 3,
      name: 'three',
    },
    {
      id: 4,
      name: 'four',
    },
    {
      id: 5,
      name: 'five ',
    },
    {
      id: 6,
      name: 'six',
    },
    {
      id: 7,
      name: 'seven',
    },
    {
      id: 8,
      name: 'eight',
    },
    {
      id: 9,
      name: 'nine',
    },
    {
      id: 10,
      name: 'ten',
    },
    {
      id: 11,
      name: 'eleven',
    },
    {
      id: 12,
      name: 'twelve',
    },
    {
      id: 13,
      name: 'thirteen',
    },
    {
      id: 14,
      name: 'fourteen',
    },
    {
      id: 15,
      name: 'fifteen ',
    },
    {
      id: 16,
      name: 'sixteen',
    },

  ]);

  const deleteSelectedElement = (id, name) => {

    Alert.alert(
      'Are You Sure Want To Delete Item = ' + name.toUpperCase(),
      'Select Below Options',
      [
        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
        {
          text: 'OK', onPress: () => {
            // Filter Data 
            const filteredData = TEMP_DATA.filter(item => item.id !== id);
            //Updating List Data State with NEW Data.
            setTEMP_DATA(filteredData);
          }
        },
      ])
  }

  const ItemRender = ({ id, name }) => (
    <View style={{ padding: 12 }}>
      <Text style={styleSheet.itemText}
        onPress={() => deleteSelectedElement(id, name)} >
        {name}
      </Text>
    </View>
  );

  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styleSheet.MainContainer}>

      <FlatList
        data={TEMP_DATA}
        renderItem={({ item }) => 
        
        <ItemRender id={item.id} name={item.name} />}
        ItemSeparatorComponent={Divider}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  itemText: {
    fontSize: 26,
    color: 'black',
    textTransform: 'capitalize'
  }

});