import React from 'react';
import './home.css';
import { useState } from 'react';


const Home = () => {
    let[ binmenual , setmenual] = useState("");

    function disregister(){
        setmenual(binmenual+<div className="text">
        register 버튼 클릭 시 메일로 인증번호가 발송됩니다.
        인증번호를 알맞게 입력하였다면 회원가입이 완료되고 로그인 페이지로 이동합니다.
        </div>);
    }
    return (
        <div>
            <div className="title">
            <h1 >How To Vivalatrip </h1>
            <h3><br />모든 기능은 로그인을 해야 이용할 수 있으나, 다른 사람의 일정 보기에는 로그인이 요구되지 않습니다.</h3>
            </div>

            <div className ="button-region">
            <button id="register" className="button" onClick={disregister}>1. 회원가입</button>
            <button id="login" className="button" onClick={dislogin}>2. 로그인</button>
            <button id="makeplan" className="button" onClick={displan}>3. 일정만들기</button>
            <button id="mypage" className="button">4. 마이페이지</button>
            <button id="otherplan" className="button">5. 다른사람의 일정</button>
            </div>

        </div>
    );
}
   
let disregister = ()=>{
    console.log("왜 안돼");
    return (
    <div className="text">
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;register 버튼 클릭 시 메일로 인증번호가 발송됩니다.
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인증번호를 알맞게 입력하였다면 회원가입이 완료되고 로그인 페이지로 이동합니다.
    </div>
    );
}

function dislogin(){
    return(
    <div className = "text">
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회원가입 한 아이디와 비밀번호로 로그인을 진행합니다.
    </div>
    );
}

const displan=()=>{
    return(
        <div>
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕<br />안녕
            <br />안녕
            <br />안녕
            <br />안녕
            <br />안녕

            <br />안녕<br />안녕<br />안녕<br />안녕<br />안녕<br />안녕            <br />안녕
            <br />안녕

        </div>
    )
}

export default Home;