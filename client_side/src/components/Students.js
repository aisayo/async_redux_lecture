import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchStudents } from '../actions/studentActions'
import CreateStudentForm from './CreateStudentForm'
import EditStudentForm from './EditStudentForm'
import StudentsList from './StudentsList'


class Students extends Component {

    state = { studentId: false }

    componentDidMount() {
        this.props.fetchStudents()
    }

    handleEdit = (student) => {
        this.setState({
            studentId: student.id
        })
    }

    resetStudentId = () => {
        this.setState({ studentId: false})
    }

    render() {
        
        return (
            <div>
                {this.state.studentId ? 
                    <EditStudentForm studentId={this.state.studentId} resetStudentId={this.resetStudentId}/> : 
                    <CreateStudentForm /> 
                }
                <StudentsList handleEdit={this.handleEdit}/>
            </div>
        );
    }
}

export default connect(null, { fetchStudents })(Students);
