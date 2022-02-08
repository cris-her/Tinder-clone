import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//https://lagandlog.com/logs/how-to-use-tailwind-css-in-react-native
import tw from 'tailwind-react-native-classnames';

export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-blue-600`}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

/* //styles.container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */