import styled from "styled-components"
import Image from '../images/bg-shorten-desktop.svg'
export const Card = () => {
  return (
    <Cardstyle>
     <div className="container">
       <div className="container-bg">
        <img src={Image} alt="" />
       </div>
      <form className="form">
      <input type="text" placeholder="Shorten a link here ..."  required/>
        <button>Shorten it!</button>
      </form>
     </div>

    </Cardstyle>
  )
}

const Cardstyle = styled.div`
width: 87%;
margin: auto;
margin-top: 7rem;
.container{
    width: 100%;  
    height  :10rem;
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 4rem;
    background-color: var(--dark-violet-color);
  
}
.container-bg{
position: absolute;
width: 100%;
}
.form{
    z-index: 10;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    input{
        width: 78%;
        height: 4rem;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        &:focus{
          border: 2px solid var(--primary-color);
        }
    }
    button{
        height: 4rem;
        width: 16%;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;
        transition: var(--transition);
        &:hover{
            background-color: var(--hover-color);
        }
    }
}
`