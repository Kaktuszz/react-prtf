import classes from "./LinksAndButton.module.css";
import { useEffect, useState } from "react";



const LinksAndButton =(props)=>{

    const [show, setShow] = useState(false);

    const showHandler =()=>{
        setShow(true);
    }

    useEffect(()=>{
         setInterval(()=>{
            showHandler();
        }, 500);
       
    }, [])

    if(props.link){
        return <a href={props.link}><button onClick={props.func} className={`${classes.linker} ${show === true ? `${classes.display}` : ""}`} alt={props.alt}>{props.children}</button></a>
    }else{
        return <button onClick={props.func}  className={`${classes.linker} ${show === true ? `${classes.display}` : ""}`}>{props.children}</button>
    }
    
}


export default LinksAndButton;