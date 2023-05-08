import React from 'react'

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
         pageNumbers.push(i);
  }
  console.log(pageNumbers)

return (
    <nav>
      <ul className="pagination">
        {
          pageNumbers.map(number =>(
            <li key={number} className='page-item'>
              <h4 onClick={() => paginate(number)}  className='page-link'>
                {number}
              </h4>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Pagination;