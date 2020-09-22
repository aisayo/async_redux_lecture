import React from 'react';
import { connect } from 'react-redux'

import {deleteStudent} from '../actions/studentActions'

const StudentCard = ({ student, deleteStudent, handleEdit }) => {

    return (
        <div>
            {student.name} - {student.school} 
            <br/>
            <button onClick={() => handleEdit(student)}> Edit </button>
            <button onClick={() => deleteStudent(student)}>Delete</button>
        </div>
    );
};

export default connect(null, { deleteStudent })(StudentCard);


//when user clicks on edit button
// need to set editMode to true 