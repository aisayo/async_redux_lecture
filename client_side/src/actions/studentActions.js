export const fetchStudents = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/students')
        .then(resp => resp.json())
        .then(students => dispatch({ type: 'FETCH_STUDENTS', payload: students}))
       
    }
}

export const createStudent = student => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/students', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(student => dispatch({ type: 'CREATE_STUDENT', payload: student }))
    }
}

export const editStudent = student => {
    return dispatch => {
        dispatch({type: 'EDIT_STUDENT', payload: student})
        fetch(`http://127.0.0.1:3000/students/${student.id}`, {
            method: 'PATCH',
            body: JSON.stringify(student),
            headers: { 'Content-Type': 'application/json'}
        })
        
    }
}

export const deleteStudent = student => {
    return dispatch => {
        dispatch({type: 'DELETE_STUDENT', payload: student.id})
        fetch(`http://127.0.0.1:3000/students/${student.id}`, {
            method: 'DELETE',
            body: JSON.stringify(student),
            headers: { 'Content-Type': 'application/json'}
        })
        
    }
}

