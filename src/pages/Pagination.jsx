import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({pageNum,page}) => {
    return (
        <div>
            {[...Array(pageNum)].map((num,i)=>
                <Link to={`/${page}?page=${i+1}`} key={i+1}>{i+1} </Link>
            )}
            
        </div>
    );
};

export default Pagination;