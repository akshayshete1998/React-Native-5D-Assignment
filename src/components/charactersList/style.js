import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,

    },
    listWrapper: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        flex: 1
    },
    wrapFlex: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    imgDimestion: {
        height: 200,
        width: 150,
        borderRadius: 5
    },
    textColor: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    },
    textColorOfCharacter: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
        width: '100%'
    },
    nameWrapper: {
        color: 'white'
    },
    textWrapper: {
        flexDirection: 'column',
        width: '60%',
    },
    cardWrapper: {
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})