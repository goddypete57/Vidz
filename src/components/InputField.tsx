/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import colors from '../../assets/colors/colors';
import Mask from '../../assets/icons/mask.svg';
import Fonts from '../../assets/constant/Font';

type Props = {
    // leftComponet?: React.ReactNode,
    containerStyle?: object;
    label: string;
    rightComponet?: React.ReactNode,
    leftComponet?: React.ReactNode,
} & TextInputProps;

export default function InputField({ containerStyle, label, rightComponet, leftComponet, ...rest }: Props) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View
            style={[
                {
                    borderColor: isFocused ? colors.inputBorder : colors.inputBorder,
                    backgroundColor: colors.input,
                    borderRadius: 4,
                    borderWidth: 1,
                    paddingHorizontal: 0,
                    paddingStart: 16,
                    height: 56,
                  justifyContent:'center'
                },
                containerStyle,
            ]}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                {leftComponet && leftComponet}
                <TextInput

                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...rest}
                    style={{
                        fontSize: 15,
                        fontFamily:  Fonts.regular,
                        color: colors.textcolor,
                        width: '90%'
                    }}
                />
                {rightComponet && rightComponet}
            </View>
        </View>
    );
}
