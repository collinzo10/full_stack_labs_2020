import React from 'react';
import axios from 'axios';


class AddStudent extends React.Component {
    state = {  
        name: '',
    }
handleChange = event =>{ 
    this.setState({name: event.target.value})
};

handleSubmit = event =>{
    event.preventdefault();

    const user = {name: this.state.name};

    axios.post( `https://jsonplaceholder.typicode.com/users`,{user})
    .then(res=>{
        console.log(res);    
        console.log(res.data)
    })
    .catch(err => console.log(err.message));
 }

    render() { 
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Student Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
 
export default AddStudent;