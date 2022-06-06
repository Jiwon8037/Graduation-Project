import axios from "axios"

export  const getPlanData=(id)=>{
    return axios.get('/api/myPlan',{params:{id},withCredentials:true});
}