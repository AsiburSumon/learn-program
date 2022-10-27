import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const RightSideContainer = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <h3>Courses: {courses.length}</h3>
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </p> )
            }
        </div>
    );
};

export default RightSideContainer;