const INITIAL_STATE = {
  news:[],
  index: ''  
};
 
export default function listNews(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LIST_REQUEST_SUCCESS":
      return{
        ...state,
        news: action.payload
      };

    case 'LIST_DELETE':        
      return {
        ...state,
        news: state.news.filter(item => item.id !== action.payload.index)
      };    
              
    default:
      return state;
  }
}
 

