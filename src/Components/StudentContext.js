import React, { useState, createContext } from "react";

export const StudentContext = createContext();

export const StudentProvider = (props) => {

    const [students, setStudents] = useState([
        {
            "Id": "1",
            "Name": "Deepak",
            "Age": "22",
            "Course": "BCA",
            "Batch": "2021",
        },

        {
            "Id": "2",
            "Name": "Vinay",
            "Age": "20",
            "Course": "Mining",
            "Batch": "2011"
        },

        {
            "Id": "3",
            "Name": "Shubham",
            "Age": "24",
            "Course": "CSE",
            "Batch": "2021"
        },

        {
            "Id": "4",
            "Name": "Vikash",
            "Age": "19",
            "Course": "CSE",
            "Batch": "2022"
        },

        {
            "Id": "5",
            "Name": "Balram",
            "Age": "30",
            "Course": "ITI",
            "Batch": "2017"
        },

        {
            "Id": "6",
            "Name": "rAM",
            "Age": "19",
            "Course": "CSE",
            "Batch": "2022"
        },

        {
            "Id": "7",
            "Name": "Vikas",
            "Age": "19",
            "Course": "CSE",
            "Batch": "2022"
        },
    ]);

    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    )

}