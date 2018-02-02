export default function (state={},action) {
    switch(action.type){
        case 'FETCH_ARTISTS':
            return {...state, artists:action.payload, error:''};
            break;
        case 'ERROR_FETCHING_ARTISTS':
            return {...state, error:action.payload, artists:''};
            break
    }
    return state
}