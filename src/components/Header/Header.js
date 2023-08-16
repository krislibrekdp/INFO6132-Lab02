import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <FontAwesome5 style={styles.icon} name="tasks" size={24} />
            <Text style={styles.titleText}> Lab 2</Text>
            <Text style={styles.titleText2}>by Kris Jan Libre</Text>
        </View>
    );
}
