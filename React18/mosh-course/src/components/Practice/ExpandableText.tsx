import React, { useState } from 'react'
import Button from './Button';

interface Props {
    maxChars?: number;
}

export const ExpandableText = ({maxChars = 4}: Props) => {
    const [text, setText] = useState(
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam similique quos ipsa excepturi a recusandae consequuntur adipisci voluptatem explicabo laborum. Commodi odio ipsam harum minima accusamus iure debitis libero obcaecati. Error, modi cum fuga dolor tenetur quam aspernatur nesciunt asperiores ea dolores consequatur numquam molestias illo dignissimos iusto doloremque aliquid ullam mollitia porro quos! Provident porro iusto, nam obcaecati nemo ullam tempora at dolorum, explicabo aliquid repellat earum quae est molestias facere reprehenderit cupiditate necessitatibus velit fugiat. Vel ducimus delectus accusantium laudantium, consectetur blanditiis quibusdam saepe debitis numquam ullam iure minus asperiores totam neque? Quam impedit dolorem facilis iusto aliquid."
    );
    const [isExpanded, setExpanded] = useState(false)

    if (text.length <= maxChars) return <p>{text}</p>

    const visibleText = isExpanded ? text : text.slice(0, maxChars) + "..."
    const handleExpansion = () => {
        setExpanded(!isExpanded);
    }
  return (
    <div>
        {visibleText} <button onClick={handleExpansion}>{isExpanded ? "Less" : "More"}</button>
    </div>
  )
}
