//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        console.log(enteredText)
    }
    function addGoalHandler() {
       //console.log(enteredGoalText);
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            //enteredGoalText,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.textInput}
              placeholder='Your course goal!'
              onChangeText={goalInputHandler}
          />
          <Button title='Add goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem />;
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop:50,
    paddingHorizontal: 16,
      flex: 1
  },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5
    }
})


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    dummyText: {
      margin: 16,
        borderWidth: 2,
        borderColor: 'Blue',
    }
});
 */
