
function OmOss(){
    return (
        <main className="main main-omoss"> 
            <div className="slider-container1">
                <div className="about">
                    <div className="pictures">
                        <div className="picture"><img src="Bilder/om-oss-bild1.jpg" alt="huvud-menyn" /></div>
                        <div className="picture"><img src="Bilder/vargen-pizzameny.jpg" alt="pizza-menyn" /></div>
                        <div className="picture"><img src="Bilder/vargen-dessert,barnmeny.jpg" alt="dessert,barn-menyn" /></div>
                    </div>
                </div>
            </div>

            <div className="slider-container2">
                <div className="about">
                    <button className="prev-about"> 
                        <img src="Ikoner/chevron_left.svg" alt="chevron-left" />
                    </button>
                    
                    <button className="next-about"> 
                        <img src="Ikoner/chevron_right.svg" alt="chevron-right" />
                    </button>
                    <div className="pictures">
                        <div className="picture"><img src="Bilder/om-oss-bild.jpg" alt="huvud-menyn" /></div>
                        <div className="picture"><img src="Bilder/vargen-pizzameny.jpg" alt="pizza-menyn" /></div>
                        <div className="picture"><img src="Bilder/vargen-dessert,barnmeny.jpg" alt="dessert,barn-menyn" /></div>
                    </div>
                </div>
            </div>
            
            <div className="omoss-text">
                <h3>Vargen fjällanläggning</h3>
                <p>Mysiga Vargen är den perfekta utgångspunkten för en lyckad fjällvistelse. 
                    Vi har öppet med fika, lunch och middag i PUB eller Värdshusmiljö! 
                    Kom förbi och mys i soffan framför brasan med något gott att dricka och äta. 
                    Hos oss upplever du fjället i din egen takt, i skidspåret, 
                    i backen på skoter eller varför inte inne hos oss framför brasan med något gott att dricka och äta! 
                    Välkommen till Vargen!
                </p>
            </div>

            <button className="expand-up"> 
            <img src="Ikoner/expand_up.svg" alt="Skrolla upp" />
            </button>
        </main>
    );
}

export default OmOss