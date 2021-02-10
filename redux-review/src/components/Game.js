import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import  {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'
import {smallImage} from '../util'
const Game = ({name,released,id,image}) => {
  const dispatch = useDispatch()

 const loadDetailHandler =() => {
     document.body.style.overflow ="hidden"
     dispatch(loadDetail(id))
     
 }
  return (
        <StyledGame onClick ={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <h3>
             {name}
            </h3>
            <p>
           Released date: {released}
            </p>
            <img src={smallImage(image,640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2)
text-align center;
border-radius: 1rem;
cursor: pointer;
/* overflow: hidden */

   img {
       width: 100%
   }

`
export default Game