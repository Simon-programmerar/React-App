import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { funcGlobal } from "../funcjs/Global-script";
import { searchOnEnter } from "../funcjs/Global-script";

function Navigation(){
    useEffect(() => {
        funcGlobal();
    }, [])

    return (
        <nav className="nav">
            <ul>
                <NavLink to = "/" className="nav-logo">
                    <img src="/Bilder/VargenLogga1.png" alt="Vargen logga" />
                </NavLink>
                
                
                <li><NavLink to = "/Restaurang" className="restaurang">
                        <img className="nav-icons" src="/Ikoner/restaurant.svg" alt="restaurant-icon" />
                        <span>Restaurang</span>
                    </NavLink>
                </li>

                <li><NavLink to = "/Bokning" className="bokning">
                        <img className="nav-icons" src="/Ikoner/chalet.svg" alt="chalet-icon" />
                        <span>/</span>
                        <img className="nav-icons" src="/Ikoner/skiing.svg" alt="skiing-icon" />
                        <span>Bokning</span>
                    </NavLink>
                </li>

                <li><NavLink to = "/Allservice" className="allservice">
                        <img className="nav-icons" src="/Ikoner/handyman.svg" alt="handyman-icon" />
                        <span>Allservice</span>
                    </NavLink>
                </li>
                    
                <li><NavLink to = "/Om-oss" className="om-oss">
                        <span>Om oss</span>
                    </NavLink>
                </li>
            </ul>

            <div className="nav-search">
                <img className="search-icon" src="/Ikoner/search.svg" alt="search-icon" />
                <input className="search-bar" type="search" placeholder="Sök" onKeyDown={(e) => searchOnEnter(e)} />
            </div>

            <div className="nav-language-icon">
                <img src="/Bilder/sprakfunktion.png" alt="språkfunktion" />
            </div>
        </nav>
    );
}

export default Navigation