const initState = {
    loading: false,
    err:null,
    myList:[],
    recommendation:[],
    list:[],
}

const listReducer = (state = initState, action) => {
    switch(action.type){
        case "REMOVE_FROM_LIST":
            let temp = {...state};
            temp[action.select]=temp[action.select].filter(val=>val.id!==action.id);
            return temp;
        case "ADD_FROM_LIST":
            let temp1 = {...state};
            temp1[action.select]=temp1[action.select]
                                    .filter(val=>val.id!==action.id);
            temp1[action.select].push(action.movie)
            return temp1;
        case "LIST_FETCH_REQUEST":
            return {
                ...state,
                loading:true,
                err:null,
            };
        case "LIST_FETCH_SUCCESS":
            return {
                ...state,
                loading:false,
                err:null,
                myList:[...action.myList],
                recommendation:[...action.recommendation],
                list:[...action.myList,...action.recommendation],
            };
        case "LIST_FETCH_FAIL":
            return {
                ...state,
                loading:false,
                err:action.err,
            };
        
        default:
            return state;
    }
}

export default listReducer;
