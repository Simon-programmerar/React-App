function Restaurang(){
    return (
        <main className="main main-restaurang"> 
            <div className="restaurant-text">
            <h2>Restaurang Vargen</h2>
            <p>Välkommen till Vargens restaurang, hjärtat av fjällupplevelsen
                i Vemdalen. Hos oss serverar vi allt från rustika lunchrätter 
                och hemlagad fika till en fullständig middagsmeny med lokalt 
                inspirerade smaker — perfekt efter en dag i backarna eller 
                spåret. Slå dig ner i vår värdshusliknande miljö, känn värmen 
                från brasan och låt oss ta hand om dig med mat och dryck i 
                världsklass. Oavsett om du söker en snabb energipåfyllning eller 
                en avslappnad middag med sällskapet, har Vargen något för alla.
            </p>
            </div>
            
            <div className="slider-container-restaurant">
                <div className="menus">
                    <button className="prev-restaurant"> 
                    <img src="/Ikoner/chevron_left.svg" alt="chevron-left" />
                    </button>
                    
                    <button className="next-restaurant"> 
                    <img src="/Ikoner/chevron_right.svg" alt="chevron-right" />
                    </button>

                    <div className="restaurant-menu">
                        <div className="menu"><img src="/Bilder/vargen-meny.jpg" alt="huvud-menyn" /></div>
                        <div className="menu"><img src="/Bilder/vargen-pizzameny.jpg" alt="pizza-menyn" /></div>
                        <div className="menu"><img src="/Bilder/vargen-dessert,barnmeny.jpg" alt="dessert,barn-menyn" /></div>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <h2>För middagsbokningar: Använd gärna formuläret nedan eller ring oss!</h2>
                <form action="mailto:simon.jonsson01@gmail.com" method="post" encType="text/plain">
                    <label htmlFor="info">Ange namn på bokare, antal personer i sällskapet, 
                        e-postadress och önskat datum och tid nedan så 
                        återkommer vi med svar inom 1 dag.</label>
                        <br /><br />
                    
                    <label htmlFor="name">För- och efternamn</label>
                    <br />
                    <input type="text" id="name" name="name" />
                    <br /><br />
                    
                    <label htmlFor="numpeople">Storlek på bokningen</label>
                    <br />
                    <select id="numpeople" name="numpeople">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="Fler">Fler</option>
                    </select>
                    <br /><br />

                    <label htmlFor="email">E-post</label>
                    <br />
                    <input type="email" id="email" name="email" />
                    <br /><br />
                    
                    <label htmlFor="date">Datum</label>
                    <br />
                    <input type="date" name="bokningsdatum" />
                    <br /><br />


                    <label htmlFor="times">Tider</label>
                    <br />
                    <select id="times" name="times">
                        <br />
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                    </select>
                    <br /><br />

                    <input type="submit" value="Skicka" />
                    <input type="reset" name="reset" id="reset" value="Återställ formuläret" />
                </form>
            </div>
            
            <button className="expand-up"> 
            <img src="/Ikoner/expand_up.svg" alt="Skrolla upp" />
            </button>
        </main>
    );
}

export default Restaurang