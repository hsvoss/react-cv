import React from "react";

function InfoCard() {
    return (
        <div>
            <figure>
                <img src="Foto.jpg" alt="Hendrik Sebastian Voß"/>
            </figure>
            <h2>Hendrik Sebastian Voß</h2>
            <p>
                Senior Consultant at <nobr>Vision Consulting GmbH</nobr>
            </p>
            <p>I am a front-end engineer with a strong focus on interfaces and experiences working remotely
                from Düsseldorf, Germany.</p>
            <hr/>
            <p>
                <i className="fa fa-phone"/> +49 1578 5421364
            </p>
            <p>
                <i className="fa fa-envelope"/> hendrik@familievoss.org
            </p>
            <hr/>
        </div>
    );
}

export default InfoCard;
