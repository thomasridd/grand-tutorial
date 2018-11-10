import providersReducer from './scenes/ProviderListPage/services/ProviderData/reducer'
import { combineReducers, createStore } from 'redux'

export default createStore(
    combineReducers({
        providers: providersReducer
    })
)