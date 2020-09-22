import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editStudent } from '../actions/studentActions'

class EditStudentForm extends Component {

    state = {
        id: '',
        name: '',
        school: '',
        city: '',
        state: ''
    }

    componentDidMount(){
        this.findStudent()
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    findStudent = () => {
        const { students, studentId} = this.props
        const student = students.find(student => student.id === studentId)
        this.setState({
            id: student.id,
            name: student.name,
            school: student.school,
            city: student.city,
            state: student.state
        })
    }

    update = e => {
        e.preventDefault()
        this.props.editStudent(this.state)
        this.props.setEditId()
    }


    render() {
        return (
            <>
            Edit Student Form
            <form onSubmit={this.update}>

                <label>Name</label>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    name='name'
                />

                <br />
                <br />

                <label>School</label>
                <input 
                    type='text' 
                    value={this.state.school} 
                    onChange={this.handleChange} 
                    name='school'
                />

                <br />
                <br />

                <label>City</label>
                <input 
                    type='text' 
                    value={this.state.city} 
                    onChange={this.handleChange} 
                    name='city'
                />

                <br />
                <br />

              <label>state</label>
                <input 
                    type='text' 
                    value={this.state.state} 
                    onChange={this.handleChange} 
                    name='state'
                />

                <br />
                <br />

                <input type='submit' value='Edit Student' />  

            </form>

            </>
        );
    }
}

const mapStateToProps = state => {
    return { students: state.students }
}

export default connect(mapStateToProps, { editStudent })(EditStudentForm);