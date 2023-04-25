import {useState} from 'react'
import { FcLike } from 'react-icons/fc'
import { AiFillHeart } from 'react-icons/ai'

interface Props {
    onLike: () => void;
}

function Like({ onLike }: Props) {
    const [isLiked, setLikeStatus] = useState(false); // In real app, dont set state in the component

    const toggle = () => {
      onLike();
      setLikeStatus(!isLiked);
    };

  return ( <div>
    {isLiked ? 
        <FcLike size='40px' onClick={toggle}/> : 
        <AiFillHeart size='40px' onClick={toggle}/>}
    </div>
  )
}

export default Like