import { useState, useEffect } from 'react'
import axios from 'axios'
import commaNumber from 'comma-number'
import { Card, ListGroup, Spinner } from 'react-bootstrap'

const Bangladesh = () => {
    const [bangladesh, setBangladesh] = useState(null)

    useEffect(() => {
        const fetechBd = async () => {
            const { data } = await axios.get(
                'https://corona.lmao.ninja/v2/countries/Bangladesh?yesterday&strict&query%20'
            )
            setBangladesh(data)
        }

        fetechBd()
    }, [])

    return (
        <div>
            {bangladesh ? (
                <Card>
                    <Card.Header>Bangladesh Statistics</Card.Header>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            New Cases: {commaNumber(bangladesh.todayCases)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Today Deaths: {commaNumber(bangladesh.todayDeaths)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Cases: {commaNumber(bangladesh.cases)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Deaths: {commaNumber(bangladesh.deaths)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Recovered: {commaNumber(bangladesh.recovered)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Today Recovered:{' '}
                            {commaNumber(bangladesh.todayRecovered)}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            ) : (
                <Spinner animation='border' variant='primary' />
            )}
        </div>
    )
}

export default Bangladesh
