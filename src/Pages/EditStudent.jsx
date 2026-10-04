import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editStudents, getStudents } from "../redux/StudentSlice";


const EditStudent = () => {

    const {id} = useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [student,setStudent]=useState({
        id:id,
        name:"",
        course:"",
        email:" "
    })

    useEffect(()=>{
        const loadStudent = async () =>{
            try{
                const data = await dispatch(getStudents(id)).unwrap()
                setStudent(data)
            }
            catch(error)
            {
                console.log(error);
            }
        }
        loadStudent()
    },[dispatch,id])

    const handleChange = (e)=>{
        const {name,value}=e.target 

        setStudent({
            ...student,
            [name]:value
        })
    }

    

    const handleSubmit= async (e)=>{
        e.preventDefault()

        try{
           const updateStudent= await  dispatch(editStudents(student)).unwrap()
           alert("student details updated successfully")
            navigate(`/view-student/${updateStudent.id}`)
        }
        catch(error){
            console.log(error);
            
        }
    }

  return (
    <div className="edit-page">

      <div className="edit-container">

        <div className="edit-header">
          <h1>Edit Student</h1>
          <p>Update student information</p>
        </div>


        <form onSubmit={handleSubmit}>

          <div className="edit-group">
            <label>Student Name</label>

            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
              
            />
          </div>


          <div className="edit-group">
            <label>Course</label>

            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Enter Course"
              required
            />
          </div>


          <div className="edit-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>


          <div className="edit-buttons">

            <button
              type="button"
              className="edit-cancel-btn" 
              onClick={()=>navigate(`/view-student/${student.id}`)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="update-btn"
            >
              Update Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditStudent;