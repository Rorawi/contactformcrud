
 const initialState = {
    user:[
        {
          name:'Winifred',
          phonenumber:'0000 000 000',
          location: 'Hamburg',
          id:'ndjsbqdqbdhq'
        },
        {
          name:'Kelly',
          phonenumber:'0000 000 000',
          location: 'Hamburg',
          id:'nsbwqbdqnb'
        }
      ]
    }
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state ,user:[...state.user,action.payload]}
      
    
  
    default: 
      return state;
  }
   }


export default UsersReducer;