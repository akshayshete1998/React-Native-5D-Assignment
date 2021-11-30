import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
    },
    breakingPadTitle: {
        fontSize: 23,
        color: 'white',
        fontFamily: 'Roboto-Bold',
        height: 40,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeScreenWrapper: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchIconWrapper: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})