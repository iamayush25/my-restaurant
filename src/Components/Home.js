import React from 'react'
import "./style.css"





function Home() {
    return (
        <div className='main'>
            <div className="head">

                <div className="navbar">
                    <div className="logo">
                        <h1 className='ayush'>🎀 𝓐𝔂𝓾𝓼𝓱 𝓢𝓱𝓪𝓻𝓶𝓪 𝓡𝓮𝓼𝓽𝓪𝓾𝓻𝓪𝓷𝓽 🎀</h1>
                    </div>
                    <div className='links'>
                        <a className='a' href="">About</a>
                        <a className='a' href="">Login</a>
                        <a className='a' href="">Contact Us</a>
                    </div>

                    
                </div>
                <div className="header">
                    <div id='h1'>
                        <h1>Discover Restaurant And Food</h1>
                    </div>
                </div>
                <div id='main2'>
                    <div id="inputOptions">
                        <input type="search" id="input" placeholder='Search anything' />
                        <select id="select">
                            <option>Menu</option>
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>

                        <button id='searchBtn'>Search</button>
                    </div>
                </div>
                <div id='displayFood'>
                    <h1>This space for when we want to search enything</h1>

                </div>

                <div id="imgs">
                    <img className='foodImg' src={require('./food1.png')} alt='' />
                    <img className='foodImg' src={require('./food2.png')} alt='' />
                    <img className='foodImg' src={require('./food3.png')} alt='' />
                    <img className='foodImg' src={require('./food4.png')} alt='' />   


                </div>

            </div>

        </div>
    )
}

export default Home;
