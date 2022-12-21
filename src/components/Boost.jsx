import styled from "styled-components"
import Image from '../images/bg-boost-desktop.svg'
const Boost = () => {
  return (
    <Booststyle>
    <div className="container">
        <div className="container-bg"><img src={Image} alt="" /></div>
        <div className="text">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
        </div>
</div>
    </Booststyle>
  )
}

export default Boost

const Booststyle = styled.div`

.container{
    height: 15rem;
    background-color: var(--dark-violet-color);
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
}
.container__bg{
position: absolute;
width: 100%;

}
.text{
   
    display: grid;
    place-items: center;
    position: absolute;
    margin: -1rem 0 0 4rem;
    h1{
        margin-bottom: 2rem;
        color: #fff;
    }
}
button{
    padding: 1rem 3rem;
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

@media screen and (max-width:500px) {
    
    .text{
        text-align: center;
        margin: 0;
        margin-top: 3rem;
        h1{
       font-size: 1.4rem;
    }
    }
}

`