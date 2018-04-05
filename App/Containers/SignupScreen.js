import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n';
import SignUpActions from '../Redux/SignUpRedux'


// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignupScreenStyle'

class SignupScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    attemptSignUp: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      cellphone: ''
    }
  }

  handleChangeEmail = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  handleChangePasswordConfirmation = (text) => {
    this.setState({ password_confirmation: text })
  }

  handleChangeCellPhone = (text) => {
    this.setState({ cellphone: text })
  }

  handlePressSignUp = () => {
    const { email, password, password_confirmation } = this.state
    this.props.attemptSignUp(email, password, password_confirmation)
  }

  render () {
    const { username, password, password_confirmation, cellphone } = this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.row}>
              <Text style={styles.rowLabel}>{I18n.t('email')}</Text>
              <TextInput
                ref='username'
                style={styles.textInputStyle}
                value={username}
                keyboardType='email-address'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeEmail}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.password.focus()}
                placeholder='Username' />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>{I18n.t('password')}</Text>
            <TextInput
              ref='password'
              style={styles.textInputStyle}
              value={password}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.password_confirmation.focus()}
              placeholder='Password' />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>{I18n.t('password_confirmation')}</Text>
            <TextInput
              ref='password_confirmation'
              style={styles.textInputStyle}
              value={password_confirmation}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePasswordConfirmation}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.cellphone.focus()}
              placeholder='Password Confirmation' />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>{I18n.t('cellphone')}</Text>
            <TextInput
              ref='cellphone'
              style={styles.textInputStyle}
              value={cellphone}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangeCellPhone}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressSignUp}
              placeholder={I18n.t('cellphone')} />
          </View>
          <View style={styles.row}>
            <Button
              onPress={this.handlePressSignUp}
              title="S'enregistrer"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptSignUp: (email, password, password_confirmation) => dispatch(SignUpActions.signUpRequest(email, password, password_confirmation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
