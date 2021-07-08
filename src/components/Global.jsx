import { useState, useEffect } from 'react'
import axios from 'axios'
import commaNumber from 'comma-number'
import { Card, ListGroup, Spinner } from 'react-bootstrap'

const Global = () => {
    const [summary, setSummary] = useState({})

    useEffect(() => {
        const fetchSummary = async () => {
            const { data } = await axios.get(
                'https://api.covid19api.com/summary'
            )
            setSummary(data)
        }

        fetchSummary()
    }, [])

    return (
        <div>
            {summary.Global ? (
                <Card>
                    <Card.Header>Global Statistics</Card.Header>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            New Confirmed:{' '}
                            {summary.Global
                                ? commaNumber(summary.Global.NewConfirmed)
                                : 'Fetching'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Confirmed:{' '}
                            {summary.Global
                                ? commaNumber(summary.Global.TotalConfirmed)
                                : 'Fetching'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Deaths:{' '}
                            {summary.Global
                                ? commaNumber(summary.Global.TotalDeaths)
                                : 'Fetching'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            New Recovered:{' '}
                            {summary.Global
                                ? commaNumber(summary.Global.NewRecovered)
                                : 'Fetching'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total Recovered:{' '}
                            {summary.Global
                                ? commaNumber(summary.Global.TotalRecovered)
                                : 'Fetching'}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            ) : (
                <Spinner animation='border' variant='primary' />
            )}
        </div>
    )
}

export default Global
