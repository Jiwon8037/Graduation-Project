import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import PlanEdit from '../pages/PlanEdit';

const DndContainer = ({setUserId,planData}) => {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <PlanEdit setUserId={setUserId} planData={planData}/>
            </DndProvider>
        </div>
    );
};

export default DndContainer;