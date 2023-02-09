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
transition
ease-in-out
duration-150
hover:(bg-slate-700)
`;

const NavLink = tw(Link)`
block
px-3
py-4
text-gray-300
transition
ease-in-out
duration-150
`;

export default function Navbar({ links }) {
	return (
		<Nav>
			<NavItems>
				{Object.keys(links).map((linkName, index) => {
					const url = links[linkName];
					return (
						<NavItem key={index}>
							<NavLink href={url}>{linkName}</NavLink>
						</NavItem>
					);
				})}
			</NavItems>
		</Nav>
	);
}
