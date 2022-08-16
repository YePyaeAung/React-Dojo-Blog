const Home = () => {
    const handleClick = (e) => {
        console.log("hello react", e);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('Ye Pyae', e)}>Click Me Again</button>
        </div>
    )
}
export default Home;