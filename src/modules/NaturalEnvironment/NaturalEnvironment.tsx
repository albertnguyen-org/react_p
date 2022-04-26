import React from "react";
import "./NaturalEnvironment.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const NaturalEnvironment = () => {
	return <div className='ne-container' style={{ "backgroundImage": "url(\"https://cdn.trendhunterstatic.com/thumbs/invisible-studio.jpeg\")", "objectFit": "contain" }}>
		{/* Header */}
		<header className='ne-container__header'>
			{/* Logo */}
			<div className='logo-wrapper'>
				<img alt='ne-logo' src="https://t3.ftcdn.net/jpg/03/56/46/10/360_F_356461066_rUflx03xPKYXEGe36Ecslg2ilEnWsAHa.jpg" className='logo' />
			</div>
			{/* Navigation menu */}
			<nav>
				<a href='#'>About us</a>
				<a href='#'>Projects</a>
				<a href='#'>News</a>
				<a href='#'>Contact us</a>
			</nav>

			{/* User button with icon */}
			<button onClick={() => { console.log("Clicked user icon"); }} className='btn--transparent'>
				<FontAwesomeIcon icon={faUser} className='icon' />
			</button>

			{/* Search button with icon */}
			<button onClick={() => { console.log("Clicked user icon"); }} className='btn--transparent'>
				<FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
			</button>

		</header>
		<div className='row ne-container__content'>

			<div className='left-side'>

			</div>

			<section className='column center'>
				<p>2022</p>
				<h1>Natural Environment</h1>
				<span>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
				</span>

				<div>
					<button className='btn--primary'>
						<p>Explore</p>
					</button>
				</div>
			</section>

			<aside className='right-side'>
				{/* TODO: Tab session here ... */}
			</aside>
		</div>
		{/* Footer */}
		<footer className='row--space-between ne-container__footer'>
			<div className='row artch-wrapper'>
				<div className='column'>
					<p>Architect</p>
					<p>Alexander</p>
				</div>
				<div className='column'>
					<p>Architect</p>
					<p>Sergey Makhno</p>
				</div>
				<div className='column'>
					<p>Architect</p>
					<p>Carpathians</p>
				</div>
			</div>

			<div className='btns-wrapper'>
				<button id="previous" className='btn--primary' onClick={() => console.log("Click on previous button")}>

					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<button id="next" className='btn--primary' onClick={() => console.log("Click on next button")}>
					<FontAwesomeIcon icon={faAngleRight} className='icon' />
				</button>
			</div>
		</footer>
	</div>;
};


export default NaturalEnvironment;