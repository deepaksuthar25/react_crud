import {Link} from 'react-router-dom';

function NoPage() {
    return ( 
        <>
        <h1>404 No Page Found</h1>
        <p><Link to="/">Click Here To Go Home</Link></p>
        </>
     );
}

export default NoPage;