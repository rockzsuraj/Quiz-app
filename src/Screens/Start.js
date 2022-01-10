import React from 'react'
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Title from '../components/Title';

const Start = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Title />
                <View >
                    <Image
                        source={require('../resource/quizeImage.jpg')}
                        resizeMode='contain'
                        style={styles.banner}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Question');
                }}
            >
                <Text>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Start

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        width: 300,
        height: 300,
        borderRadius: 10
    }
})
