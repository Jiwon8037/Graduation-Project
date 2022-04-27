const axios = require('axios')
const express = require('express')
const http=require('http')
const app = express();
const port = 8080
const server=http.createServer(app)
const fs = require('fs')
const dotenv = require('dotenv').config({ path: "./.env"});

const apiUrl= 'https://dapi.kakao.com/v2/local/search/keyword.json?query=';
const apiKey= process.env.REACT_APP_API_REST_KEY;
const apiHeader= {'Authorization':'KakaoAK '+ apiKey};
let kakaoData;
let serchKeyword='';

app.use(express.json());
app.use(express.static('./'));

app.post('/getData',(req,res)=>{
    serchKeyword=String(req.body.keyword);
    console.log(req.body.keyword)
    axios.get(apiUrl+encodeURI(serchKeyword), {headers:apiHeader},)
    .then((response)=>{
            const kakaoData=response.data.documents;
            res.json(kakaoData);
        }
    )
    .catch((error)=>{
        console.log(error)
    })
});

let users=[];
userinfo={
    id:'',
    pw:'',
}
app.post('/api/register',(req,res)=>{
    userinfo={
        id:req.body.id,
        pw:req.body.pw,
    }
    users.push(userinfo);
    console.log(users)
    res.send('true');
});
app.post('/api/login',(req,res)=>{
    let isLogin=false;
    let loginUser;
    for(let i=0; i<users.length; i++){
        if(users[i].id===req.body.id && users[i].pw===req.body.pw){
            isLogin=true;
            loginUser=users[i].id;
            break;
        }
    }
    if(isLogin===true){
        res.json({id:loginUser});
    }
    else res.send('check id or pw !');
});

server.listen(port, ()=> {
    console.log(port+'포트로 서버 실행');
  });