import tw, { styled, css } from 'twin.macro';
import Link from 'next/link';

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
				<HamburgerMenu />
			</NavItems>
		</Nav>
	);
}

const Nav = tw.div`
flex
justify-between
`;

const NavItems = tw.ul`
flex
justify-center
ml-auto
`;

const NavItem = styled.li((_) => [
	tw`
		transition
		ease-in-out
		duration-150
		hover:(bg-slate-700)
	`,
]);

const NavLink = tw(Link)`
block
px-3
py-4
text-gray-300
transition
ease-in-out
duration-150
hover:(text-white)
`;

const HamburgerMenu = () => {
	return (
		<button
			tw="
			text-gray-300 hover:text-white
			transition ease-in-out duration-150
			p-4 hover:bg-slate-700
			active:bg-gray-600
			"
		>
			<svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	);
};
