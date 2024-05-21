import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, fetchStudent, findByIdStudent, findStudent, findStudentName } from './features/employee/action'
import AddStudent from './AddStudent'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update'
import { useNavigate } from 'react-router-dom'

const Redux = () => {
  let [data, setData] = useState([])
  let [noData, setNoData] = useState("")
  let [name, setName] = useState("")
  let navigate = useNavigate()
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudent())
      .then(payload => setData(payload.payload))
      .catch(error => console.log(error))

    dispatch(findStudentName({ name }))
      .then(payload => setData(payload.payload))
      .catch(error => console.log(error))
  }, [dispatch, name])

  let [orderBy, setOrderBy] = useState('');
  let [order, setOrder] = useState('asc');
  let [page, setPage] = useState(0);
  let [rowsPerPage, setRowsPerPage] = useState(10);

  let handleSort = (property) => {
    console.log(property, order, orderBy);
    console.log(orderBy === property);
    let isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setData((prevData) => [...prevData].sort((a, b) => {
      if (isAsc) {
        return b[property] < a[property] ? -1 : 1;
      } else {
        return a[property] < b[property] ? -1 : 1;
      }
    })); //prevData is shallow copy of the pervious state array
  };

  let handleChangePage = (event, newPage) => {
    console.log(newPage, page, rowsPerPage);
    setPage(newPage);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ fontSize: "50px" }}>STUDENT DETAILS</h1>
        <div>
          <input type="text" placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)} style={{ width: "400px", height: "25px", borderRadius: "24px", padding: "4px", border: "1px solid black" }} />
        </div>
        <div>
          <AddStudent></AddStudent>
        </div>
        <div>
          Number of Student
          {}
        </div>
      </div>
      <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
        <Table sx={{ width: 1200 }} aria-label="simple table">
          <TableHead sx={{ background: "#E5FD86" }}>
            <TableRow>
              {/* <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  Id
                </TableSortLabel>
              </TableCell> */}
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 'grade'}
                  direction={orderBy === 'grade' ? order : 'asc'}
                  onClick={() => handleSort('grade')}
                >
                  Grade
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 'medium'}
                  direction={orderBy === 'medium' ? order : 'asc'}
                  onClick={() => handleSort('medium')}
                >
                  Medium
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 'section'}
                  direction={orderBy === 'section' ? order : 'asc'}
                  onClick={() => handleSort('section')}
                >
                  Section
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                Update
              </TableCell>
              <TableCell align='center'>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noData}
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((x) => {

              let bg = x.id % 2 === 0 ? "#B1C4FB" : "";
              let updateStudent = () => {
                dispatch(findByIdStudent({ id: x.id }))
                  .then(res => navigate("/updateStudent", { state: { data: res.payload } }))
                  .catch(err => console.log(err))
              }
              let deleteStudents = () => {
                dispatch(deleteStudent({ id: x.id }))
                  .then(res => res.payload.affectedRows==1?setData(data.filter(cid=>cid.id!=x.id)):"")
                  .catch(error => console.log(error))
              }
              return (
                <TableRow key={x.id} sx={{ background: bg }}>
                  {/* <TableCell align='center'>{x.id}</TableCell> */}
                  <TableCell align='center'>{x.name}</TableCell>
                  <TableCell align='center'>{x.grade}</TableCell>
                  <TableCell align='center'>{x.medium}</TableCell>
                  <TableCell align='center'>{x.section}</TableCell>
                  <TableCell align='center'>
                    <IconButton color="primary" aria-label="update" onClick={updateStudent}>
                      <UpdateIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='center'>
                    <IconButton color="error" aria-label="delete" onClick={deleteStudents}>
                      <DeleteIcon />
                    </IconButton></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default Redux