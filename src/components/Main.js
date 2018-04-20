import React from 'react'
import Link from 'gatsby-link'

import flota from '../images/flota.jpg'
import pic02 from '../images/pic02.jpg'
import Logo from '../images/Logo.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={flota}  height="500" alt="" /></span>
           <h2>Senaven Route Logic</h2>
           <p>Por varios años Senaven ha diseñado sus rutas de despacho mediante un software de escritorio denominado <i>ArcLogistic</i> : una potente herramienta que utiliza 
           datos provenientes de sistemas de información
           geográficos para generar rutas optimizadas a flotas vehiculares. Administrando solamente la información de localización geografica de nuestros clientes mediante sus coordenadas geográficas, 
           y empleando cartografía digital actualizada, 
           este software permitia que una persona, sin conocimientos previos de localizacion urbana, y un mínimo de capacitación, pudiese preparar diariamente rutas zonificadas 
           de entrega de mercancias.</p>
           <p>Con el paso del tiempo y la evolucion de las tecnologías de la información en la nube y de desarrollo, ArcLogistic ha ido quedando rezagado,
            en vista que aún depende de datasets locales obsoletos. 
           Los diversos servicios cartográficos digitales en línea han abierto el camino a nuevas perspectivas de desarrollo en la solución de problemas comerciales, tales como la logística. </p>
           <p>Por esa razón hace varios años hemos estado explorando alternativas tecnológicas que permitan remplazar nuestros viejos sitemas de trabajo. En el caso de la logistica de despacho, hemos propuesto un sistema 
           desarrollado en casa, con servicios de solucion y algoritmos en la nube.</p>
           <h3>SRL</h3>
           <p>Les presento Senaven Route Logic (SRL), una plataforma en dos 
           ambientes: web y móvil. Esta plataforma esta programada o 
           desarrollada enteramente en leguaje Javascript. Es de tipo cliente-servidor, 
           es decir, que esta diseñada desde cero completamente integrada entre sus partes 
           y adaptada especialmente para los flujos de trabajo 
           existentes en la empresa. En otras partes de este sitio web, estaré presentando 
           la documentación 
           técnica más detallada sobre su arquitectura tecnológicas o stacks que la integran. </p>
           <p>Mi esperanza es que esta propuesta haga crecer significativamente
            la capacidad competitiva de nuestra empresa y le permita generar rendimientos 
           positivos mediante procesos operativos más eficientes.</p>

           
           <div style={{fontSize:"14px",}}>
           <span>Lic. Luis A. Solano</span><br/>
           <span>Departamento de Computo</span>
           <p >Sistemas de Informacion Geográficas y Desarrollo</p>
           </div>
           
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Acerca de</h2>
          <span className="image main"><img src={Logo} alt="" /></span>
           <p>Senaven Route Logic es un desarrollo de programación desde cero. 2018. &copy; Derechos de Autor Reservados para la empresa Senaven S.A.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main