import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
    alignSelf: 'stretch',
    backgroundColor: '#c99999',
    padding: 10,
    paddingBottom: 20
    },
    textInput: {
        backgroundColor: 'white',
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    errorMessage: {
        padding: 10,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderLeftColor: '#fc0a0a',

    },
    textAttention: {
        fontWeight: 'bold',
        color: '#fc0a0a',
        fontSize: 15
    },
    sCompleted: {
        flexDirection: 'row',
        alignItems: 'flex-start'

    },
    textCompleted: {
        marginTop: 12,
        color: 'white',
        alignSelf: 'flex-start'
    },
    btnStyle: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fc9b0a',
    },
    btnText: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
    });

export default styles;