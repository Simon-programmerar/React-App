function Allservice(){
    return (
        <main className="main main-allservice"> 
            <div className="omoss-text-allservice">
                <h3>Vargen allservice</h3>
                <p>Välj den tjänst som passar bäst, om du inte vet så finns vi alltid för att konsultera kring ditt behov!</p>
            </div>
            <div className="container1">
                <div className="service-modules">
                    <a>
                        <img className="allservice-icons" src="/Ikoner/hardware.svg" alt="hammer" />
                        <span>Snickeri</span>
                    </a>
                </div>
            </div>

            <div className="container2">
                <div className="service-modules">
                    <a>
                        <img className="allservice-icons" src="/Ikoner/skottning.svg" alt="shovel" />
                        <span>Snöskottning</span>
                    </a>
                </div>
            </div>

            <div className="container3">
                <div className="service-modules">
                    <a>
                        <img className="allservice-icons" src="/Ikoner/snowmobile.svg" alt="snowmobile" />
                        <span>Skoter tjänster</span>
                    </a>
                </div>
            </div>

            <div className="container4">
                <div className="service-modules">
                    <a>
                        <img className="allservice-icons" src="/Ikoner/konsultation.svg" alt="konsultation" />
                        <span>Konsultation</span>
                    </a>
                </div>
            </div>
            
            <button className="expand-up"> 
                <img src="/Ikoner/expand_up.svg" alt="Skrolla upp" />
            </button>
        </main>
    );
}

export default Allservice