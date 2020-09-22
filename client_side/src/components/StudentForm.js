import React, { Component } from 'react';
import { connect } from 'react-redux'

import {createStudent} from '../actions/studentActions'

class StudentForm extends Component {

    state = {
        name: '',
        school: '',
        city: '',
        state: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createStudent(this.state)
    }

    editStudent = () => {
        const { students, editId } = this.props
        const student = students.find(student => student.id === editId)
        this.setState({
            name: student.name,
            school: student.school,
            city: student.city,
            state: student.state
        })

    }

    render() {
    console.log(this.props)
        return (
            <>
            <form onSubmit={this.handleSubmit}>

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

                <input type='submit' value='Create Student' />  

            </form>

            </>
        );
    }
}

const mapStateToProps = state => {
    return { students: state.students }
}

export default connect(mapStateToProps, { createStudent })(StudentForm);