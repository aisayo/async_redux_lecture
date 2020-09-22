import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchStudents } from '../actions/studentActions'
import StudentForm from './StudentForm'
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
                <StudentForm editId={this.state.editId}/>
                <StudentsList handleEdit={this.handleEdit}/>
            </div>
        );
    }
}

export default connect(null, { fetchStudents })(Students);
