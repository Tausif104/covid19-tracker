import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Row, Button, Spinner } from 'react-bootstrap'
import axios from 'axios'
import CountryCard from '../components/CountryCard'
import Pagination from '../components/Pagination'

const CountryScreen = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(16)

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true)
            const { data } = await axios.get(
                'https://corona.lmao.ninja/v2/countries?yesterday&sort'
            )
            setCountries(data)
            setLoading(false)
        }

        fetchCountries()
    }, [])

    // get current countries
    const indexOfLastcountry = currentPage * countriesPerPage
    const indexOfFirstcountry = indexOfLastcountry - countriesPerPage
    const currentCountries = countries.slice(
        indexOfFirstcountry,
        indexOfLastcountry
    )

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className='mt-50'>
            <Link to='/'>
                <Button>Go Back</Button>
            </Link>
            <h1 className='heading all-countries-heading mt-50'>
                All Countries
            </h1>
            <div className='countylist'>
                <CountryCard countries={currentCountries} loading={loading} />
                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCountries={countries.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default CountryScreen
