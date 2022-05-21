import React from 'react';
import { Link } from 'react-router-dom';

const PlanList = ({pageName,planList}) => {
    return (
        <div>
            {planList.map(plan=>(
                <div key={plan.plan_id}>
                    {plan.plan_id} : <Link to={`/${pageName}/${plan.plan_id}`}>{plan.title}</Link>  {plan.start_date} ~ {plan.end_date}
                </div>
            ))}
        </div>
    );
};

export default PlanList;