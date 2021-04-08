import React from 'react';
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	DribbbleOutlined,
	InstagramOutlined,
	DollarCircleOutlined,
} from '@ant-design/icons';
import './footer.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<div>
				<div className='footer-icons'>
					<a href='https://github.com/khaleel-lab'>
						<GithubOutlined />
					</a>
					<a href='https://www.linkedin.com/in/khaleel-basha-dudekula-2387271bb/'>
						<LinkedinOutlined />
					</a>
					<a href='https://www.instagram.com/khaleel_lee/'>
						<InstagramOutlined />
					</a>
					{/* <a href="https://www.buymeacoffee.com/karthickr30">
     <DollarCircleOutlined />
     </a> */}
					<a href='https://personal-portfolio-3c11c.web.app/'>
						<DribbbleOutlined />
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
