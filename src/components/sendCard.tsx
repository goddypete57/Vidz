import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/colors/colors';
import LightCancel from '../../assets/icons/LightCancel.svg';
import FilledDoc from '../../assets/icons/FilledDoc.svg';

export default function SendCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.sendText}>Send Document</Text>
            <View style={styles.sendWrapper}>
                <FilledDoc />
                <View style={styles.textWrapper}>
                <Text style={styles.text1}>
                  Whitepaper.pdf
                </Text>
                <Text style={styles.text2}>200KB</Text>
                </View>
                <LightCancel style={styles.cancelStyle}/>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
 
    card: {
      flex: 1,
      backgroundColor:colors.white,
      width: '100%',
      height: 130,
      padding: 16
    },
    sendText: {
        fontSize: 15,
        fontFamily: 'Sora-Regular',
        color: colors.primary,
    },
    sendWrapper: {
        borderRadius: 8,
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        height: 71,
        marginTop: 13,
        borderWidth: 1,
        borderColor: colors.sendBorder
    },
    textWrapper: {
        marginStart: 15
    },
    text1: {
        fontSize: 13,
        fontFamily: 'Sora-Regular',
        color: colors.primary,
    },
    text2: {
        fontSize: 12,
        fontFamily: 'Sora-Light',
        color: colors.forgotText,
    },
    cancelStyle: {
        marginStart: 135
    }
  });