import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceNameList from "../../components/PlaceNameList";
import PostTemplete from "../PostTemplete";
import DayParsing from "../../components/DayParsing";
import Button from "../../components/common/Button";
import { apiCopyPlan, apiGetPublicPlan, apiLiked } from "../../lib/api";

const PublicPlan = ({ userId }) => {
  const params = useParams();
  const planId = params.plan_id;
  const [plan, setPlan] = useState({
    title: "",
    places: [
      {
        id: "",
        place_name: "",
        x: "0",
        y: "0",
        checked: true,
        day: "",
      },
    ],
  });
  const myPlaceList = [...plan.places];

  useEffect(() => {
    apiGetPublicPlan(planId)
      .then((res) => {
        setPlan(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickLiked = () => {
    apiLiked()
      .then((res) => {
        if (res.data === "login") {
          alert("로그인 후 이용 해 주세요.");
        } else if (res.data === "overlap") {
          alert("이미 좋아요기능을 사용 했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCopy = () => {
    apiCopyPlan()
      .then((res) => {
        if (res.data === "login") {
          alert("로그인 후 이용 해 주세요.");
        } else if (res.data === "overlap") {
          alert("이미 가져온 일정입니다.");
        } else {
          alert("내 일정으로 가져왔습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostTemplete>
      <div className="titleDiv">
        <div>
          <h2>{plan.title}</h2>
        </div>
      </div>
      <div className="liked">
        <span>좋아요: {plan.liked}</span>
        {userId === plan.userId || (
          <>
            <Button onClick={onClickLiked} style={{ "margin-top": "5px" }}>
              좋아요
            </Button>
            <Button onClick={onClickCopy}>일정복사</Button>
          </>
        )}
      </div>
      <div className="post">
        <div className="placeNameList">
          <h3>장소 목록</h3>
          <PlaceNameList placeData={myPlaceList} />
        </div>
        <div className="mapRander">
          <DayParsing placeData={myPlaceList} totalDays={plan.total_days} />
        </div>
      </div>
    </PostTemplete>
  );
};

export default PublicPlan;
