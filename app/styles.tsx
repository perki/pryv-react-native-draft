import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
      marginHorizontal: 16,
   },
   headline: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   title: {
      textAlign: 'center',
      marginVertical: 8,
   },
   text: {
    color: '#000',
  },
   separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
   },
   button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default styles;