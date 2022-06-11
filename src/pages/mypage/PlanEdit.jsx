import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import DndPlace from "./DndPlace";
import ResultMapRander from "../../components/ResultMapRander";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { apiEdit } from "../../lib/api";

const PlanEdit = ({ planData, removePlanPlace }) => {
  const navigate = useNavigate();
  const parmas = useParams().plan_id;
  const [sendData, setSendData] = useState({ ...planData });
  const [placeList, setPlaceList] = useState([]);
  const [startDate, setStartDate] = useState(new Date(planData.start_date));
  const [endDate, setEndDate] = useState(new Date(planData.end_date));

  useEffect(() => {
    setPlaceList([...planData.places]);
  }, [planData]);

  useEffect(() => {
    setSendData({
      ...sendData,
      places: placeList,
      start_date: startDate,
      end_date: endDate,
    });
  }, [startDate, endDate, placeList]);

  const movePlace = useCallback((dragIndex, hoverIndex) => {
    setPlaceList((prevPlaceList) =>
      update(prevPlaceList, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevPlaceList[dragIndex]],
        ],
      })
    );
  }, []);

  const setTitle = (e) => {
    setSendData({
      ...sendData,
      title: e.target.value,
    });
  };

  const setPublic = () => {
    setSendData({
      ...sendData,
      isPublic: !sendData.isPublic,
    });
  };

  const sendEdit = () => {
    apiEdit(sendData)
      .then(navigate(`/myplan/${parmas}`))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>
        제목 :
        <input type="text" placeholder={sendData.title} onChange={setTitle} />
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "15%" }}>
          {placeList.map((place, i) => (
            <DndPlace
              key={place.id}
              index={i}
              id={place.id}
              text={place.place_name}
              movePlace={movePlace}
              removePlanPlace={removePlanPlace}
            />
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <ResultMapRander placeData={placeList} />
        </div>
        <div style={{ width: "15%" }}>
          <button onClick={sendEdit}>수정완료</button>
          <br />
          start date :{" "}
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          end date:{" "}
          <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          share plan? :{" "}
          <input
            type="checkbox"
            onClick={setPublic}
            checked={sendData.isPublic}
            readOnly={true}
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default React.memo(PlanEdit);
