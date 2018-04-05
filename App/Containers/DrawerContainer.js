import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DrawerContainerStyle'

class DrawerContainer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.uglyDrawerItem}>
          Screen 1
        </Text>
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.uglyDrawerItem}>
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.uglyDrawerItem}>
          Screen 3
        </Text>
        <Text
          onPress={this.logout}
          style={styles.uglyDrawerItem}>
          Log Out
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)
