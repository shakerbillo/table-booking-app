import React from 'react';
import { Link } from 'react-router-dom';
import chef from '../../../assets/images/Mario and Adrian A.jpg';
import bar from '../../../assets/images/bar.jpg';
import './About.css';

const About = () => {
	return (
		<div className="about">
			<div className="about-text">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p className="about-subtext">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
					necessitatibus, quibusdam eum ut iusto natus soluta maiores odit
					dignissimos aperiam impedit corrupti mollitia tenetur iste ab beatae
					vero distinctio suscipit? Exercitationem eligendi animi, sit eum
					excepturi illum omnis et qui. Nostrum blanditiis, iure distinctio
					laboriosam iusto commodi illum perferendis autem, quisquam, nesciunt
					optio labore molestias ut eveniet laudantium earum quis? Ipsum officia
					ipsa dignissimos incidunt laborum aliquam eum quibusdam, voluptas
					alias repudiandae inventore delectus expedita sint quae enim
					cupiditate quo qui. Veniam similique aliquam fuga facere perspiciatis
					quibusdam totam quas!
				</p>
			</div>
			<div className="about-image">
				<img className="bar" src={bar} alt="bar" />
				<img className="chef" src={chef} alt="chef" />
			</div>
		</div>
	);
};

export default About;
