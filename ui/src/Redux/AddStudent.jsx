import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from './features/employee/action'
import { Box, Button, TextField } from '@mui/material'

const AddStudent = () => {
    let [name, setName] = useState("")
    let [grade, setGrade] = useState("")
    let [medium, setMedium] = useState("")
    let [section, setSection] = useState("")
    let dispatch = useDispatch()

    let submit = () => {
        dispatch(addStudent({ name, grade, medium, section }))
            .then(payload => console.log(payload))
            .catch(error => console.log(error))

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px",marginBottom:"40px"}}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
            >
                <TextField
                    label="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Grade"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Medium"
                    value={medium}
                    onChange={e => setMedium(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Section"
                    value={section}
                    onChange={e => setSection(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={submit} style={{width:"300px"}}>
                    Submit
                </Button>
            </Box>
        </div>
    )
}

export default AddStudent