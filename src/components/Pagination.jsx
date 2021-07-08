import { Link } from 'react-router-dom'

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination table-responsive'>
                {pageNumbers.map((number) => (
                    <li key={number} className='page-item'>
                        <Link
                            onClick={() => paginate(number)}
                            href='!#'
                            className='page-link'
                        >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
