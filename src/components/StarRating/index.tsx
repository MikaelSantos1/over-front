import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from 'react-icons/fa'
export function StarRating() {
    const [rating,setRating]= useState(0)
    const [hover,setHover]=useState(0)
  
    return (

        <Box>
            {[...Array(5)].map((star, i) => {
                const ratingValue= i + 1
                return (
                    <label>
                        <input 
                        type='radio' 
                        name='rating' 
                        style={{display:'none'}}
                        value={ratingValue}
                        onClick={()=>setRating(ratingValue)}
                       
                         />
                        <Icon
                        pl='5px'
                        w='25px'
                        h='25px'
                        cursor='pointer' 
                        as={FaStar}  
                        color={ratingValue<= (hover || rating)?"yellow":'white.900'}
                         onMouseEnter={()=>setHover(ratingValue)}
                         onMouseLeave={()=>setHover(0)}/>
                    </label>
                )
            })}

        </Box>
    )
}