import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './src/database/config'

const Tab = createBottomTabNavigator();

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  function getPost() {
    setLoading(true);
    const data = [];
    const dbCollection = collection(db, "post");
    getDocs(dbCollection)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const post = {
                ...doc.data(),
                id: doc.id
            };
            data.push(post);
        });
        setTasks(data);
        setLoading(false);
    })
    .catch((error) => {
        console.log('Error: ', error)
    });
  }


  useEffect(() => {
    getPost();
  },[]);

  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter(
    (task) => task.id !== id
    );
    setTasks(updatedTasks);
    }

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const handleAddTask = (taskDescription, taskDone, id) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(
      {
        id: id,
        description: taskDescription,
        done: taskDone
      }
    );
    setTasks(updatedTasks);
  }

  if(loading) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              color: 'black',
              fontSize: 12
            }
          }}>
          <Tab.Screen name='List'
            options={{
              tabBarIcon: () => {
                return (
                  <Feather name="list" size={24} color="black" />
                )
              }
            }}>
            {(props) => (
              <Tasks {...props} tasks={tasks}
              onStatusChange={handleStatusChange} 
              onTaskRemoval={handleTaskRemoval} />
              
            )}
          </Tab.Screen>
          <Tab.Screen name='Add'
            options={{
              tabBarIcon: () => {
                return (
                  <MaterialIcons name="post-add" size={24} color="black" />
                )
              }
            }}
          >
            {(props) => (
              <Form {...props} onAddTask={handleAddTask} />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}


