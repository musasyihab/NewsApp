import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  selectSource: ['selectedSourceId'],
  selectNews: ['selectedNewsId'],
  clearState: null
})

export const NewsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedSourceId: null,
  selectedNewsId: null
})

/* ------------- Reducers ------------- */

export const selectSource = (state, { selectedSourceId }) =>
  state.merge({ selectedSourceId })

export const selectNews = (state, { selectedNewsId }) =>
  state.merge({ selectedNewsId })

export const clearState = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_SOURCE]: selectSource,
  [Types.SELECT_NEWS]: selectNews,
  [Types.CLEAR_STATE]: clearState
})
