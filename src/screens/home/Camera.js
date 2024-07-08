import React, { useEffect } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import colors from '../../../assets/colors/colors';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import mainRouts from '../../navigations/routs/mainRouts';

const { width, height } = Dimensions.get('window');

export default function Scan() {
  const navigation = useNavigation(); // Get navigation prop
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  console.log(hasPermission,device)

  useEffect(() => {
    let timer;
    if (hasPermission && device) {
      timer = setTimeout(() => {
        // Navigate to the FindVideo screen and reset the stack
        navigation.reset({
          index: 0,
          routes: [{ name: mainRouts.findVideo }],
        });
      }, 5000); // 5000ms = 5s
    }
    return () => clearTimeout(timer);
  }, [hasPermission, device, navigation]);

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera Permission Required</Text>
        <Button
          buttonColor="rgba(255, 133, 32, 1)"
          buttonStyle={styles.button}
          title="Request Permission"
          onPress={() => requestPermission()}
          enabled={true}
        />
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera Unavailable</Text>
      </View>
    );
  }

  return hasPermission ? (
    <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
      />
    </View>
  ) : (
    requestPermission() === false && (
      <View style={styles.container}>
        <Text style={styles.text}>Camera Permission Required</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    height: 46,
    width: 200,
    marginTop: 20,
    borderRadius: 8,
  },
  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    width: width,
    height: height - 5,
  },
});
