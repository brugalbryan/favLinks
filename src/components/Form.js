import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.State = {
           name: '',
           URL: '',
       }

       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
            
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({ [event.target.name]: event.target.value});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       const submission = {
           name: this.state.name,
           URL: this.state.URL
       }

       this.props.handleSubmit(submission)

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            <label>
                Name:
                <input 
                type = 'text' 
                name = 'name' 
                placeholder = "Add a name"
                onChange = {this.handleChange}/>
            </label>

            <label>
                URL:
                <input
                name = "URL"
                type = 'url'
                placeholder = 'Add a URL'
                onChange = {this.handleChange}/>
                <button onClick={this.onFormSubmit}> Submit </button>
            </label>
            </form>
        )
    
    }
}

export default Form;
