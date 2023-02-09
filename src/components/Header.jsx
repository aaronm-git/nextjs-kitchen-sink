import tw from 'twin.macro';

// components
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';

// constants
import navigationLinks from '@/constants/navigationLinks';

const HeaderDiv = tw.div`
bg-slate-800
text-white
shadow-sm
`;

export default function Header() {
	return (
		<HeaderDiv>
			<Container>
				<Navbar links={navigationLinks} />
			</Container>
		</HeaderDiv>
	);
}
