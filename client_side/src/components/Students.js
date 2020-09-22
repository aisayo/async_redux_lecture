import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchStudents } from '../actions/studentActions'
import CreateStudentForm from './CreateStudentForm'
import EditStudentForm from './EditStudentForm'
import StudentsList from './StudentsList'


class Students extends Component {

    state = { editId: false }

    componentDidMount() {
        this.props.fetchStudents()
    }

    handleEdit = (student) => {
        this.setState({
            editId: student.id
        })
    }

    render() {
        
        return (
            <div>
                {this.state.editId ? 
                    <EditStudentForm /> : 
                    <CreateStudentForm editId={this.state.editId} turnEditOff={this.turnEditOff}/> 
                }
                <StudentsList handleEdit={this.handleEdit}/>
            </div>
        );
    }
}

export default connect(null, { fetchStudents })(Students);
