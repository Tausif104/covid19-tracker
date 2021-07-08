import { Row, Card, Col, Image, Spinner } from 'react-bootstrap'
import commaNumber from 'comma-number'

const CountryCard = ({ countries, loading }) => {
    if (loading) {
        return <Spinner variant='primary' animation='border' />
    }

    return (
        <Row>
            {countries.map((country) => (
                <Col lg={3}>
                    <Card className='country-card'>
                        <Card.Body>
                            <Card.Title>
                                {country.country}{' '}
                                <Image src={country.countryInfo.flag} />
                            </Card.Title>
                            <Card.Text>
                                <p>
                                    <strong>Active Cases: </strong>
                                    {commaNumber(country.active)}
                                </p>
                                <p>
                                    <strong>Total Cases: </strong>
                                    {commaNumber(country.cases)}
                                </p>
                                <p>
                                    <strong>Critical Cases: </strong>
                                    {commaNumber(country.critical)}
                                </p>
                                <p>
                                    <strong>Total Deaths: </strong>
                                    {commaNumber(country.deaths)}
                                </p>
                                <p>
                                    <strong>Recovered: </strong>
                                    {commaNumber(country.recovered)}
                                </p>
                                <p>
                                    <strong>Today Cases: </strong>
                                    {commaNumber(country.todayCases)}
                                </p>
                                <p>
                                    <strong>Today Deaths: </strong>
                                    {commaNumber(country.todayDeaths)}
                                </p>
                                <p>
                                    <strong>Today Recovered: </strong>
                                    {commaNumber(country.todayRecovered)}
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CountryCard
