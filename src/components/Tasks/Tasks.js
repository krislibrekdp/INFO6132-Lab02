import { View, ScrollView, Text } from 'react-native';
import Task from './Task/Task';
import styles from './styles';

export default function Tasks(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textToDo}>To do app</Text>
            <ScrollView>
                {props.tasks.map(
                    (task, index) => (
                        <Task key={index} task={task}
                        onStatusChange={props.onStatusChange} 
                        onTaskRemoval={props.onTaskRemoval}/>
                    )
                )}
            </ScrollView>
        </View>
    );
}
