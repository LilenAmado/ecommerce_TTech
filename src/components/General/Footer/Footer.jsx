import './Footer.css'

const Footer = () =>{
  const year = new Date().getFullYear();
  return (
    <>
      <footer> 
        <p>© {year} - Todos los derechos reservados - AGORA </p>
        <div className='social-media'>
          <a href="" target="_blank" rel="noopener noreferrer">Facebook</a> 
          <a href="" target="_blank" rel="noopener noreferrer">Instagram</a> 
          <a href="" target="_blank" rel="noopener noreferrer">Correo</a> 
        </div>
      </footer>
    </>
  )
}

export default Footer
