import React from 'react';


const  Courses = (props) => {
    let numbers = [1,2,3]
    return ( 
        <p>
            {props.numbers[0]}
            {props.numbers[1]}
            {props.numbers[2]}
        </p>
        
     );
}
 
export default Courses;
