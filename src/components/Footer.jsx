import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.svg' 
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pintrest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <Footerstyle>
      <div className="container">
        <div className="logo">
            <img src={Logo} alt="jhwbfebj" />
        </div>
        <ul className="List">
            <h4>Feature</h4>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
        </ul>
        <ul className="List">
           <h4>Resources</h4>

            <li>Blog </li>
            <li>Developers</li>
            <li>Support</li>
        </ul>
        <ul className="List">
           <h4>Company</h4>

            <li>About  </li>
            <li>Out team</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>
        <div className="social__media">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Pintrest} alt="pintrest" />
            <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </Footerstyle>
  )
}

export default Footer

const Footerstyle = styled.div`
/* height: 50vh; */
padding: 6rem 1rem;

background-color: var(--Very-Dark-Violet);
.container{
    color: #fff;
    display: grid;
    grid-template-columns: 2fr 1.3fr 1fr 1fr 2fr;
    width: 87%;
    margin: auto;
    padding-top: 4rem;
    gap: 4rem;
}
.logo{
    color: #fff;
    display: block;
    img {
       cursor: pointer;
       filter: invert(31%) sepia(100%) hue-rotate(130deg) saturate(900%);
       
  color: white;
    }
}
.List{
    list-style: none;
    gap: 0.5rem;
    display: grid;
    place-items: initial;
    h4{
        margin-bottom:0.5rem;
    }
    li{
        font-size: 0.9rem;
        cursor: pointer;
        transition: var(--transition);
        color: var(--gray-color);
        &:hover{
            color: var(--primary-color);
        }
    }
}
.social__media{
   display: flex;
   align-items: flex-start;
   justify-content: space-around;
   
  img:hover{
    cursor: pointer;
    filter: invert(31%) sepia(100%) hue-rotate(120deg) saturate(900%);
    
   }
}


/* MEDIA QUERY (small screen) */
@media screen and (max-width:1024px) {
    .container{
        gap: 2rem;
    }
}

@media screen and (max-width:900px) {
    .container{
        gap: 3rem;
       grid-template-columns: 1fr;
       place-items: center;
       text-align: center;
       padding: 2rem 1rem;

    }
    .social__media{
  
gap: 2rem;
    }
}


`