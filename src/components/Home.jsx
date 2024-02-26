import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    var [user,setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts") 
        .then((response) => {
            console.log(response.data);
            setUser(response.data);
        })
    })
  return (
    <div> <br /><br /><br />
      <h1>Dashboard</h1>
        <TableContainer> 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontWeight:'bold'}}>Id</TableCell>
                        <TableCell style={{color:'red',fontWeight:'bold'}}>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val,i) =>{
                        return(
                            <TableRow>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                            </TableRow>
                        )
                    } )}

                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
};

export default Home;