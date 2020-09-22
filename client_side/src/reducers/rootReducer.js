const initialState = {
    students: []
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_STUDENTS':
            return {...state, students: action.payload}
        case 'CREATE_STUDENT':
            return {...state, students: [...state.students, action.payload]}
        case 'DELETE_STUDENT':
            return {students: state.students.filter(student => student.id !== action.payload)}
        default:
            return state;
    }
}