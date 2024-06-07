import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../assets/colors/colors";

export default Splash = () => {
    return (
        <View style={{ width: '100%',
        height: '100%', justifyContent:"center",alignItems:"center",backgroundColor:colors.black}}>

            <Image
                style={styles.image}
                source={require("../../assets/images/logo.png")}
            />
        </View>
    );  
}

const styles = StyleSheet.create({

    image: {
        width:100,
        height: 100,
        resizeMode: 'cover',
    }
});