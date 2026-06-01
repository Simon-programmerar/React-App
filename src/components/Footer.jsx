import { NavLink, Link } from "react-router-dom";

function Footer(){
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Kontakta oss</h3>
                <p>Telefon - +4668431100</p>
                <p>Email - vargenfjallet@gmail.com</p>
                <p>Adress - <NavLink to = "https://maps.google.com/?q=Vemdalsskalet+Gamla+landsvägen+34">Vemdalsskalet Gamla landsvägen 34</NavLink></p>
            </div>

            <div className="socials">
                <h3>Sociala medier</h3>
                <p><NavLink to = "https://www.instagram.com/vargenfjallet">Instagram</NavLink></p>
                <p><NavLink to = "https://www.facebook.com/Vemdalsvargen/directory_specialties">Facebook</NavLink></p>
                <p><NavLink to = "https://www.tripadvisor.se/Restaurant_Review-g1143849-d15812641-Reviews-Vargens_Fjallanlaggning-Vemdalen_Jamtland_County_Jamtland_and_Harjedalen.html">Tripadvisor</NavLink></p>
            </div>

            <div className="open">
                <h3>Öppettider</h3>
                <p>Måndag - Torsdag: 15.00 - 22.00</p>
                <p>Fredag - Lördag: 12.00 - 00.00</p>
                <p>Söndag: 12.00 - 16.00</p>            
            </div>
        </footer>
    );
}

export default Footer