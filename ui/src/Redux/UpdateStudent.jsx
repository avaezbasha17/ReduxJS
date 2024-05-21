import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import { updateStudent } from './features/employee/action'

const UpdateStudent = () => {
    let location = useLocation()
    let data = location.state.data[0]

    let [name, setName] = useState("")
    let [grade, setGrade] = useState("")
    let [medium, setMedium] = useState("")
    let [section, setSection] = useState("")
    let dispatch = useDispatch()
    let navigator = useNavigate()

    useEffect(()=>{
        setName(data.name)
        setGrade(data.grade)
        setMedium(data.medium)
        setSection(data.section)
    },[])

    let submit = () =>{
        dispatch(updateStudent({id:data.id,name,grade,medium,section}))
        .then(payload=>payload.payload.affectedRows==1?navigator("/"):"")
        .catch(error=>console.log(error))
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

export default UpdateStudent