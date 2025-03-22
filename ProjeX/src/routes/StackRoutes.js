import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register,ForgotPassword,Home,Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForgotPasswordScreen from '../screens/ForgotPassword';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Profile">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
