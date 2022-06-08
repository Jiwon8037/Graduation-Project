import React from 'react';
import { useState } from 'react';
import HomeTemplete from './HomeTemplete';

const Home = () => {
    const [btnName,setBtnName]=useState('');

    const registerText=`1. 회원가입
        register 버튼 클릭 시 메일로 인증번호가 발송됩니다.
        인증번호를 알맞게 입력하였다면 회원가입이 완료되고 로그인 페이지로 이동합니다.`;
    const loginText=`2. 로그인 
        회원가입 한 아이디와 비밀번호로 로그인을 진행합니다.`;
    const makeplanText=`3. 일정만들기
        여행하고 싶은 지역을 검색합니다.
        좌측에 리스트 형태로 해당지역에 대한 명소가 뜨게 됩니다.
        여행하고 싶은 장소를 체크박스에 체크하고 우측에 여행 시작날짜와 종료일자를 선택합니다.
        체크박스에 체크하면 다른사람의 일정 게시판에 나의 일정이 공유됩니다.
        plan title을 입력하면 그대로 내 일정의 이름이 정해지며 입력하지 않았을 경우 검색한 지역으로 자동 입력됩니다.
        우측 제일 하단에는 좌측 리스트에서 자신이 여행하고자 체크한 명소가 표시됩니다.
        submit 버튼을 누르면 일정 생성이 완료된 후 마이페이지로 이동합니다.
        장소가 일정에 비해 적을 시 주변을 탐색하여 여행 날짜에 맞게 주변 장소들을 자동으로 추천하여 경로를 짜줍니다.
        자동으로 추천된 장소가 마음에 들지 않을경우 일정수정 버튼을 통해 삭제하기도 가능합니다.`;
    const mypageText=`4. 마이페이지
        마이페이지에는 자신이 생성한 일정목록들이 표시됩니다.
        일정 생성할 때 적었던 title과 여행의 시작, 끝 날짜가 표시됩니다.
        생성된 일정의 title을 누르면 일정의 세부 내용을 볼 수 있습니다.
        좌측에는 내가 선택한 장소 목록이 뜨게 되고 중앙에는 지도에 자체 제작된 알고리즘으로 명소들간의 경로를 확인 할 수 있습니다.
        장소의 마커를 클릭하고 길찾기를 누르면 이전 장소부터 현재 장소까지의 카카오 맵을 통한 길찾기 경로를 확인할 수 있습니다.
        상단에는 전체 일정 경로 or 각 여행 일자별로 방문할 장소들 간의 경로를 확인할 수 있습니다.
        짜인 경로가 마음에 들지 않으면 일정수정 버튼을 통해 방문할 순서를 변경할 수도, 장소를 삭제할 수도 있습니다.`;
    const publicpageText=`5. 다른사람의 일정
        다른 사람이 일정을 만들 때 공유하기 여부에 체크하였다면 다른사람의 일정 탭에 공유한 일정목록이 뜨게 됩니다.
        title을 누르면 사용자가 생성한 일정을 볼 수 있고 좋아요를 눌러 의견을 표시할 수 있습니다.
        일정복사 버튼을 누르면 해당 일정이 그대로 내 일정으로 복사가 됩니다.
        복사된 일정은 마이페이지에서 확인할 수 있습니다.`;

    const onClickBtn=(e)=>{
        let text=e.target.value;
        setBtnName(text);
    };

    return (
        <HomeTemplete>
            <div>
                <h1 className="title">How To Vivalatrip </h1>
                <h3 className="subtitle">모든 기능은 로그인을 해야 이용할 수 있으나, 다른 사람의 일정 보기에는 로그인이 요구되지 않습니다.</h3>
            </div>
            <div className ="button-region">
                <button value={registerText} className="homeBtn" onClick={onClickBtn}>1. 회원가입</button>
                <button value={loginText} className="homeBtn" onClick={onClickBtn}>2. 로그인</button>
                <button value={makeplanText} className="homeBtn" onClick={onClickBtn}>3. 일정만들기</button>
                <button value={mypageText} className="homeBtn" onClick={onClickBtn}>4. 마이페이지</button>
                <button value={publicpageText} className="homeBtn" onClick={onClickBtn}>5. 다른사람의 일정</button>
            </div>
            <div className='text'>
                {btnName}
            </div>
        </HomeTemplete>
    );
}

export default Home;