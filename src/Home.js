import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [ name, setName ] = useState('mario');
    const [ age, SetAge ] = useState(23);

    const handleClick = () => {
        // name = 'luigi';
        // console.log(name);

        setName('luigi');
        SetAge(30);
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Home;