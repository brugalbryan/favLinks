import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = { favLinks:[] }
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       var remove = this.state.favLinks
    //    var start = remove.indexOf(index)
       remove.splice(index,1)
       this.setState({favLinks: remove})
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       let favLinks = this.state.favLinks
       favLinks.push(favLink)
       this.setState({favLinks: favLinks})
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table linkData={this.state.favLinks} removeLink={this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form handleSubmit = {this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;