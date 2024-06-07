/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import colors from '../../assets/colors/colors';
import Search from '../../assets/icons/searchIcon.svg';

type Props = {
    // leftComponet?: React.ReactNode,
    containerStyle?: object;
    label: string;
} & TextInputProps;

export default function SearchInput({ containerStyle, label, ...rest }: Props) {
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

                <Search />
                <TextInput

                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...rest}
                    style={{
                        fontSize: 15,
                        fontFamily: 'Sora-Regular',
                        color: colors.textcolor,
                        width: '90%',
                        paddingStart:10
                        
                    }}
                />
            </View>
        </View>
    );
}
