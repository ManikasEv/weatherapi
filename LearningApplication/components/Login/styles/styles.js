import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";


const colorPalette = colors();

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: colorPalette.white
      },
      title: {
        fontSize: 24,
        marginBottom: 24,
        fontWeight: 'bold'
      },
      input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        borderRadius: 15,
        color:colorPalette.black,
        borderColor: colorPalette.black
      },
      btn:{
        borderRadius: 10,
        backgroundColor: colorPalette.black,
        padding:5,
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        marginHorizontal: 10
      },
      btnText:{
        color:colorPalette.white,
        fontWeight: 'bold',
        fontSize: 15
      }
})

export default styles