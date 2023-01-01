import { createContext , useState } from "react";

export const modalContext = createContext() ;

const ContextState = (props) => {

    const [showModal, setshowModal] = useState({
        show: false, 
        type: ''    
    })

    const showSubmitModal = ( type ) => {
        setshowModal({
            show: true,
            type : type
        })
        setTimeout(() => {
            setshowModal({
                show: false,
                type: '' 
            })
        }, 2250);
    }

    return (
        <modalContext.Provider value={{ showModal, setshowModal, showSubmitModal }} >
            {props.children}
        </modalContext.Provider>
    )
}

export default ContextState;