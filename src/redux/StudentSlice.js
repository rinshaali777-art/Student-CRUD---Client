import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { addStudentApi, deleteStudentApi, editStudentApi, getSingleStudentApi, getStudentsApi } from '../apicalls/allAPI'



export const fetchStudents = createAsyncThunk(
    "students/fetchStudents", async ()=>{
         const response= await getStudentsApi()
         return response.data
    }
)

export const addStudents = createAsyncThunk(
    "students/addStudents", async (student)=>{
         const response= await addStudentApi(student)
         return response.data
    }
)

export const editStudents = createAsyncThunk(
    "students/editStudents", async (student)=>{
         const response= await editStudentApi(student.id,student)
         return response.data
    }
)

export const getStudents = createAsyncThunk(
    "students/getStudents", async (id)=>{
         const response= await getSingleStudentApi(id)
         return response.data
    }
)

export const deleteStudents = createAsyncThunk(
    "students/deleteStudents", async (id)=>{
         await deleteStudentApi(id)
         return id
    }
)


export const studentSlice = createSlice({
    name:"students",

    initialState:{
        students:[],
        loading:false,
        error:null
    },

    reducers:{
        

    },

    extraReducers:(builder)=>{
        
        builder.addCase(fetchStudents.pending,
            (state,action)=>{
                state.loading=true
            }
        )

        builder.addCase(fetchStudents.fulfilled,
            (state,action)=>{
                state.loading=false,
                state.students=action.payload
            }
        )

         builder.addCase(fetchStudents.rejected,
            (state,action)=>{
                state.loading=false,
                state.students=[]
                state.error="failed to fetch API"
            }
        )

        builder.addCase(addStudents.fulfilled,
            (state,action)=> {
                state.students.push(action.payload)
            }
        )

        builder.addCase(editStudents.fulfilled,
            (state,action)=>{

               const index = state.students.findIndex(
                 (student) => student.id == action.payload.id)

                if(index!== -1){
                    state.students[index]=action.payload
                }
            }
        )

        builder.addCase(deleteStudents.fulfilled,
            (state,action)=>{

                state.students= state.students.filter((student)=>{
                    student.id!==action.payload
                })
            }
        )


    }
})

export default studentSlice.reducer
