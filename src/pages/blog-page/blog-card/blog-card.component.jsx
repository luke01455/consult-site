import React, { useState, useEffect } from 'react';
import './blog-card.styles.scss';

const BlogCard = ({ title, text, imgLoc }) => {
    return (
        <div className='blog-card-container'>
            <div className='blog-card-wrapper'>
                <div className='blog-card-image'>
                <img className='blog-picture' src={require('../../../assetts/blogs/' + imgLoc + '.png')}/>
                </div>
                <div className='blog-card-bottom-text'>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <a> Read more </a>
                </div>
            </div>
        </div>
    )
}
export default BlogCard;