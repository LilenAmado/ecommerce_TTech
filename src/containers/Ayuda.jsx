import { useContext, useEffect } from 'react';
import { ProyectContext } from '../context/ProyectContext.jsx';
import Text from '../components/General/Text/Text'

const Ayuda = () => {
    const { setActiveSection } = useContext(ProyectContext);

    useEffect(() => {
        setActiveSection('help')
    }, [])

    return(
        <>
            <Text element={'title'} text={'Ayuda'} />            
        </>
    )
}

export default Ayuda