import axiosinstance from "./axiosinstance";

const AapiService= async(httpMethod,url,reqBody)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody
    }

 try{
     const response= await  axiosinstance(reqConfig)
     return response
 }
 catch(err){
    throw err
 }
}

export default AapiService