import React, { Component } from 'react';
import { connect } from 'react-redux'

import {createStudent} from '../actions/studentActions'

class CreateStudentForm extends Component {

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

    resetForm = () => {
        this.setState({
            name: '',
            school: '',
            city: '',
            state: ''
        })
    }

    render() {
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

export default connect(null, { createStudent })(CreateStudentForm);