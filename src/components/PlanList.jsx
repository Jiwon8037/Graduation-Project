import React from 'react';
import { Link } from 'react-router-dom';

const PlanList = ({pageName,planList}) => {
    return (
        <div className='planList'>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>기간</td>
                    </tr>
                </thead>
                <tbody>
                {planList.map(plan=>(
                    <tr key={plan.plan_id}>
                        <td>{plan.plan_id}</td>
                        <td><Link to={`/${pageName}/${plan.plan_id}`}>{plan.title}</Link></td>
                        <td>{plan.start_date} ~ {plan.end_date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlanList;