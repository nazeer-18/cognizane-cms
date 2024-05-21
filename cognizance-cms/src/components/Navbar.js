import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/cognizance-logo.png'
import user from '../assets/user.svg'

export default function Navbar() {
    const handleResponsiveness = () => {
        const responsiveNav = document.querySelector('.responsive-nav')
        responsiveNav.classList.toggle('responsive-nav-active')
    }
    return (
        <div>
            <div className="responsive-nav">
                <div className="hidden-heading">
                    <div className="hidden-logo">
                        logo
                    </div>
                    <div className="hidden-close-nav">
                        <button onClick={handleResponsiveness}>
                            close
                        </button>
                    </div>
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut esse cumque. Amet ipsam quaerat asperiores laudantium fugiat natus magnam perspiciatis voluptates eum id. Eaque tenetur beatae velit officiis, dolor numquam voluptates harum itaque pariatur natus enim dignissimos similique error debitis animi est nam delectus neque quod odit aliquid impedit. Iste nulla corrupti optio nesciunt quasi maiores voluptates, deleniti minima ratione aliquam! Sequi, libero veniam perspiciatis cupiditate nam non, expedita odio molestiae est sit iusto itaque sed. Doloribus ad consequuntur illum quisquam optio voluptas ex perspiciatis et sed sunt nam velit molestiae nemo libero, aperiam cumque. Deleniti placeat earum, culpa illum iusto alias quas explicabo illo ab eveniet! Illo repellendus nulla minus exercitationem in temporibus repudiandae ullam libero quibusdam a quisquam excepturi, aut incidunt voluptatum sequi numquam rem beatae nemo velit vero obcaecati? Consectetur quidem praesentium similique omnis quae. Quam repellat magni iure vitae a libero delectus, dolor sint deleniti unde illum debitis? Error, quam? Cupiditate earum deleniti et nobis laudantium. Explicabo excepturi asperiores repudiandae dolores tempore repellendus voluptates, voluptatibus nesciunt molestiae impedit reprehenderit, consequuntur laudantium possimus laborum ab dignissimos voluptatem! Eum esse voluptas, ad minima facere dicta. Tempore nobis nihil suscipit rerum ipsum culpa cum deleniti eos voluptate incidunt.
            </div>
            <div className="navbar">
                <div className="hamburger">
                    <button onClick={handleResponsiveness}>
                        <svg aria-hidden="true" height="23" viewBox="0 0 16 16" version="1.1" width="23" fill="#f0f3f6" padding="10px" data-view-component="true" class="octicon octicon-three-bars Button-visual">
                            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="navbar-cognizance">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={logo} alt="Cognizance Logo" />
                        </Link>
                    </div>
                    <div className="navbar-title">
                        Cognizance
                    </div>
                </div>
                <div className="navbar-navigation">
                    <div className="navbar-links-container">
                        <ul className="navbar-list">
                            <li className="navbar-link"> <Link exact to="/aboutus"> About Us </Link></li>
                            <li className="navbar-link"> <Link exact to="/events"> Events </Link></li>
                            <li className="navbar-link"> <Link exact to="/domains"> Domains </Link></li>
                            <li className="navbar-link"> <Link exact to="/alumini"> Alumini </Link></li>
                            <li className="navbar-link"> <Link exact to="/gallery"> Gallery </Link></li>
                            <li className="navbar-link"> <Link exact to="/contactus"> Contact Us </Link></li>
                        </ul>
                    </div>
                    <div className="navbar-user-container">
                        <img className='navbar-user' src={user} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
