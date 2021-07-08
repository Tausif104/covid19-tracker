import { Link } from 'react-router-dom'
import { Row, Col, Image, Button } from 'react-bootstrap'
import Global from '../components/Global'
import Bangladesh from '../components/Bangladesh'

const HomeScreen = () => {
    return (
        <div>
            <div className='image-wrapper'>
                <Image className='thumbnail' src='/thumb.jpg' />
            </div>
            <h1 className='heading text-center'>Covid19 Tracker</h1>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Global />
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Bangladesh />
                </Col>
            </Row>
            <Row className='text-center mt-50'>
                <Col xl={12}>
                    <Link to='/countries'>
                        <Button>All Countries</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
