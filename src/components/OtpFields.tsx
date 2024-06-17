import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../../assets/colors/colors';
import {Font2} from '../../assets/constant/Font';

type Props = {
  nuberOfFields: number;
  style?: object;
  fieldStyle?: object;
  onChangeText?: (text: string) => void;
  value: string;
  pointerEvents?: 'auto' | 'none';
  theme?: 'dark' | 'light';
  isSecured?: boolean;
};

const OtpFields: React.FC<Props> = ({
  nuberOfFields,
  style,
  fieldStyle,
  onChangeText = text => {},
  value,
  pointerEvents = 'auto',
  theme = 'dark',
  isSecured = false,
}) => {
  const otpFields = [];
  const refsFocus = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  for (var t = 0; t < nuberOfFields; t++) {
    otpFields.push(
      <TouchableOpacity
        onPress={() => {
          refsFocus.current && refsFocus.current.focus();
        }}
        key={t}>
        <View
          style={[
            styles.otpField,
            {
              // borderColor: value.length > t ? colors.primary : colors.inactive,
              borderColor:
                value.length > t
                  ? colors[theme].pullup
                  : colors[theme].otpBorder,
            },
          ]}>
          <Text
            style={[
              {
                fontSize: 30,
                color: colors[theme].profileText,
                fontFamily: Font2.regular,
              },
              fieldStyle,
            ]}>
            {isSecured ? value[t] && '*' : value[t]}
          </Text>
        </View>
      </TouchableOpacity>,
    );

    if (t === 2 && nuberOfFields === 6) {
      otpFields.push(
        <View key="dash">
          <Text
            style={[
              {
                fontSize: 30,
                color: colors[theme].profileText,
                fontFamily: Font2.regular,
                paddingHorizontal: 5,
              },
            ]}>
            -
          </Text>
        </View>,
      );
    }
  }
  return (
    <>
      <View
        pointerEvents={pointerEvents}
        style={[
          styles.otpWraper,
          style,
          {opacity: pointerEvents == 'auto' ? 1 : 0.5},
        ]}>
        {otpFields}
      </View>
      <TextInput
        ref={refsFocus}
        keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
        value={value}
        secureTextEntry={isSecured}
        selectionColor={'transparent'}
        style={{color: 'transparent', fontSize: 0, height: 0, width: 0}}
        onChangeText={text => {
          console.log(text);
          onChangeText(
            text.length <= nuberOfFields ? text.replace(/[^0-9]/g, '') : value,
          );
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  otpWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpField: {
    width: 50,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 3,
  },
  otpText: {
    fontSize: 30,
    // color: colors[theme].background,
    fontFamily: Font2.regular,
  },

  input: {},
});

export default OtpFields;
