import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalForm extends Component {

    state = {
        newAnimal: {
            species_name: '',
            class_name: ''
        }
    }

    onChange = (propertyName, event) => {
        this.setState({
            newAnimal: {
                ...this.state.newAnimal,
                [propertyName]: event.target.value
            }
        });
    }

    onSubmit = () => {
        this.props.dispatch({
            type: 'CREATE_ANIMAL',
            payload: this.state.newAnimal
        });

        this.setState({
            newAnimal: {
                species_name: '',
                class_name: ''
            }
        });
    }

    render() {
        return (
            <div>
                <input 
                    placeholder='Species Name' 
                    type='text'
                    onChange={(event) => this.onChange('species_name', event)}
                />
                <select 
                    name='class' 
                    placeholder='Class Name'
                    onChange={(event) => this.onChange('class_name', event)}
                >
                    <option value='Mammal'>Mammal</option>
                    <option value='Bird'>Bird</option>
                    <option value='Fish'>Fish</option>
                    <option value='Reptile'>Reptile</option>
                    <option value='Amphibian'>Amphibian</option>

                </select>
                <button onClick={this.onSubmit}>Add Animal</button>
            </div>
        );
    }
}
export default connect()(AnimalForm);