import React, { useRef } from 'react';
import { useDrop,useDrag } from 'react-dnd';
import { ItemTypes } from './ItemsTypes';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
  }
const DndPlace = ({id,index,text,movePlace}) => {
    const ref=useRef(null);

    const[{handlerId},drop]=useDrop({
        accept:ItemTypes.PLACE,
        collect(monitor){
            return{
                handlerId:monitor.getHandlerId(),
            };
        },
        hover(item,monitor){
            if(!ref.current){
                return;
            };
            const dragIndex=item.index;
            const hoverIndex=index;

            if(dragIndex===hoverIndex){
                return;
            };
            const hoverBoundingRect=ref.current?.getBoundingClientRect();
            const hoverMiddleY=(hoverBoundingRect.bottom-hoverBoundingRect.top)/2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            };
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            };
            movePlace(dragIndex,hoverIndex);
            item.index=hoverIndex;
        },   
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.PLACE,
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;

    drag(drop(ref));

    return (
        <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
            {text}
        </div>
    );
};

export default DndPlace;