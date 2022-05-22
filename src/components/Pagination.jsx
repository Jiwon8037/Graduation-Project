import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({maxPage,pageName,pageNum}) => {
    let pageArr=[];
    
    if(maxPage<5){
        pageArr=[...Array(maxPage)];
    }else{
        pageArr=[...Array(5)];
    };

    pageNum=pageNum-2;
    if(pageNum<2){
        pageNum=1;
    }else if(maxPage-pageNum<5){
        pageNum=maxPage-4;
    }
    
    return (
        <div>
            <Link to={`/${pageName}?page=1`}>처음 </Link>
            {pageArr.map((num,i)=>
                <Link to={`/${pageName}?page=${i+pageNum}`} key={i+pageNum}>
                    {i+pageNum}{' '}
                </Link>
            )}
            <Link to={`/${pageName}?page=${maxPage}`}>끝 </Link>
        </div>
    );
};

export default Pagination;