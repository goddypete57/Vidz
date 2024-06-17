import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import colors from "../../assets/colors/colors";
import { Fonts } from '../../assets/constant';
import { AuthContext } from '../../context/AuthContext';


type Props = {
    title: string,
    onPress: () => void,
    buttonStyle?: object,
    enabled?: boolean,
    textColor?: string,
    loading?: boolean,
    theme?: 'dark' | 'light',
    buttonColor?: string
};

const Button: React.FC<Props> = ({ title, onPress = () => { },theme = 'dark', buttonStyle, enabled, textColor, loading, buttonColor= colors[theme].black  }) => {
   

    return (
        <View pointerEvents={(enabled && !loading) ? 'auto' : 'none'}
            style={[buttonStyle, {
                // height: 56,
                backgroundColor: (enabled && !loading) ? buttonColor : 'rgba(255, 133, 32, 1)'
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
                        color: textColor ? textColor : colors[theme].black,
                        flex: 1
                    }}>{title}</Text>

                    <ActivityIndicator size={'large'}
                        color={colors[theme].white}
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