import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const Result = ({ navigation }) => {
    const questions = navigation.getParam('questions');
    const score = navigation.getParam('score');
    return (

        <View>
            <Text >
                Given question was
            </Text>
            <Text>
                Given answer was
            </Text>
            <FlatList
                keyExtractor={item => item.id}
                data={questions}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <View >

                        </View>
                        <View >
                            <Text>
                                {item.id}.{" "}
                            </Text>
                        </View>
                        <View >
                            <Text>
                                {item.num1}
                            </Text>
                        </View>
                        <View>
                            <Text>
                                {item.operator}
                            </Text>
                        </View>
                        <View>
                            <Text>
                                {item.num2}
                            </Text>
                        </View>
                        <View>
                            <Text>
                                your givem answer is :
                            </Text>
                        </View>
                        <View>
                            <Text>
                                {item.givenAnswer}
                            </Text>
                        </View>

                    </View>

                )}
            />
            <View>
                <Text>
                    {score}
                </Text>
            </View>
        </View>

    )
}

export default Result

const styles = StyleSheet.create({
    list: {
        fontSize: 100,
        flexDirection: 'row',
        padding: 10,
    },
    listBox: {
        borderColor: 'blue'
    }
})
