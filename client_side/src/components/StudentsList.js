import React from 'react';
import { connect } from 'react-redux'

import StudentCard from './StudentCard'

const StudentsList = ({ students, handleEdit}) => {

    return (
        <div>
            <ul>
                {students.map(student => <StudentCard key={student.id} student={student} handleEdit={handleEdit}/>)}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(StudentsList);