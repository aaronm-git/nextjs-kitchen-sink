import tw, { styled } from 'twin.macro';
import Link from 'next/link';

export default function Navbar({ links }) {
	return (
		<Nav>
			<HamburgerMenu />
			<NavItems>
				{Object.keys(links).map((linkName, index) => {
					const url = links[linkName];
					return (
						<NavItem
							key={index}
							onClick={() => {
								document.getElementById('hamburger-menu').checked = false;
							}}
						>
							<NavLink href={url}>{linkName}</NavLink>
						</NavItem>
					);
				})}
			</NavItems>
		</Nav>
	);
}

const Nav = tw.div`
flex
justify-between
relative
md:container
mx-auto
`;

const NavItems = tw.ul`
hidden
md:(flex static justify-end ml-auto border-y-0)!
peer-checked:(block)
absolute 
top-14 
left-0 
w-full 
shadow-sm 
bg-slate-800 
border-y 
border-y-slate-600
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
hover:(text-white)
`;

const HamburgerMenu = () => {
	return (
		<>
			<input id="hamburger-menu" type="checkbox" tw="hidden" className="peer" />
			<label
				htmlFor="hamburger-menu"
				tw="
				select-none
				md:hidden
				p-4
				text-gray-300
				transition 
				duration-150
				ease-in-out 
				hover:(text-white bg-slate-700 cursor-pointer)
				peer-checked:(text-white bg-slate-600)
				"
			>
				<svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</label>
		</>
	);
};
