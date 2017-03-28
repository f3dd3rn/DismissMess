import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#caff70',
    paddingTop: 20,
    paddingBottom: 20
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600'
  }
});

export { Header };
