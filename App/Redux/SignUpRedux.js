import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ReduxSauce doc https://github.com/infinitered/reduxsauce */

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  signUpRequest: ['email', 'password', 'password_confirmation'],
  signUpSuccess: ['email'],
  signUpFailure: null
})

export const SignUpTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
  email: null,
  password: null,
  password_confirmation: null
})

/*  A reducer is a function.
    It has 2 inbound parameters and returns the new state. */
export const signUpRequest = (state, { email, password, password_confirmation }) => {
  console.tron.log('In SignUpRedux.signUpRequest.' + 'email: ' + email + ' password: ' + password)
  return state.merge({ email, password, password_confirmation })
}

export const signUpSuccess = (state, action) => {
  const { email } = action
  return state.merge({ email })
}

export const signUpFailure = (state) =>
  state.merge({})


/* ------------- Hookup Reducers To Types ------------- */


export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure
})
