import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Apologies, Manager</h2>
            <p>This abnormality does not currently exist in our database. <br/> <br/>
                <Link to="/">
                    Perhaps more reasearch is in order?
                </Link>
            </p>
        </div>
    )
}

export default NotFound