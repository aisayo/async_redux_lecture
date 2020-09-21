const initialState = {
    something: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SOMETHING_ACTION':
            return {}
        default:
            return state;
    }
}