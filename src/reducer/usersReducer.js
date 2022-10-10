import{v4 as uuid} from "uuid"
 const initialState = {
    user:[
        // {
        //   name:'Winifred',
        //   phonenumber:'0000 000 000',
        //   location: 'Hamburg',
        //   id: uuid()
        // },
        // {
        //   name:'Kelly',
        //   phonenumber:'0000 000 000',
        //   location: 'Hamburg',
        //   id:uuid()
        // }
      ]
    }
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {...state ,user: action.payload}
      
    case "DELETE_USER" :
      const filteredUser= state.user.filter(user => user.id !== action.payload)
      return{...state, user: filteredUser}
  
    case "EDIT_USER" :
      const updatedUser = state.user.map((user)=> {
          if(user.id === action.payload.data.id) {
            return action.payload.data
          }
          else {
            return user}
          
      })

      return {...state,user:updatedUser}


    default: 
      return state;
  }
   }


export default UsersReducer;