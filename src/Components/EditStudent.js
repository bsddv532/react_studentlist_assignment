import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Style.css';
import { StudentContext } from './StudentContext';
import { useContext } from 'react';
import {Link, useParams} from 'react-router-dom'; 
import { useState, useEffect } from 'react';


function EditStudent() {

    const [student,setStudent] = useContext(StudentContext);
    const {id}=useParams();
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [batch, setBatch] = React.useState('');

    useEffect(()=>{
        student.forEach(element => {
            if(element.Id===id){
                setName(element.Name);
                setAge(element.Age);
                setCourse(element.Course);
                setBatch(element.Batch);
            }
        })
    },[id,student])


    const submit = ()=>{
        setStudent((previousV)=>previousV.map((data)=>data.Id===id?{
            Id: id,
            Name: name,
            Age: age,
            Batch: batch,
            Course : course
        }:data));
    }

    return (
        <>
        <Box
            className='container'
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-name"
                label="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
            />

            <TextField
                id="outlined-name"
                label="Age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
            />

            <TextField
                id="outlined-name"
                label="Course"
                value={course}
                onChange={(e)=>setCourse(e.target.value)}
            />

            <TextField
                id="outlined-name"
                label="Batch"
                value={batch}
                onChange={(e)=>setBatch(e.target.value)}
            />
           
        </Box>
         <button className='btn'><Link to = "/student"> CANCEL </Link></button>
         <button className='btn' onClick={submit}><Link to = "/student"> SUBMIT </Link></button>
         </>
    );
}

export default EditStudent;