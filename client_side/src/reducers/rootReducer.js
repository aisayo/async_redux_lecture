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
        case 'EDIT_STUDENT':
            const students = state.students.map(student => student.id !== action.payload.id ? student : action.payload )
            return { students }    
        default:
            return state;
    }
}