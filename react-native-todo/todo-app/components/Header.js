import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    backgroundColor: '#171717',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F3F3F3',
    // backgroundColor: '#000x',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase'
    // height: 20
  }, 
});


export default Header;
