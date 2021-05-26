import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjacctsScreen from './Components/ProjacctsScreen'
import AccountSummary from './Components/AccountSummary';
import EditProject from './Components/EditProject';
import { LogBox } from 'react-native';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgetPassword';
import SignUpOption from './Components/SignUpOption';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='SignUpOption' component={SignUpOption} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Projacct" component={ProjacctsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountSummary} options={{ headerShown: false }} />
        <Stack.Screen name="EditProject" component={EditProject} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;