import React from 'react';
import Courses from './courses';

export default function Student (props) {
    const courses = Courses;
    return (
        <div>
            <p>
    Student <b>{props.name}</b> and <b>{props.number} is enrolled in <b>{props.enrolled}</b></b>
            </p>
        </div>
    )
}
