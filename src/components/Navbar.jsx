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

const NavItem = (props) => {
	return (
		<li
			css={[
				tw`px-3 py-4 transition ease-in-out duration-150`,
				css`
					& > a {
						${tw` text-gray-300 transition ease-in-out duration-150`}
					}

					&:hover {
						${tw`cursor-pointer bg-slate-700`}
						& > a {
							${tw`text-white`}
						}
					}
				`,
			]}
			{...props}
		>
			{props.children}
		</li>
	);
};

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
