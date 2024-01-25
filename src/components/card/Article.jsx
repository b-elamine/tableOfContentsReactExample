import React from 'react'
import "./Card.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export const Article = ({
    title,
    description,
    code,
    img
}) => {
  return (
    <div className='card-container'>
        <h3 style ={{marginBottom:"1rem", paddingTop:"2rem"}} className='card-title'>{title}</h3>   
        <p style ={{marginBottom:"1rem"}} className='card-description'>{description}</p>
        <SyntaxHighlighter language="python" style={darcula}>
        {code}
      </SyntaxHighlighter>
      {img && <img style={{width:"100%", border:"1px solid #7da5fa"}} src={img} alt="" />}
    </div>
    
  );
}

export default Article