import { View, Text, Pressable, Modal, Button, Switch, Alert } from 'react-native';
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../database/config';

export default function Task(props) {

    const [showModal, setShowModal] = useState(false);
    const handleModalToggle = () => {
        setShowModal(!showModal);
        const docRef = doc(db, 'post', props.task.id);
        updateDoc(docRef, {
            done: props.task.done
        })
        .then(() => {
            console.log('Successfully updated!');
        })
        .catch((error) => {
            console.log('Error: ',error);
        })

    }

    const handleStatusChangePress = () => {
        props.onStatusChange(props.task.id);
    }

    const handleRemovePress = () => {
        Alert.alert(
            'Remove Task',
            'This action will permanently delete this task. This action cannot be undone!', [
        {
                text: 'Confirm',
                onPress: () => {
                    const dbDoc = doc(db, 'post', props.task.id);
                    deleteDoc(dbDoc)
                    .then(() => {
                        console.log('Successfully deleted!');
                    })
                    .catch((error) => {
                        console.log('Error: ', error);
                    });
                    
                    props.onTaskRemoval(props.task.id);
                    setShowModal(false);


                }
            },
            {
                text: 'Cancel'
            }
        ]);
}



return (
    <>
        <Pressable onPress={handleModalToggle}>
            <View style={props.task.done === true ? styles.containerOpen : styles.containerCompleted}>
                <View style={styles.containerTask}>
                    <Text style={styles.textDescription}>{props.task.description}</Text>
                    <Text style={styles.textID}>ID: {props.task.id}</Text>
                    <Text style={styles.textStatus}>Status: {props.task.done ? 'Completed' : 'Open'}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <FontAwesome5 style={props.task.done === true ? styles.iconCompleted : styles.iconOpen} name="check-circle" solid size={30} />
                </View>
            </View>
        </Pressable>

        <Modal visible={showModal} animationType='slide' >
            <View style={styles.modalContainer}>
                <View style={styles.modalBox}>
                    <Text
                        style={styles.title}>{props.task.description}</Text>
                    <Pressable onPress={handleRemovePress}>
                        <AntDesign style={styles.deleteIcon} name="delete" size={24} color="black" />
                    </Pressable>
                    <Text style={styles.switchText}>Toggle Status</Text>
                    <Switch
                        value={props.task.done}
                        onValueChange={handleStatusChangePress}
                    />


                    <Button title='Close' onPress={handleModalToggle} />
                </View>
            </View>
        </Modal>
    </>
);
}
