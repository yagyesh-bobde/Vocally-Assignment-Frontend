import React, { useContext } from 'react'
import { About, Main, Nav } from '../Components'
import Socials from '../Components/Footer/Socials';
import SubmitFail from '../Components/Modals/SubmitFail';
import SubmitSuccess from '../Components/Modals/SubmitSuccess';
import { modalContext } from '../Context/modals';

const Home = () => {

  const { showModal } = useContext(modalContext);
  
  return (
    <div>
        <Nav />
        <Main />
        <About />
      { (showModal.show )? showModal.type === 'success' ? <SubmitSuccess /> : <SubmitFail /> : ""}
    </div>
  )
}

export default Home