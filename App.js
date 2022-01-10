import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import QuestionScreen from './src/Screens/Question';
import StartScreen from './src/Screens/Start';
import ResultScreen from './src/Screens/Result';


const navigator = createStackNavigator(
  {
    Start: StartScreen,
    Question: QuestionScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: 'Start',
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (

    <AppContainer />

  );
}

export default App;
