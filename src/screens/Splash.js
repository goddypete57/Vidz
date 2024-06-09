import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../assets/colors/colors';
import {AuthContext} from '../../context/AuthContext';

export default Splash = () => {
  const {colorScheme} = useContext(AuthContext);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors[colorScheme].background,
      }}>
      <Image
        style={styles.image}
        source={
          colorScheme == 'dark'
            ? require('../../assets/images/logo.png')
            : require('../../assets/images/splash.png')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
