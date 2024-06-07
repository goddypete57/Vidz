import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import colors from "../../assets/colors/colors";
import Fonts from '../../assets/constant/Font';

type Props = {
    title: string,
    onPress: () => void,
    buttonStyle?: object,
    enabled?: boolean,
    textColor?: string,
    loading?: boolean,
    buttonColor?: string
};

const Button: React.FC<Props> = ({ title, onPress = () => { }, buttonStyle, enabled, textColor, loading, buttonColor= colors.black  }) => {
    return (
        <View pointerEvents={(enabled && !loading) ? 'auto' : 'none'}
            style={[buttonStyle, {
                // height: 56,
                backgroundColor: (enabled && !loading) ? buttonColor : colors.inactive
            }]}>
            <TouchableOpacity  onPress={() => enabled && !loading ? onPress() : {}}
                style={{
                    flex: 1,
                }} >

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'center',
                        fontFamily:  Fonts.medium,
                        color: textColor ? textColor : colors.white,
                        flex: 1
                    }}>{title}</Text>

                    <ActivityIndicator size={'large'}
                        color={colors.white}
                        hidesWhenStopped={true}
                        animating={loading ? loading : false}
                        style={{
                            position: 'absolute',
                            paddingEnd: 10,
                        }}
                    />

                </View>

            </TouchableOpacity>
        </View>

    );
}

export default Button;