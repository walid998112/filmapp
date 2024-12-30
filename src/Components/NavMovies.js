import { useState } from "react";
import "../App.css"
import FilterMovies from "./FilterMovies"
import SignUpModal from "./SignUpModal";
import AvatarModal from "./AvatarModal";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom"

const NavMovies=({search,setSearch})=>{
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAvatarOpen, setAvatarOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const handleAvatarOpen = () => setAvatarOpen(true);
  const handleAvatarClose = () => setAvatarOpen(false);

  const handleLoginOpen = () => {
    setAvatarOpen(false); // Close Avatar Modal
    setLoginOpen(true);
  };

  const handleLoginClose = () => setLoginOpen(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
    return(
      <nav className="nav-movies">
      <div className="nav-left">
        <img 
          src="https://www.pathe.tn/assets/source/img/logo-international-white.svg" 
          alt="Logo" 
          className="nav-logo" 
        />
        <ul className="nav-links">
        <Link to='/'><li>Home</li></Link>
        <Link to='/Movies'><li>Movies</li></Link>
        <Link to='/Add'><li>Offres</li></Link>
        </ul>
        <FilterMovies search={search} setSearch={setSearch}/>
      </div>
      <div className="nav-right">
        <a href="#creer-compte" className="create-account" onClick={handleModalOpen}>
          Créer un compte
        </a>
        <SignUpModal isOpen={isModalOpen} onClose={handleModalClose} openLoginModal={handleLoginOpen} />
      </div>
      <div className="nav-right">
        <img 
          src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
          alt="Avatar"
          className="avatar"
          onClick={handleAvatarOpen}
        />
      </div>
      <AvatarModal
        isOpen={isAvatarOpen}
        onClose={handleAvatarClose}
        openLoginModal={handleLoginOpen}
        handleModalOpen={handleModalOpen}
      />
      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} handleModalOpen={handleModalOpen}/>
    </nav>
    )
        
    
}

export default NavMovies