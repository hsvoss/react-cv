import React from "react";
import "./styles.css";
import experience from "./data/experience";
import CVComponent from "./CVComponent";
import education from "./data/education";
import InfoCard from "./InfoCard";
import SkillsList from "./SkillsList";


export default function App() {
    const experienceComponent = experience.map(item => (
        <>
            <h4>{item.date}</h4>
            <CVComponent item={item}/>
        </>
    ));
    const educationComponent = education.map(item => <>
        <h4>{item.date}</h4>
        <CVComponent item={item}/>
    </>);

    return (
        <div>
            <main>
                <section className="container">
                    <section className="info">
                        <InfoCard/>
                        <h2>
                            <i className="fa fa-cogs"/> Skills
                        </h2>
                        <SkillsList/>
                    </section>

                    <section className="work">
                        <h1>
                            <i className="fa fa-briefcase fa"/> Work Experience{" "}
                        </h1>
                        <div className="grid">
                            {experienceComponent}
                        </div>
                    </section>
                    <hr/>
                    <section className="education">
                        <h1>
                            {" "}
                            <i className="fa fa-university"/> Education{" "}
                        </h1>
                        <div className="grid">
                            {educationComponent}
                        </div>
                    </section>

                    <section className="other">
                        <h1>
                            {" "}
                            <i className="fa fa-desktop"/> Other Interests{" "}
                        </h1>
                        <h3> Ayurveda</h3>
                        <ul>
                            <li>
                                <i className="fa fa-book"/> Meditation
                            </li>
                            <li>
                                <i className="fa fa-book"/> Yoga
                            </li>
                        </ul>
                        <h3>Sustainability</h3>
                        <ul>
                            <li>Reducing waste</li>
                            <li>Build a sustainable wardrobe</li>
                        </ul>
                    </section>
                </section>
            </main>
            <footer className="footer">
                <p>Paula Latorre</p>
                <i className="fa fa-facebook-square"/>
                <i className="fa fa-instagram"/>
                <i className="fa fa-github"/>
                <i className="fa fa-linkedin-in"/>- Foocoding assigment: Resume
            </footer>
        </div>
    );
}
