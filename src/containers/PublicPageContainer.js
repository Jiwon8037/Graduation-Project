import React from "react";
import PublicPage from "../pages/publicpage/PublicPage";
import { setOthersPlan } from "../modules/othersPlanList";
import { connect } from "react-redux";

const PublicPageContainer = ({
  setOthersPlan,
  planList,
  loginState,
  userId,
}) => {
  return (
    <div>
      <PublicPage
        setOthersPlan={setOthersPlan}
        planList={planList}
        loginState={loginState}
        userId={userId}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    planList: state.othersPlanList.planList,
  }),
  {
    setOthersPlan,
  }
)(PublicPageContainer);
