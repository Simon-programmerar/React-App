import { funcBokning } from "../funcjs/bokning";
import { useEffect } from "react";

function Bokning(){
    useEffect(() => {
        funcBokning();
    }, [])

    return (
        <main className="main main-bokning"> 
            <div className="left-section">
                <div className="alternatives">
                    <button className="alt-btn" id="housing">Boende</button>
                    <span>/</span>
                    <button className="alt-btn" id="liftpass">Liftkort</button>
                </div>

                <section className="options housing">
                    <div className="text">
                        <p>På Vargen fjällanläggning erbjuder vi bekvämt och trivsamt 
                            boende mitt i fjällmiljön. Våra stugor och lägenheter är 
                            utrustade med allt du behöver för en avkopplande fjällvistelse, 
                            kom in från kylan och slappna av i en varm och välkomnande miljö. 
                            Med skidbackarna precis utanför dörren slipper du lång restid och 
                            kan maximera din tid på fjället. Hos oss kombineras det bästa av 
                            fjälläventyr med hemtrevlig komfort, oavsett om du reser ensam, 
                            som par eller med hela familjen. 
                        </p>
                    </div>
                </section>

                <section className="options liftpass">
                    <div className="text">
                        <p>Vargen fjällanläggning i Vemdalen erbjuder skidupplevelser för hela familjen. 
                            Med välpreparerade pister för alla nivåer, från nybörjarbackar till utmanande 
                            svarta nedfarter, finns det alltid något nytt att upptäcka. De välskötta 
                            liftarna tar dig smidigt upp på fjället där du möts av en storslagen vy 
                            över det Härjedalska fjällandskapet. Oavsett om du är ute efter fart och 
                            adrenalinkickar eller en lugn dag på skidor med familjen, är Vargen platsen för dig. 
                        </p>
                    </div>
                </section>
            </div>

            <div className="right-section">
                <div className="date-container">
                    <a>
                        <span>xx/xx/xx</span>
                    </a>
                    <div className="dropdown">
                        <a>
                            <img className="square" src="/Ikoner/square.svg" />
                            <img className="arrow" src="/Ikoner/chevron_down.svg" />
                        </a>
                    </div>
                </div>
                
                <div className="options-container">
                    <div className="option1">
                        <a>
                            <span>Liftkort/boende</span>
                        </a> 
                        <p>Lorem ipsum</p>
                    </div>

                    <div className="option2">
                        <a>
                            <span>Liftkort/boende</span>
                        </a> 
                        <p>Lorem ipsum </p>
                    </div>
                
                    <div className="option3">
                        <a>
                            <span>Liftkort/boende</span>
                        </a> 
                        <p>Lorem ipsum</p>
                    </div>
                </div>
            </div>

            <button className="expand-up"> 
            <img src="/Ikoner/expand_up.svg" alt="Skrolla upp" />
            </button>
        </main>
    );
}

export default Bokning