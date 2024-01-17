import '../App.css'
import '../images/search.svg'
import '../images/shopping-bag.svg'
import '../images/spaLogo 2.svg'
import '../images/user.svg'


export const Header =()=> {
    return (
        <>
        <div classname="header">
        <div classname="logo">
          <img src="../images/spaLogo 2.svg" alt="spaLogo" />
          <p classname="logoText">Luxe Animal Spa</p>
        </div>
        <div classname="navigation">
          <button>Home</button>
          <button>Products</button>
          <button>Spa Services</button>
          <button>Book Appointment</button>
          <button>Blog</button>
          <button>About Us</button>
          <button>Contat Us</button>
        </div>
        <div classname="pocket">
          <button>
            <img src="../images/search.svg" alt="search" />
          </button>
          <button>
            <img src="../images/shopping-bag.svg" alt="bag" />
          </button>
          <button>
            <img src="../images/user.svg" alt="user" />
          </button>
        </div>
      </div>
      </>
    );
  }


