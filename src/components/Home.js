import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='Home'>
                <span className='bodyBefore'></span>
                <h1>Hi,</h1>
                <h1>I'm <span className='util-red'>Abhishek</span> Khare,</h1>
                <h1>Web Developer.</h1>
                <p>Front-end and JavaScript Expert</p>
                <span className='bodyAfter'></span>
                <div className="followmelink">
                <a href="https://github.com/Abhishekkhare77" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/abhishek-khare-267976224/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/Abhishe94714059" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a><br />
                </div>
            </div>
            <span className='personImage'></span>
        </div>
    )
}

export default Home
