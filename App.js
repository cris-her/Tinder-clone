import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, View } from 'react-native';
//https://lagandlog.com/logs/how-to-use-tailwind-css-in-react-native
import tw from 'tailwind-react-native-classnames';
import StackNavigator from './StackNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); // ignore log notificaiton by message
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
    <NavigationContainer> 
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
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