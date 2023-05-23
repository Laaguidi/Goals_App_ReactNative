//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
       //console.log(enteredGoalText);
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            //enteredGoalText,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

  return (
    <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text} />;
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
      flex: 1,
  },
    goalsContainer: {
        flex: 5,
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
