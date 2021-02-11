import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nitendo from '../img/nitendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({pathId}) => {
    const history = useHistory()
    const {screen,game, isLoading} = useSelector((state) => state.detail)
        const exitCard = (e) => {
             const element  = e.target
             if(element.classList.contains("shadow")) {
                 document.body.style.overflow = 'auto'
                 history.push('/')
             }
        }


        const getPlatform = (platform) => {
          switch(platform) {
            case "Playstation 4":
              return playstation
             case "Xbox One":
              return xbox;
              case "PC":
                return steam
              case "Nitendo Switch":
                return nitendo
              case "iOS":
                return apple
              default:
                return gamepad

          }
        }

        const getStars = () => {
          const stars = []
          const rating = Math.floor(game.rating)
            for(let i = 1; i<=5; i++) {
              if(i<= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>)
              } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
              }
            }
            return stars
        }

    return (
        <>
        {!isLoading && (
    <CardShadow className="shadow" onClick= {exitCard}>
       <Detail layoutId={pathId}>
         <Stats>
           <div className="rating">
                <motion.h3
                    LayoutID={`title ${pathId}`}
                     >
                    {game.name}
                </motion.h3>
                <p>Rating:
                  {getStars()}</p>

               </div>
              <Info>
                   <h3>Platforms</h3>
                   <Platforms>
                         {game.platforms.map((data) => (
                             <img 
                                key={data.platform.id} 
                                alt="platform name"   
                                src={getPlatform(data.platform.name)}>
                             </img>
                         ))}
               </Platforms>
                     </Info>
                     </Stats>
                     <Media>
                     <motion.img 
                           layoutId={`image ${pathId}`}
                          src={smallImage(game.background_image,1280)} 
                          alt="images"/>
                       </Media>

                   <Description>
                       <p>{game.description_raw}</p> 
                       </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image,1280)} key={screen.id}alt="screens" />
                         ))}
                </div>
       </Detail>
    </CardShadow>
    )}
    </>
    )
}

const CardShadow = styled(motion.div)`

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 20;
    top:0;
    left:0;
    &::-webkit-scrollbar {
        width: 0.5rem
      
    }
    

    &::-webkit-scrollbar-thumb{
        background-color: darkgrey
    }

    &::-webkit-scrollbar-track {
       background-color: white
    }

`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;



export default GameDetail