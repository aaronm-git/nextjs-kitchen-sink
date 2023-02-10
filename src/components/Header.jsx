import tw from 'twin.macro';

// components
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';

// constants
import navigationLinks from '@/constants/navigationLinks';

const BodyHeader = tw.div`
bg-slate-800
text-white
shadow-lg
border-b
border-slate-700
`;

export default function Header() {
	return (
		<BodyHeader>
			<Navbar links={navigationLinks} />
		</BodyHeader>
	);
}
