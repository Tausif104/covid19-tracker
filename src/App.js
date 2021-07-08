import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import CountryScreen from './Screens/coutryScreen'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
            <Container>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/countries' component={CountryScreen} />
            </Container>
            <Footer />
        </Router>
    )
}

export default App
