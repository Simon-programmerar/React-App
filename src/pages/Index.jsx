import { funcIndex } from "../funcjs/index";
import { useEffect } from "react";

function Index(){
    useEffect(() => {
        funcIndex();
    }, [])

    return (
        <main className="main main-index"> 
            <div className="start-slideshow">
                <h1 className="title">Upplev vargen</h1>
                <div className="slider-container">
                    <div className="mySlides">
                        <div className="mySlide"><img src="Bilder/testbild1.jpg" alt="image 1" /></div>
                        <div className="mySlide"><img src="Bilder/testbild2.jpg" alt="image 2" /></div> 
                        <div className="mySlide"><img src="Bilder/testbild3.jpg" alt="image 3" /></div> 
                    </div>
                    
                    <button className="prev"> 
                    <img src="Ikoner/chevron_left.svg" alt="chevron-left" />
                    </button>
                    
                    <button className="next"> 
                    <img src="Ikoner/chevron_right.svg" alt="chevron-right" />
                    </button>

                </div>
            </div>
            
            <h2>Evenemang på vargen</h2>
            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <th>Datum</th>
                            <th>Händelse</th>
                        </tr>
                        <tr>
                            <th>15/12</th>
                            <td>Säsongsstart: Afterski med Markoolio</td>
                        </tr>
                        <tr>
                            <th>31/12</th>
                            <td>Nyårsfirande: Nyårsmeny</td>
                        </tr>
                        <tr>
                            <th>2/2</th>
                            <td>Skoterrace: Hilldrag</td>
                        </tr>
                        <tr>
                            <th>24/3</th>
                            <td>Dammrace</td>
                        </tr>
                        <tr>
                            <th>17/4</th>
                            <td>Säsongsavslutning på vargen</td>
                        </tr>
                    </tbody>
                </table>
                <p>Tabellen gäller under 2027</p>

                <div className="event-text">
                    <p>Varje år håller vi på vargen fjället i en rad roliga evenemang.
                    I år har vi bland annat laddat med massa Afterskier, dammrace,
                    artister från när och fjärran och mycket mer! Ta en kik på schemat så syns vi på vargen!   
                    </p>
                </div>
            </div>

            <h2>Nyheter</h2>
            <div className="news-container">    
                <h3>Tillbakablick: Skoterrace på vargen 2024</h3>
                
                <video controls>
                    <source src="Bilder/Skoterrace.mp4" type="video/mp4" />
                    Din webbläsare stödjer ej denna videotyp.
                </video>
            </div>
            
            <button className="expand-up"> 
            <img src="Ikoner/expand_up.svg" alt="Skrolla upp" />
            </button> 
        </main>
    );
}

export default Index