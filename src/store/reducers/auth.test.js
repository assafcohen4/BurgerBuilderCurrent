import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {

    const reducerInitialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'}

    it('should return the initial state if passed an invalid acitionType', () => {
        expect(reducer(undefined, {})).toEqual(reducerInitialState)
    })

    it('should store the token upon login', () => {
        expect(reducer(reducerInitialState, {
                type: actionTypes.AUTH_SUCCESS,
                idToken: 'some-token',
                userId: 'some-user-id'
            })).toEqual({
                ...reducerInitialState,
                token: 'some-token',
                userId: 'some-user-id'
            })
    })
})