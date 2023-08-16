import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    containerOpen: {
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        paddingBottom: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderLeftWidth: 12,
        borderLeftColor: '#138a39',
        borderTopColor: '#138a39',
        borderRightColor: '#138a39',
        borderBottomColor: '#138a39',
        borderWidth: 1
    },
    containerCompleted: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        paddingBottom: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderLeftWidth: 12,
        borderLeftColor: '#c75454',
        borderTopColor: '#c75454',
        borderRightColor: '#c75454',
        borderBottomColor: '#c75454'
    },

    textID: {
        fontSize: 9,
    },
    textDescription: {
        fontSize: 18,
        paddingBottom: 5,
        marginTop: -2,
        fontWeight: 'bold'
    },
    textStatus: {
        fontSize: 9
    },
    containerTask: {
        marginTop: 5,
        width: '80%',
        paddingLeft: 8,

    },
    containerIcon: {
        width: '20%',
        paddingLeft: 25,
        paddingTop: 10,
        marginTop: 5,
        height: '100%'
    },
    iconOpen: {
        color: '#989898',
    },
    iconCompleted: {
        color: 'green',
    },

    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }, 

    modalBox: {
        backgroundColor: 'white',
        padding: 50,
        width: '70%',
        borderRadius: 15,
        elevation: 3,
        shadowOpacity: 0.85,

    },
    title: {
        fontSize: 16,
        marginBottom: 30
    },
    switchText: {
        textAlign: 'right'
    },
    deleteIcon: {
        color: 'red'
    }

});

export default styles;