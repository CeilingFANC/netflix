import Axios from "axios";



const url = 'https://5d44997dd823c3001477194d.mockapi.io/api/v1/lists';


function requestStart(){
    return {
        type:'LIST_FETCH_REQUEST',
    };
}

function requestSuccess(response){
    return {
        type:'LIST_FETCH_SUCCESS',
        myList:response.mylist,
        recommendation:response.recommendations,
    };
}

function requestFail(response){
    return {
        type:'LIST_FETCH_FAIL',
        err: response.err,
    };
}

export function remove(select,movie){
    return{
        type:'REMOVE_FROM_LIST',
        select:select,
        id:movie.id,
    }
}
export function add(select,movie){
    return{
        type:'ADD_FROM_LIST',
        select:select,
        movie:movie,
        id:movie.id,
    }
}



export function getData(){
    return (dispatch,getState) =>{
        dispatch(requestStart());

        Axios
            .get(url)
            .then(response=>{
                dispatch(requestSuccess(response.data));
            })
            .catch(err=>{
                dispatch(requestFail(err));
            });
    }
}

