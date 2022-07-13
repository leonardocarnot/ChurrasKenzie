import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
    
    .wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 20px;
        
        h2{
            color: var(--white);
            font-weight: bold;
        }
    }
    
    .cardTeam{  
        width: 300px;
        cursor: pointer;
    }
    
    .card__inner{
        display: flex;
        justify-content: center;
        gap:40px;
        padding: 20px;

        img{
            width: 250px;
            height: 200px;
            border-radius: 0px 20px 0px 20px;
        }
    }
    
    .card__right{

        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: justify ;
        width: 250px;
        height: 200px;
        gap: 10px;
        
        h3{
            color: var(--grey-6);
            font-weight: bold;
        }
        
        .card__link{
            display: flex;
            gap: 10px;
            
        }

        .link{
            display: block;
            text-decoration: none;
            text-transform: uppercase;
            border: 2px solid var(--grey-6);
            padding: 10px;
            position: relative;
            overflow: hidden;
            color: var(--grey-6);
            font-weight: bold;
        }

        .link:before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            height: 100%;

            background-color: var(--red-1);
            z-index: -1;
            transition: .5s ease-in;
        }
        
        .link1:before{
            width: 110%;
            height: 0;
            transform: translate(-50%,-50%) rotate(45deg);
        }
        
        .link1:hover:before{
            height: 550%;
        }
    }
    

    .carousel .slick-prev,.carousel .slick-next {
        color: var(--grey-6);
    }

    .slick-slider{
        width: 600px;
    }
    
    .slick-list{
        border-radius: 15px;
        background: var(--white);
    }
    
    .slick-next{
        right: -55px;
        padding: 20px;
    }
    
    .slick-prev{
        left: -105px;
        padding: 20px;

    }

    .slick-prev:before, .slick-next:before{
        color: var(--grey-6);
        font-size: 50px;
        
    }
    
    .slick-dots li button:before{
        color: var(--white);
        
    }  
    
    @media (max-width: 768px){
        .cardTeam{  
            width: 240px;
            cursor: pointer;
        }

        .card__inner{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 10px;
            width: 200px;

            img{
            width: 180px;
            height: 144px;
            border-radius: 0px 20px 0px 20px;
            padding: 0px;
            }
        }

        .card__right{
            width: 250px;
            height: 150px;

            h3{
                color: var(--grey-6);
                font-weight: bold;
                font-size: 14px;
            }
        }
        
        .link {
            width: 80px;
            font-size: 14px;
        }

        .slick-slider{
            width: 250px;
        }

          
        .slick-next{
            right: -25px;
            padding: 20px;
        }
        
        .slick-prev{
            left: -75px;
            padding: 20px;

        }

        .slider {
            width: 210px;
        }
    }
    
`;
