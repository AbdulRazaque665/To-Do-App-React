import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography'
import { Box, Button } from "@mui/material";



const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if(inputData.trim() === "" ) 
     return;
    setTasks([...tasks,{text: inputData, completed: false}])
    setInputData("")
  }

  const removeTask = (index) =>{
    const removeTask = tasks.filter((task, i) => i !== index);
    setTasks(removeTask)
  }

  return (
  <div className="d-flex w-100 flex-column align-items-center justify-content-center bg-image" style={{height:"100vh"}}>
    <div className="border border-1 border-white p-5 img-fluid bg-blur rounded-3">
    <Typography variant="h4" color="white" className="mb-3 text-center fw-bold">To Do App</Typography>
    <Box className="d-flex align-items-center">
    <input className="me-2 py-2 px-3 border-0 focus-ring focus-ring-light rounded-1" type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder="Add new task"/>
    <Button  sx={{cursor:"pointer"}} className="py-2 bg-light text-black" variant="contained" onClick={addTask}>add</Button>    
    </Box>
        <ul className="ms-0 ps-0">
        {tasks.map((task,index) => (
            <li key={index} className="text-white fs-5 list-unstyled d-flex align-items-center justify-content-between my-3">
                {task.text}
                <Button sx={{cursor:"pointer"}} variant="contained"className="bg-light text-black" onClick={()=> removeTask(index)}>Remove</Button>
            </li>
        ))}
    </ul>
    </div>
  </div>
  )
};

export default ToDoApp;
