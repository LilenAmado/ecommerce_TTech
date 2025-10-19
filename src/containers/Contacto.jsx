import { useContext, useEffect } from 'react';
import { ProyectContext } from '../context/ProyectContext.jsx';
import Text from '../components/General/Text/Text'

const Contacto = () => {
    const { setActiveSection } = useContext(ProyectContext);

    useEffect(() => {
        setActiveSection('contact')
    }, [])
    
    return(
        <>  
            <Text element={'title'} text={'Contacto'} />
            <Text element={'paragraph'} text={'Para más información, contáctanos a través de nuestro correo electrónico'} />
        </>
    )
}

export default Contacto