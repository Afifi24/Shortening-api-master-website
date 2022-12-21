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
img{
  /* width: 100%; */
}
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
/* MEDIA QUERY (medium screen) */
@media screen and (max-width:1024px){
  .container{
width: 95%;
grid-template-columns: 42% 43%;
gap: 7rem;
}
.container__text{
    h1{
        font-size: 2.4rem;
    }
    h4{
        font-size: 0.9rem;
    }
}
}
/* MEDIA QUERY (small screen) */
@media screen and (max-width:800px){
  .container{
grid-template-columns: 1fr;
grid-row: 1;
gap: 5rem;
margin: auto;
}
.container__text{
  text-align: center;
 
    h1{
        font-size: 2rem;

    }
    h4{
        font-size: 0.9rem;
    }
}
.container__image{
grid-area: 1;
img{
  width: 100%;
}
}
}


/* MEDIA QUERY (small screen) */
@media screen and (max-width:450px){
  .container{
grid-template-columns: 1fr;
gap: 5rem;
margin: 0 0 0 auto;

}
.container__text{
padding: 0rem 1rem;
}

.container__image{
grid-area: 1;
img{
  width: 150%;
}

}

} 
`