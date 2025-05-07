import { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars , faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex">
            <div className="logo flex">
            <img src="assets/images/softiner.png" alt="logo" />
            </div>

            <div className="nav-bar">
                <ul className="flex">
                    {/* <li><Link to="/timeline">قصتنا</Link></li>  */}
                    <li> <a>الرئيسية</a></li>
                    <li>  <a>المفقودات</a></li>
                    <li>  <a>الخدمات</a></li>
                    <li>  <a>التواصل</a></li>
                </ul>
            </div>
            <button className="user-button" >
                <FontAwesomeIcon icon={faUser} />
            </button>

            <button className="menu-button" onClick={() => setShowMenu(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            {showMenu && (
                <div className="fixed">
                    <ul className="menu-box">
                        <li>
                            <button className="close-icon" onClick={() => setShowMenu(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </li>    
                    <li> <a>الحساب</a></li>   
                     <li> <a>الرئيسية</a></li>
                    <li>  <a>المفقودات</a></li>
                    <li>  <a>الخدمات</a></li>
                    <li>  <a>التواصل</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}