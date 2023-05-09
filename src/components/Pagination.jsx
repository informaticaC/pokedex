import React, { useState } from 'react'
import './styles/pagination.css';

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
  const pageNumbers = []
  let subPageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
         pageNumbers.push(i);
  }
  //console.log(pageNumbers)
 
  const [currentPages, setCurrentPages] = useState(1)
  const [pagesPerPage, setPagesPerPage] = useState(6)
  const indexOfLastPages = currentPages * pagesPerPage
  const indexOfFirstPages = indexOfLastPages - pagesPerPage
  subPageNumbers = pageNumbers.slice(indexOfFirstPages, indexOfLastPages)
  //console.log(subPageNumbers)

  const handleNext = () => {
    if (currentPages < pageNumbers.length/pagesPerPage){
      setCurrentPages(currentPages + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPages > 1){
      setCurrentPages(currentPages - 1)
    }
  }
  
return (
    <nav className='pagination__container'>
      <button onClick={handlePrevious} ><i className='bx bx-chevrons-left' ></i></button>
      <ul className="pagination">
        {
          subPageNumbers.map(number =>(
            <li key={number} className='page-item'>
              <a onClick={(e) => paginate(number,e)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))
         
        }
      </ul>
      <button onClick={handleNext}><i className='bx bx-chevrons-right'></i></button>
    </nav>
  );
};

export default Pagination;