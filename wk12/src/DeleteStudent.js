import React from 'react';
import axios from 'axios';


class DeleteStudent extends React.Component {
    state = {  
        id: '',
    }
handleChange = event =>{ 
    this.setState({id: event.target.value})
};

handleSubmit = event =>{
    event.preventdefault();

    const user = {id: this.state.id};

    axios.delete( `https://jsonplaceholder.typicode.com/${this.state.id}`,{user}).then(res=>{
          
        console.log(res.data);
    })
 }

    render() { 
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Student ID:
                        <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}
 
export default DeleteStudent;