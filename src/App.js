import './App.css';

function App() {
  const title = 'Welcome to new blog';
  const likes = 50;
  // const person = { name:"Ye Pyae", age: 23 };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked  { likes } times.</p>
        {/* <p>{ person }</p>
        <p>{ person.name }</p> */}

        <p>{ 20 }</p>
        <p>{ "hello world" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random()*10 }</p>
        <a href={ link } target="_blank">Google Site</a>
      </div>
    </div>
  );
}

export default App;

// Can't Output the object