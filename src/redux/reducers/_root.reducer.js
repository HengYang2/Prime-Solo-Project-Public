import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clientCardsReducer from './clientCards.reducer';

//Import selectedClientCard:
import selectedClientCardReducer from './selectedClientCard.reducer';

//Import modal reducers to tell if certain modals are opened or closed:
import isOpenMainReducer from './openOrClosedModalReducers/isOpenMain.reducer';

//Import reducers for conditionally rendered components:
import isEditingClientCardReducer from './conditionalRenderReducers/isEditingClientCard.reducer';
import conditionalModalRenderReducer_Right from './conditionalRenderReducers/conditionalModalRender_Right.reducer';
import conditionalModalRenderReducer_Left from './conditionalRenderReducers/conditionalModalRender_Left.reducer';


//Import reducer for editing client card:
import editClientInitialsReducer from './editClientCardReducers/editClientInitials.reducer';
import editStartDateReducer from './editClientCardReducers/editStartDate.reducer';
import editEndDateReducer from './editClientCardReducers/editEndDate.reducer';
import editClientNoteReducer from './editClientCardReducers/editClientNote.reducer';
import editIsStillSubscribedReducer from './editClientCardReducers/editIsStillSubscribed.reducer';
import editCardColorReducer from './editClientCardReducers/editCardColor.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clientCardsReducer, // Contains an array of client card objects
  isOpenMainReducer,
  isEditingClientCardReducer,
  conditionalModalRenderReducer_Right,
  conditionalModalRenderReducer_Left,
  selectedClientCardReducer,
  editClientInitialsReducer,
  editStartDateReducer,
  editEndDateReducer,
  editClientNoteReducer,
  editIsStillSubscribedReducer,
  editCardColorReducer
});

export default rootReducer;
