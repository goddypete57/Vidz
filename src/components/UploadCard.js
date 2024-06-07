import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';
import Gallery from '../../assets/icons/Gallery.svg';
import Camera from '../../assets/icons/Camera.svg';
import Doc from '../../assets/icons/Doc.svg';
import Paint from '../../assets/icons/Paint.svg';
import React, {useRef} from 'react';
import Bottomsheet from 'react-native-raw-bottom-sheet';

export default UploadCard = ({
  handlePress,
  openGallary,
  OpenCamara,
  openDecument,
}) => {
  const bottomSheetRef = useRef(null);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          openGallary();
        }}
        style={styles.cardContent}>
        <Gallery />
        <Text style={styles.photoText}>Photo & Video </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          OpenCamara();
        }}
        style={styles.cardContent}>
        <Camera />
        <Text style={styles.photoText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          openDecument();
        }}
        style={styles.cardContent}>
        <Doc />
        <Text style={styles.photoText}>Document </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}
        style={styles.cardContent}>
        <Paint />
        <Text style={styles.photoText}>Point </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    width: 224,
    position: 'absolute',
    bottom: 80,
    right: 15,
    paddingVertical:10,
    borderColor:'rgba(226, 231, 242, 0.80)',
    borderRadius:5,borderWidth:0.8
  },
  cardContent: {
    flexDirection: 'row',
    width: 224,

    padding: 12,
  },
  photoText: {
    marginStart: 12,
    fontSize: 14,
    fontFamily: 'Sora-Regular',
    color: colors.forgotText,
  },
});
