import { View, Text, TextInput, Switch, Button, Keyboard, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../database/config';

export default function Form(props) {

    const [taskDescription, setTaskDescription] = useState('');
    const handleDescriptionChange = (value) => {
        setTaskDescription(value);
    }
    const handleAddPress = () => {
        if (taskDescription) {
            setErrorMessage(null);
            setTaskDescription('');
            setTaskDone(false);
            Keyboard.dismiss();
            const dbCollection = collection(db,'post');
            addDoc(dbCollection, {
                description: taskDescription,
                done: taskDone
            }
            )
            .then ((docRef) => {
                console.log('Success: ', docRef.id);
                props.onAddTask(taskDescription, taskDone,docRef.id);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });

        }
        else {
            setErrorMessage('The description is required.');
        }

    }
    const [taskDone, setTaskDone] = useState(false);
    const handleStatusChange = (value) => {
        setTaskDone(value);

    }
    const [errorMessage, setErrorMessage] = useState(null);
    return (
        <View style={styles.container}>
            {errorMessage && (
                <View style={styles.errorMessage}>
                    <Text style={styles.textAttention}>Attention:</Text>
                    <Text style={styles.textDescription}>{errorMessage}</Text>
                </View>
            )}
            <TextInput
                placeholder='Enter a task description'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
                style={styles.textInput}
            />
            <View style={styles.sCompleted}>
                <Text style={styles.textCompleted}>Completed:</Text>
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                />
            </View>

            <TouchableOpacity
                onPress={handleAddPress}
                style={styles.btnStyle} >
                <Text style={styles.btnText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}
