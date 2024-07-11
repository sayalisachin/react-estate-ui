import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Find Real Estate & Book Your Dream Place.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <SearchBar/>
        <div className="boxes">
          <div className="box">
            <h1>16+</h1>
            <h2>Years Of Experience</h2>
          </div>
          <div className="box">
            <h1>200+</h1>
            <h2>Awards Received</h2>
          </div>
          <div className="box">
            <h1>3500+</h1>
            <h2>Properties Sold</h2>
          </div>
        </div>
        </div>
        
      </div>
      <div className="imgContainer">
        <img src="/bg.png"/>
      </div>

    </div>
  )
}

export default HomePage