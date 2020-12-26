import React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

/*
export default function Header() {
  return (
    <div className={headerContainer}>
      <h1 className={headerStyle}>Pinoygram</h1>
      <Link to="/" className={linkStyle}>All Selfies</Link>
      <Link to="/myposts" className={linkStyle}>My Posts</Link> 
    </div>
  )
}
*/


export default function Header() {
  return (
    <div className={headerContainer}>
      <h1 className={headerStyle}>Pinoygram by Oktank</h1>
      <Link to="/" className={linkStyle}>All Selfies</Link>
    </div>
  )
}

const headerContainer = css`
  padding-top: 20px;
`

const headerStyle = css`
  font-size: 40px;
  margin-top: 0px;
`

const linkStyle = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  :hover {
    color: #058aff;
  }
`