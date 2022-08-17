import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [ blogs, setBlogs ] = useState(null);

    const fetchData = async() => {
        const res = await fetch('http://localhost:8000/blogs')
            return res.json();
    }

    useEffect(() => {
        fetchData()
        .then(data => {
                setBlogs(data);
            })
    }, [  ])

    return (
        <div className="home">
            { blogs && <BlogList blogs={ blogs } title="All Blogs!"/> } {/* Conditional Rendering Template */}
        </div>
    )
}
export default Home;