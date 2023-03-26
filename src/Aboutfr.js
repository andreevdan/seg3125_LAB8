import React from 'react';
import './About.css';
import HelpButton from './HelpButton';

const Aboutfr = () => {
return (
<div className="about-us">
<h1 style={{marginTop: 50}} className='title'>À propos de nous</h1>
<div className='help'><HelpButton/></div>
<p>Bonjour! Bienvenue sur notre site web! Nous sommes un groupe de quatre étudiants de l'uOttawa qui ont décidé de créer un site web qui informe les utilisateurs sur la façon dont diverses voitures se comparent les unes aux autres. Nous espérons que vous apprécierez notre site web, et si vous avez des préoccupations ou des questions, n'hésitez pas à nous contacter à l'adresse suivante : <a href="mailto:favouritecars@gmail.com">favouritecars@gmail.com</a>.</p>
<h2 className='title'>Notre équipe</h2>
<p>Notre mission est de fournir aux utilisateurs des informations fiables sur la manière dont divers aspects des voitures sont évalués et perçus afin de faciliter l'achat de voitures.</p>
<h2 className='title'>Notre équipe</h2>
<div style={{textAlign:'center'}}>
<ul>
<li>Azan Mubashar</li>
<li>Evan Zeglinski-Spinney</li>
<li>Daniel Andreev</li>
<li>Terrence Manly-Elliott</li>
</ul>
</div>
</div>
);
};

export default Aboutfr;