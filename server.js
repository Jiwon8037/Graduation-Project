const axios = require('axios')
const express = require('express')
const http=require('http')
const app = express();
const port = 8080
const server=http.createServer(app)
const fs = require('fs')
const dotenv = require('dotenv').config({ path: "./.env"});
const url=require('url');

const apiUrl= 'https://dapi.kakao.com/v2/local/search/keyword.json?query=';
const apiKey= process.env.REACT_APP_API_REST_KEY;
const apiHeader= {'Authorization':'KakaoAK '+ apiKey};
let kakaoData;
let serchKeyword='';

app.use(express.json());
app.use(express.static('./'));
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/build/index.html');
})
/*
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
});*/

app.post('/getData',(req,res)=>{
    serchKeyword=String(req.body.keyword);
    console.log(req.body.keyword)
    res.json([
        {
            address_name: '경기 안산시 단원구 대부동동',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 섬 > 섬(내륙)',
            distance: '',
            id: '11004596',
            phone: '',
            place_name: '대부도',
            place_url: 'http://place.map.kakao.com/11004596',
            road_address_name: '',
            x: '126.596768094707',
            y: '37.246138589609',
            checked:false,
          },
          {
            address_name: '경기 안산시 단원구 대부북동',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 도보여행 > 대부해솔길',
            distance: '',
            id: '18741257',
            phone: '',
            place_name: '대부해솔길 1코스',
            place_url: 'http://place.map.kakao.com/18741257',
            road_address_name: '',
            x: '126.55143895278526',
            y: '37.27999142327456',
            checked:false,
          },
          {
            address_name: '경기 안산시 단원구 대부북동',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 해수욕장,해변',
            distance: '',
            id: '19400370',
            phone: '',
            place_name: '방아머리해수욕장',
            place_url: 'http://place.map.kakao.com/19400370',
            road_address_name: '',
            x: '126.576767387831',
            y: '37.2891526817361',
            checked:false,
          },
          {
            address_name: '경기 안산시 단원구 선감동 8-5',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 수목원,식물원',
            distance: '',
            id: '18538964',
            phone: '031-8008-6795',
            place_name: '바다향기수목원',
            place_url: 'http://place.map.kakao.com/18538964',
            road_address_name: '경기 안산시 단원구 대부황금로 399',
            x: '126.64652831596153',
            y: '37.22502218198028',
            checked:false,
          },
          {
            address_name: '경기 안산시 단원구 초지동 667',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 유원지',
            distance: '',
            id: '8691040',
            phone: '031-487-7780',
            place_name: '화랑유원지',
            place_url: 'http://place.map.kakao.com/8691040',
            road_address_name: '경기 안산시 단원구 동산로 268',
            x: '126.814341858481',
            y: '37.3265944170577',
            checked:false,
          },
          {
            address_name: '경기 안산시 단원구 대부동동 2098-1',
            category_group_code: 'AT4',
            category_group_name: '관광명소',
            category_name: '여행 > 관광,명소 > 방조제',
            distance: '',
            id: '26957378',
            phone: '',
            place_name: '시화방조제',
            place_url: 'http://place.map.kakao.com/26957378',
            road_address_name: '',
            x: '126.606330737015',
            y: '37.3092720051821',
            checked:false,
          },
    ])
});

let users=[{ id: '11', pw: '22' }];
let userinfo={
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
    res.json({success:'success'});
    //res.json({success:'usedId'});
    //res.json({success:'emailErr'});
});
app.post('/api/register/email',(req,res)=>{
    console.log(req.body)
    res.json({success:true});
    //res.json({success:false});
});
app.post('/api/login',(req,res)=>{
    //console.log(req.body)
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
        res.json({loginSuccess:true,id:loginUser});
    }
    else {
        res.json({loginSuccess:false});
    }
});
app.post('/api/logout',(req,res)=>{
    res.json({logoutSuccess:true});
})

let userPlaceList;
app.post('/api/makeSchedule',(req,res)=>{
    userPlaceList=req.body;
    console.log(userPlaceList);
    //res.json({complete:true});
});

app.get('/api/mySchedule',(req,res)=>{
    if(userPlaceList!=null){
        res.json(userPlaceList);
    }
})

app.get('/api/myPageList',(req,res)=>{//마이페이지 플랜 리스트: userId 로 리스트 반환
    const queryData=url.parse(req.url,true).query;
    res.json([
        {
            userId:queryData.userId,
            start_date:'2022-05-05',
            end_date:'2022-05-06',
            plan_id:'1234',
            title:'hello plans1',
            place_num:2,
            liked:30,
        },
        {
            userId:queryData.userId,
            start_date:'2022-06-05',
            end_date:'2022-06-06',
            plan_id:'2345',
            title:'hello plans2',
            place_num:2,
            liked:25,
        },
    ]);
})

app.get('/api/myPlan',(req,res)=>{//상세플랜 : planId 로 검색 후 반환
    res.json({
        userId:'',
        start_date:'2022-05-05',
        end_date:'2022-05-06',
        plan_id:'1234',
        title:'hello plans1',
        place_num:2,
        liked:30,
        places:[
            {
                id: '18741257',
                place_name: '대부해솔길 1코스',
                x: '126.55143895278526',
                y: '37.27999142327456',
                checked:true,
                day:'2'
            },
            {
                id: '11004596',
                place_name: '대부도',
                road_address_name: '',
                x: '126.596768094707',
                y: '37.246138589609',
                checked:true,
                day:'1'
            },    
              {
                id: '19400370',
                place_name: '방아머리해수욕장',
                x: '126.576767387831',
                y: '37.2891526817361',
                checked:true,
              },
              {
                id: '26957378',
                place_name: '시화방조제',
                x: '126.606330737015',
                y: '37.3092720051821',
                checked:true,
              },
              {
                id: '18538964',
                place_name: '바다향기수목원',
                x: '126.64652831596153',
                y: '37.22502218198028',
                checked:true,
              },
        ]}
    );
})

app.get('/api/publicPageList',(req,res)=>{//공유게시판 플랜 리스트
    const queryData=url.parse(req.url,true).query;
    res.json([
        {
            userId:'',
            start_date:'2222-05-05',
            end_date:'2222-05-06',
            plan_id:'9876',
            title:'public plan 1',
            place_num:2,
            liked:30,
        },
        {
            userId:'',
            start_date:'2222-08-05',
            end_date:'2222-10-06',
            plan_id:'9876',
            title:'public plan 2',
            place_num:2,
            liked:25,
        },
    ]);
})
app.get('/api/publicPlan',(req,res)=>{//상세플랜 : planId 로 검색 후 반환
    res.json({
        userId:'',
            start_date:'2222-08-05',
            end_date:'2222-10-06',
            plan_id:'9876',
            title:'public plan 2',
        place_num:2,
        liked:30,
        places:[
            {
                id: '11004596',
                place_name: '공유 장소 1',
                road_address_name: '',
                x: '126.596768094707',
                y: '37.246138589609',
                checked:true,
                day:'1'
            },    
            {
                id: '18741257',
                place_name: '공유 장소 2',
                x: '126.55143895278526',
                y: '37.27999142327456',
                checked:true,
                day:'2'
            },
        ]}
    );
})

server.listen(port, ()=> {
    console.log(port+'포트로 서버 실행');
  });