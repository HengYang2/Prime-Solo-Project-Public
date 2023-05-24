//Dummy data for testing:
const clientA = {
    id: 0,
    client_initials: 'AA',
    start_date:'2002-12-12',
    end_date:'',
    is_still_subscribed: true,
    client_note: 'This client is nice.',
    card_color:'blue',
    is_card_disabled: false
};

const clientB = {
    id: 1,
    client_initials: 'BB',
    start_date:'2002-12-12',
    end_date:'2004-07-13',
    is_still_subscribed: false,
    client_note: 'This client has a cute dog.',
    card_color:'red',
    is_card_disabled: false
};

const clientCardsReducer = (state = [clientA, clientB], action) => {
    // switch (action.type) {
    //   case 'SET_USER':
    //     return action.payload;
    //   default:
    //     return state;
    // }
    return state;
  };
  
  export default clientCardsReducer;
  