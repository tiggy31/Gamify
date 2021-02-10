import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'

const GameDetail = () => {
    const history = useHistory()
    const {screen,game, isLoading} = useSelector((state) => state.detail)
        const exitCard = (e) => {
             const element  = e.target
             if(element.classList.contains("shadow")) {
                 document.body.style.overflow = 'auto'
                 history.push('/')
             }
        }

    return (
        <>
        {!isLoading && (
    <CardShadow className="shadow" onClick= {exitCard}>
       <Detail>
         <Stats>
           <div className="rating">
                <h3>
                    {game.name}
                </h3>
                <p>Rating:{game.rating}</p>

               </div>
              <Info>
                   <h3>Platforms</h3>
                   <Platforms>
                         {game.platforms.map((data) => (
                             <h3 key={data.platform.id}>
                                 {data.platform.name}
                                 </h3>
                         ))}
               </Platforms>
                     </Info>
                     </Stats>
                     <Media>
                     <img src={smallImage(game.background_image,1280)} 
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

const Detail = styled(motion.div) `
  width: 70%;
  border-radius: 3rem;
  padding: 5rem 20rem;
  background: pink;
  position: absolute;
  left: 10%;
  color: black;
img {
    width: 80%
}
`

const Stats = styled(motion.div) `
  display: flex;
  align-items: center;
  justify-content:space-between


`

const Info = styled(motion.div) `
         text-align: center

`

const Platforms = styled(motion.div) `

    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem
    }
`
    const Media = styled(motion.div)`
       margin-top: 5rem;
       img {
           /* width: 100%; */
           height: 60vh;
           object-fit: cover
       }
    
    
    `
const Description = styled(motion.div)`

      margin: 5rem 0rem;
      
`


export default GameDetail