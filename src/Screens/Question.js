import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const operators = ["+", "-", "*", "/"];
let score = 0;
const Question = ({ navigation }) => {
    const [questions, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({
        id: 1,
        num1: Math.floor((Math.random() * 10) + 1),
        num2: Math.floor((Math.random() * 10) + 1),
        operator: operators[Math.floor(Math.random() * operators.length)],
        questionsStatus: '',
        givenAnswer: '',
    });
    const [score, setScore] = useState(0);

    function calculate(op, x, y) {
        if (op === '*') return x * y;
        if (op === '+') return x + y;
        if (op === '-') return x - y;
        if (op === '/') return x / y;
    }

    return (
        <View>
            <Text>Attemp the question below</Text>
            <Text>Question No. {currentQuestion.id}</Text>
            <View>
                <Text>
                    {currentQuestion.num1}
                </Text>
            </View>
            <View>
                <Text>
                    {currentQuestion.operator}
                </Text>
            </View>
            <View>
                <Text>
                    {currentQuestion.num2}
                </Text>
            </View>

            <TextInput
                style={styles.input}
                value={currentQuestion.submitAnswer}
                onChangeText={(value) => { setCurrentQuestion({ ...currentQuestion, submitAnswer: value }) }}
            />
            {
                currentQuestion.id <= 9 ? <Button
                    title='Next'
                    onPress={() => {
                        const { operator, num1, num2, submitAnswer } = currentQuestion;
                        const isCorrect = calculate(operator, (num1), num2) === Number(submitAnswer);
                        setQuestion((prev) => [...prev, { ...currentQuestion, questionsStatus: isCorrect, givenAnswer: submitAnswer }]);
                        setCurrentQuestion({
                            id: currentQuestion.id + 1,
                            num1: Math.floor((Math.random() * 10) + 1),
                            num2: Math.floor((Math.random() * 10) + 1),
                            operator: operators[Math.floor(Math.random() * operators.length)],
                            questionsStatus: '',

                        })
                        isCorrect ? setScore(score + 1) : score;
                    }}
                /> :
                    <Button
                        title='Submit'
                        onPress={() => {
                            const { operator, num1, num2, submitAnswer } = currentQuestion;
                            isCorrect ? setScore(score + 1) : score;
                            const isCorrect = calculate(operator, (num1), num2) === Number(submitAnswer);
                            if (currentQuestion.id === 10) {
                                setQuestion((prev) => [...prev, { ...currentQuestion, questionsStatus: isCorrect, givenAnswer: submitAnswer }])
                            }
                            navigation.navigate('Result', { questions, score });
                        }}
                    />
            }
            <View>
                <Text>
                    {score}
                </Text>
            </View>
        </View>
    )
}



export default Question;

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
})
