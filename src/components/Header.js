import React from 'react'
import Logo from '../images/Logo.png'
import Link from 'gatsby-link'
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div>
            
            <img src={Logo}  alt=""/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Senaven Route Logic</h1>
                <p>Sitio Oficial para la plataforma Senaven Route Logic.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Introduccion</a></li>
                <li><Link to="/docs-index">Docs</Link></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Acerca</a></li>
                
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>*/}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
