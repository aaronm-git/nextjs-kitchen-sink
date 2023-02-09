import Head from '@/components/Head';
import tw from 'twin.macro';
import Container from '@/components/Container';

const Wrapper = tw.div`
bg-slate-800
text-white
min-h-screen
`;

export default function Layout({ children }) {
	return (
		<>
			<Head />
			<Wrapper>
				<Container as="main">{children}</Container>
			</Wrapper>
		</>
	);
}
