
import './App.css';

import MovieList from './component/MovieList';
import MovieCreate from './component/MovieCreate';
import MovieDetaile from './component/MovieDataile';
import MovieSearch from './component/MovieSearch';
import MovieUpdate from './component/MovieUpdate';
import NoPage from './component/NoPage';

import UserLogin from './component/UserLogin';
import UserRegister from './component/UserRegister';

import { Navbar, Container, Nav } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes

} from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>

        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Movie Review</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link to="/" >MovieList</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/movieCreate" >MovieCreate</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/movieDetaile" >MovieDetaile</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/movieUpdate" >MovieUpdate</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/movieSearch" >MovieSearch</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/userLogin" >UserLogin</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/userReg" >UserRegister</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <nav>
          <ul>
            <li><Link to="/" >MovieList</Link></li>
            <li><Link to="/movieCreate" >MovieCreate</Link></li>
            <li><Link to="/movieDetaile" >MovieDetaile</Link></li>
            <li><Link to="/movieUpdate" >MovieUpdate</Link></li>
            <li><Link to="/movieSearch" >MovieSearch</Link></li>
          </ul>
        </nav> */}

        <Routes>

          <Route path="/" element={<MovieList />} />
          <Route path="/movieCreate" element={<MovieCreate />} />
          <Route path="/movieDetaile" element={<MovieDetaile />} />
          <Route path="/movieUpdate/:id" element={<MovieUpdate />} />
          <Route path="/movieSearch" element={<MovieSearch />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userReg" element={<UserRegister />} />
          <Route path="/*" element={<NoPage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
