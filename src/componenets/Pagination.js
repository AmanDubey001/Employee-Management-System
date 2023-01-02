import React, { useEffect, useState } from 'react'

function Pagination({pages,setCurrentPage,sortData,currentEmployees}) {

const numOfPages=[];
for(let i=1;i<=pages;i++){
    numOfPages.push(i);
}

const [currentButton,setCurrentButton] =useState(1);


useEffect(()=>{
setCurrentPage(currentButton);
},[currentButton,setCurrentPage])





  return (
    <div class="clearfix">
    <div class="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortData.length}</b> entries</div>
    <ul class="pagination">
    <li class=" `${currentButton === 1 ? 'page-item disabled':'page-item'} `"><a href="#"
    onClick={() => setCurrentButton((prev) => prev===1?prev:prev-1)}
    >Previous</a></li>
{
    numOfPages.map((page,index)=>{
     return(
          
        <li key={index} className=" `${currentButton === page ? 'page-item active':'page-item'} `"><a href="#" class="page-link"
        onClick={()=>{setCurrentButton(page)}}
        >{page}</a></li>
     )
    })


}

     <li class=" `${currentButton === 1 ? 'page-item disabled':'page-item'} `"><a href="#"
    onClick={() => setCurrentButton((next) => next===1?next:next+1)}
    >Next</a></li>

    </ul>
</div>
  )
}

export default Pagination

{/* <li class="page-item disabled"><a href="#">Previous</a></li>
<li class="page-item"><a href="#" class="page-link">1</a></li>
<li class="page-item"><a href="#" class="page-link">2</a></li>
<li class="page-item active"><a href="#" class="page-link">3</a></li>
<li class="page-item"><a href="#" class="page-link">4</a></li>
<li class="page-item"><a href="#" class="page-link">5</a></li>
<li class="page-item"><a href="#" class="page-link">Next</a></li> */}
