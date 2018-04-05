import React from 'react'
import { Text, Animated, Easing, TouchableOpacity } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
import MessagesScreen from '../Containers/MessagesScreen'
import DrawerContainer from '../Containers/DrawerContainer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Styles/NavigationStyles'

const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  initialRouteName: 'signupScreen',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

const DrawerStack = DrawerNavigator({
  screen1: { screen: MessagesScreen }
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Messages',
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: <TouchableOpacity>
      <Icon name="menu" size={35} style={{marginLeft: 5}} color='white' onPress={() => {
        // Coming soon: navigation.navigate('DrawerToggle')
        // https://github.com/react-community/react-navigation/pull/2492
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen')
        } else {
          navigation.navigate('DrawerClose')
        }
      }}/>
    </TouchableOpacity>
  })
})

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MessagesScreen: { screen: MessagesScreen },
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig,
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
