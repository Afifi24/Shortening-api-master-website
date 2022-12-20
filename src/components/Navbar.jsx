import Logo from '../images/logo.svg'
import styled from 'styled-components'
import {FaBars}  from 'react-icons/fa'
import {FaTimes}  from 'react-icons/fa'
import { useState } from 'react'
export const Navbar = () => {
    const [isshowing,setIshowing] = useState(false)
    const Toggle = ()=>{
        setIshowing(!isshowing)
    }
  return (
    <Navstyle>
      <nav>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
       <div className="menu__icon" onClick={Toggle}>
       {isshowing?<FaTimes/>: <FaBars/>}
       </div>
       <ul className={isshowing? "nav__menu active":"nav__menu"}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <Line/>
        <li>
        <div className="login__sing-nav">
        <h4>Login</h4>
        <button>Sign Up</button>
       </div>
        </li>

       </ul>

       <div className="login__sing-up">
        <h4>Login</h4>
        <button>Sign Up</button>
       </div>
      </nav>

    </Navstyle>
  )
}

const Navstyle = styled.div`

nav{
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    padding: 3rem 0rem;
   
}
.logo{

}
.menu__icon{
    display: none;
}
.nav__menu{
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    li{
        cursor: pointer;
        font-weight: 700;
        color: var(--gray-color);
        font-size: 14px;
        transition: var(--transition);
        &:hover{
            color: var(--Very-Dark-Violet);
        }
    }
    .login__sing-nav{
        display: none;
    }

}
.login__sing-up{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4rem;
    button{
        padding: 0.7rem 2rem;
        border-radius: 1.5rem;
        border: none;
        cursor: pointer;
        color: #fff;
        background-color: var(--primary-color);
        font-weight: 700;
        transition: var(--transition);
        &:hover{
            background-color: var(--hover-color);
        }
    }
    h4{
        color: var(--gray-color);
        cursor: pointer;
        transition: var(--transition);
        &:hover{
            color: var(--Very-Dark-Violet);

        }
    }
}



/* MEDIA QUERIES (medium screen  */
@media screen and (max-width:1024px) {
    .nav__menu{
        position: absolute;
        top: 15%;
        left: -200%;
        width: 70%;
        height: 80%;
        background-color: var( --dark-violet-color);
        transition: var(--transition);
        border-radius: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        padding-top: 5rem;
        padding-bottom: 1.3rem;
        margin: auto;
        li{
            width: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           color: #fff;
           &:hover{
            color: #fff;
           }
        }
        
        .login__sing-nav{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    
        gap: 2rem;
        button{
        padding: 0.7rem 2rem;
        border-radius: 1.5rem;
        width: 70%;
        border: none;
        cursor: pointer;
        color: #fff;
        background-color: var(--primary-color);
        font-weight: 700;
        transition: var(--transition);
        &:hover{
            background-color: var(--hover-color);
        }
    }
    h4{
        color: #fff;
        cursor: pointer;
        transition: var(--transition);
        
    }


    }
        
    }
    .active{
        left: 17%;
        margin: auto;
    }
    .login__sing-up{
        display: none;
    }
    .menu__icon{
        display: flex;
        font-size: 2rem;
        position: absolute;
        right: 3rem;
        color: var(--gray-color);
        cursor: pointer;
        z-index: 10;
    }
   
    
}





/* MEDIA QUERIES (small screen)  */
@media screen and (max-width:600px) {
    .nav__menu{
        width: 80%;
        height: 80%;
        top: 17%;
    }
    .active{
        left: 8%;
    }
}
`
const Line = styled.div`
height: 1px;
width: 90%;
margin: auto;
background-color: #fff;
display: none;
@media screen and (max-width:1024px) {
    display: flex;
   

}

`