import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import { NavigationActions } from 'react-navigation'
import SignUpActions from '../Redux/SignUpRedux'

// https://medium.com/@sankalpsingha/creating-react-native-authentication-with-a-rails-backend-39d94e359984

export function * signUp (api, action) {
  const { email, password, password_confirmation } = action
  console.tron.log('In SignUpSagas.signUp.' + 'email: ' + email + ' password: ' + password)

  // make the call to the api
  const response = yield call(api.signUp, email, password, password_confirmation)

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(SignUpActions.signUpSuccess(email))
    yield put(NavigationActions.navigate({ routeName: 'drawerStack' }))
  } else {
    yield put(SignUpActions.signUpFailure())
  }
}
