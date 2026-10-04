import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteStudents, getStudents } from "../redux/StudentSlice";


const StudentDetails = () => {

    const {id} = useParams()

    const dispatch= useDispatch()
    const navigate= useNavigate()

    const [student,setStudent]=useState(null)

    useEffect(()=>{
      const loadStudent = async()=>{
        try{
          const data = await dispatch(getStudents(id)).unwrap()
          setStudent(data)
        }
        catch(error){
          console.log(error);
          
        }
      }
      loadStudent()
    },[dispatch,id])

    if(!student){
      return <h2>Loading....</h2>
    }

    const handleDelete = async ()=>{
      const confirmDelete = window.confirm("Are you sure you want to delete?")
      if(!confirmDelete)
        return

      try{
        await dispatch(deleteStudents(id)).unwrap()
        navigate('/')
      }
      catch{
        console.log(error);
      }
    }

  return (
    <div className="details-page">

      <div className="details-container">

        <div className="details-top">
          <div className="large-avatar">
            {student.name.charAt(0)}
          </div>

          <div>
            <h1>{student.name}</h1>
            <p>Student Details</p>
          </div>
        </div>


        <div className="details-body">

          <div className="detail-item">
            <span>Student Name</span>
            <strong>{student.name}</strong>
          </div>

          <div className="detail-item">
            <span>Course</span>
            <strong>{student.course}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>

          <div className="detail-item">
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

        </div>


        <div className="details-actions">

          <button className="back-btn" onClick={()=> navigate('/')}>
            Back
          </button>

          <button className="details-edit-btn" onClick={()=> navigate(`/edit-student/${student.id}`)}>
            Edit Student
          </button>

          <button className="details-delete-btn" onClick={handleDelete}>
            Delete Student
          </button>

        </div>

      </div>

    </div>
  );
};

export default StudentDetails;