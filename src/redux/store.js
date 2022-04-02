// Store ylom les states mta3 l'application lkool, genre andi mission + mecanicien + notifications,
// kol chey yethkhabba hneye, hachti b ay haja njibha minna, hachti nmodifie min hneye...
// ay haja na3malha yilzim net3ada b les actions

import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import missions from "./reducers/missionReducer";
import ui from "./reducers/uiReducer";
import notifications from "./reducers/notificationsReducer";
import amendes from './reducers/amendeReducer';
import users from './reducers/userReducer';
const reducer = combineReducers({
  missions,
  ui,
  notifications,
  amendes,
  users
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
