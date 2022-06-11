import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlaceNameList from "../../components/PlaceNameList";
import DayParsing from "../../components/DayParsing";
import PostTemplete from "../PostTemplete";
import Button from "../../components/common/Button";

const MyPlan = ({ planData }) => {
  const navigate = useNavigate();
  const params = useParams();
  const planId = params.plan_id;
  const plan = { ...planData };
  const myPlaceList = [...plan.places];

  return (
    <PostTemplete>
      <div className="titleDiv">
        <div>
          <h2>{plan.title}</h2>
        </div>
        <div className="editBtnDiv">
          <Button
            onClick={() => {
              navigate(`/editPlan/${planId}`);
            }}
          >
            일정 수정
          </Button>
        </div>
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

export default MyPlan;
