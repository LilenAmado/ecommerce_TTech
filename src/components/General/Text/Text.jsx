import { useState, useEffect} from 'react';
import './Text.css'

const Text = ({element, text}) => {
    const [clase, setClase] = useState('text');

    const setClassName = (element) => { 
        switch(element) {
            case 'important-text':
                setClase('important-text');
                return <h1 className={clase}>{text}</h1>
            case 'title':
                setClase('title');
                break;
             case 'banner':
                setClase('banner');
                break;
            case 'subtitle':
                setClase('subtitle');
                break;
            case 'description':
                setClase('description');
                break;
            case 'spam-banner':
                setClase('spam-banner');
                break;
            default:
                setClase('text');
        }
    }

    useEffect(() => {
        setClassName(element)
    }, [])

    return( <p className={clase}>{text}</p> )
    
}

export default Text