import tw from 'twin.macro';
import Container from '@/components/Container';
import Header from '@/components/Header';

const Wrapper = tw.div`
bg-slate-800
text-white
min-h-screen
`;

export default function Layout({ children }) {
	return (
		<Wrapper>
			<Header />
			<Container as="main">{children}</Container>
		</Wrapper>
	);
}
