//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

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
            enteredGoalText,
        ]);
        setEnteredGoalText('')
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
          {courseGoals.map((goal) =>
              <View key={goal} style={styles.goalItem}>
                  <Text style={styles.goalText}>{goal}</Text>
              </View>
          )}
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
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
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
