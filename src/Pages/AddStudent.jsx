import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudents } from "../redux/StudentSlice";


const AddStudent = () => {

    const [student,setStudent] =useState({
        name:"",
        course:"",
        email:""
    })

    

    const handleChange=(e)=>{
        const{name,value}=e.target

        setStudent({
            ...student,
            [name]:value
        })
    }

    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const handleSubmit= (e)=>{
        e.preventDefault()

        try{
        dispatch(addStudents(student))
        navigate("/")
        }
        catch(error){
            console.log(error);
            
        }
    }

  return (
    <div className="form-page">

      <div className="form-container">

        <div className="form-header">
          <h1>Add Student</h1>
          <p>Create a new student record</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter student name"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              placeholder="Enter course"
              name="course"
              value={student.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              name="email"
              value={student.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="button" className="cancel-btn" onClick={()=> navigate('/')}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Add Student
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default AddStudent;