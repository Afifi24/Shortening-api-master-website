import styled from 'styled-components'
import Image from '../images/illustration-working.svg'
export const Header = () => {
  return (
    <Headerstyle>
   <div className="container">
      <div className="container__text">
         <h1>More than just shorter links</h1>
         <h4>Build your brand's recognition and get detailed insights on how your links are performing.</h4>
         <button className='btn'>Get Started</button>
      </div>
      <div className="container__image">
        <div className="container__image-bg">

        </div>
        <img src={Image} alt="" />
      </div>
   </div>
    </Headerstyle>
  )
}


const Headerstyle = styled.div`



.container{
width: 90%;
margin: 0 0 0 auto;
margin-top:4rem;
display: grid;
grid-template-columns: 43% 50%;
gap: 8rem;
place-items: center;
overflow-x: hidden;
}

.container__image{

}
.container__text{
    h1{
        font-size: 4rem;
        color: var(--Very-Dark-Blue);
    }
    h4{
        margin-bottom:2rem;
        color: var(--gray-color);
        font-weight: lighter;
    }
}

.btn{
   
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

`