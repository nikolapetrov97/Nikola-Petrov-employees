import { compose, applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

let customCompose

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  customCompose = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'employeeexample' })
  )
} else {
  customCompose = compose(applyMiddleware(thunk))
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, customCompose)

const persistor = persistStore(store)

export { store, persistor }
