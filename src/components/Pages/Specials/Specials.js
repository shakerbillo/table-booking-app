import React from 'react';
import { Link } from 'react-router-dom';
import food1 from '../../../assets/images/bruschetta.jpeg';
import food2 from '../../../assets/images/greek salad.jpg';
import food3 from '../../../assets/images/lemon dessert.jpg';
import './Specials.css';

const Specials = () => {
	return (
		<div className="specials">
			<div className="specials-topbar flex-container">
				<h1>This Week's special</h1>
				<Link className="action-button order-delivery-link" to="/order">
					Order Delivery
				</Link>
			</div>

			<div className="card-container">
				<div className="card">
					<img src={food1} alt="Classic Leather Watch" />
					<h2>Greek Salad</h2>
					<div className="price">$9.99</div>
					<p>
						The famous greek salad of crispy lettuce, peppers, olives and our
						Chicago style feta cheese, garnished with crunchy garlic and
						rosemary croutons.
					</p>
					<Link className="special-button" to="/order">
						Order Delivery
					</Link>
				</div>

				<div className="card">
					<img src={food2} alt="Classic Leather Watch" />
					<h2>Bruschetta</h2>
					<div className="price">$7.99</div>
					<p>
						Our Bruschetta is made from homemade grilled bread that has been
						smeared with garlic and seasoned with salt and olive oil. Topped
						with fresh vegetables.
					</p>
					<Link className="special-button" to="/order">
						Order Delivery
					</Link>
				</div>

				<div className="card">
					<img src={food3} alt="Classic Leather Watch" />
					<h2>Lemon Cake</h2>
					<div className="price">$2.99</div>
					<p>
						This comes straight from grandma’s recipe book, every last
						ingredient has been sourced and is as authentic as can be imagined.
					</p>
					<Link className="special-button" to="/order">
						Order Delivery
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Specials;
