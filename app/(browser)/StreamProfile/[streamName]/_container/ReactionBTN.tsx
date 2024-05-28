'use client'

import { Heart } from 'lucide-react'
import React, { useState } from 'react'

const ReactionBTN = () => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked); 
      };
    

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Heart color="#b28228" fill={liked ? '#b28228' : 'none'} strokeWidth={2} size={24} />
    </div>

  )
}

export default ReactionBTN