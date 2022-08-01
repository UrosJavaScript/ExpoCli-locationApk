import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default styles = StyleSheet.create({
    carouselContainer: {
        flex:1
    },
    backgroundImage: {
        height: '100%',
        width: width
    },
    title: {
        position: 'absolute',
        top: 200,
        alignSelf: "center",
        fontWeight: 'bold',
        color: "white",
        fontSize: 45,
        zIndex: 2,
    },
    buttonHolder: {
        position: 'absolute',
        bottom: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: width * 0.7,
        borderRadius: 10,
        zIndex: 2,
        backgroundColor: '#00ffff',
        padding: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 2,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase'
    }

});