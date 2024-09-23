import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      fontFamily: 'Roboto_400Regular',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontFamily: 'Roboto_700Bold',
      color: '#1F2261',
      textAlign: 'center',
    },
    inputContainer: {
      textAlign: 'center',
      flexDirection: 'column',
      gap: 30,
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      padding: 15,
      paddingLeft: 24,
      borderColor: '#E7E7EE',
      borderWidth: 1,
      borderRadius: 15,
      color: '#A1A1A1',
      fontFamily: 'Roboto_400Regular',
      width: 'auto'
    },
    buttonsContainer: {
      flexDirection: 'column',
      gap: 31,

    },
    button: {
      backgroundColor: '#26278D',
      padding: 12,
      paddingLeft: 102,
      paddingRight: 102,
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Roboto_700Bold',
      textAlign: 'center',
    },
    buttonsFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 30,
      gap: 5,
    },
    footerText: {
      color: '#A1A1A1',
      fontFamily: 'Roboto_400Regular',
      fontSize: 14
    },
    footerButton: {
      color: '#1F2261',
      fontSize: 14,
      fontFamily: 'Roboto_700Bold',
    }
});