import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 style={{color: 'black'}}>CRUD - prática</h1>
            <Link to={'/Create'}>
                <Button>Create a register</Button>
            </Link>
            <Link to={'/Read'}>
                <Button>See the list</Button>
            </Link>
        </div>
    )
}
export default Home