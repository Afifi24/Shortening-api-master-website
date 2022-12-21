import styled from "styled-components"
import BrandImage from '../images/icon-brand-recognition.svg'
import CustomizableImage from '../images/icon-fully-customizable.svg'
import RecordImage from '../images/icon-detailed-records.svg'
export const Statistics = () => {
  return (
    <Static>
        <div className="container">
            <div className="container__text">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="container__brand">
                <div className="brand left">
                   <div className="brand__img">
                   <img src={BrandImage} alt="" />
                   </div>
                    <h2>Brand Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="brand middle">
                    <div className="brand__img">
                    <img src={RecordImage} alt="" />
                    </div>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="brand right" >
                   <div className="brand__img ">
                   <img src={CustomizableImage} alt="" />
                   </div>
                    <h2>Fully Customizable</h2>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
        
        
    </Static>
  )
}

const Static = styled.div`
background-color: var(--background-color);
min-height: 100vh;
margin-top: -9rem;
padding-top: 10rem;
padding-bottom: 5rem;
.container{
    width: 87%;
    margin: auto;
    display: grid;
    place-items: center;
    
}
.container__text{
    text-align: center;
    max-width: 480px;
    p{
        color: var(  --Grayish-Violet);
        margin-top: 0rem;
    }
}
.container__brand{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 7rem;
    gap: 2rem;
    position: relative;
    margin-bottom: 2rem;

}
.brand{
    background-color: #fff;
    padding: 2.5rem 1.2rem;
    border-radius: 0.5rem;
    position: relative;
    z-index: 10;
    h2{
        margin-bottom: 1rem;
        margin-top:3rem;
    }
    p{
        line-height: 1.7;
        color: var(--Grayish-Violet);
    }
}
.brand__img{
    background-color: var( --dark-violet-color);
    display: grid;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    place-items: center;
    position: absolute;
    top: -14%;
    left: 10%;
   
    
   
}
.middle{
    margin-top:3rem;
    margin-bottom: 2rem;

}
.left{
    margin-bottom: 4rem;
}
.right{
    margin-top:6rem;

}

/* line */
.container__brand::after{
    content: '';
    width: 80%;
    height: 0.6rem;
    top: 44%;
    background: var(--primary-color);
    position: absolute;
    right: 0;
    margin: auto;
}







/* MEDIA QUERY  (medium screen)*/
@media screen and (max-width:900px) {
    
    .container__brand{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 7rem;
    gap: 3rem;
    position: relative;
    margin-bottom: 2rem;

}
.brand__img{
    display: grid;
    place-items: center;
    position: absolute;
    top: -14%;
    left: 44%;
   
    
   
}
/* line */
.container__brand::after{
    content: '';
    width: 100%;
    height: 0.6rem;
    top: 62%;
    background: var(--primary-color);
    position: absolute;
    right:0% ;
    margin: auto;
   transform: rotate(90deg);
}
.container__brand::before{
    content: '';
    width: 100%;
    height: 0.6rem;
    top: 37%;
    background: var(--primary-color);
    position: absolute;
    right:0% ;
    margin: auto;
   transform: rotate(90deg);
}


}





/* MEDIA QUERY  (small screen)*/
@media screen and (max-width:500px) {

/* line */
.container__brand::after{
    content: '';
    width: 100%;
    height: 0.6rem;
    top: 62%;
    background: var(--primary-color);
    position: absolute;
    right:-2% ;
    margin: auto;
   transform: rotate(90deg);
}
.container__brand::before{
    content: '';
    width: 100%;
    height: 0.6rem;
    top: 37%;
    background: var(--primary-color);
    position: absolute;
    right:-2% ;
    margin: auto;
   transform: rotate(90deg);
}

.brand__img{
    display: grid;
    place-items: center;
    position: absolute;
    top: -14%;
    left: 39%;
   
    
   
}
.container__brand{
    gap: 0rem;
}
.brand{
    text-align: center;
}
}
    
`

