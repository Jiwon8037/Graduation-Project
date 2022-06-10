import { client } from "./client";

export const apiLogout=()=>{//로그아웃
    return client.post('/api/logout',null,{withCredentials:true})
};
export const apiLogin=(loginForm)=>{//로그인
    return client.post('/api/login',loginForm,{withCredentials: true})
};
export const apiRegister=(userForm)=>{//회원가입
    return client.post('/api/register',userForm ,{withCredentials:true})
};
export const apiEmailAuth=(mail)=>{//이메일인증
    return client.post('/api/register/email',mail)
};
export const apiSearchPlace=(contentData)=>{//장소검색
    return client.post('/getData',contentData,{withCredentials:true})
};
export const apiMakePlan=(sendData)=>{//일정만들기
    return client.post('/api/makeSchedule',sendData,{withCredentials:true})
};
export const apiGetMyPageList=(page)=>{//마이페이지
    return client.get('/api/myPageList',{params:{page}, withCredentials:true})
};
export const apiGetMyPlan=(planId)=>{//마이페이지 상세플렌
    return client.get('/api/myPlan',{params:{planId}, withCredentials:true})
};
export const apiEdit=(sendData)=>{//플렌 수정
    return client.post('/api/edit',sendData,{withCredentials:true})
};
export const apiPublicPageList=(page)=>{//공유페이지
    return client.get('/api/publicPageList',{params:{page}, withCredentials:true})
};
export const apiGetPublicPlan=(planId)=>{//공유페이지 상세플랜
    return client.get('/api/publicPlan',{params:{planId}, withCredentials:true})
};
export const apiLiked=()=>{//좋아요
    return client.get('/api/publicPlan/liked',{withCredentials:true})
};
export const apiCopyPlan=()=>{//일정 복사
    return client.get('/api/publicPlan/copy',{withCredentials:true})
};