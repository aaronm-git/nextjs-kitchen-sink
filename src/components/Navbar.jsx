import tw, { css } from 'twin.macro';
import Link from 'next/link';

const Nav = tw.div`
flex
justify-between
`;

const NavItems = tw.ul`
flex
justify-center
ml-auto
`;

const NavItem = tw.li`
py-4
px-3
capitalize
last:pr-0
first:pl-0
`;

export default function Navbar({ links }) {
	return (
		<Nav>
			<NavItems>
				{Object.keys(links).map((link, index) => (
					<NavItem key={index}>
						<Link href={link}>{Object.keys(links)[index]}</Link>
					</NavItem>
				))}
			</NavItems>
		</Nav>
	);
}
