import Head from '@/components/Head';
import tw from 'twin.macro';
import Container from '@/components/Container';

const Wrapper = tw.div`
bg-slate-800
text-white
min-h-screen
`;

const Main = tw(Container)`
text-white
bg-orange-500
`;

export default function Layout({ children }) {
	return (
		<>
			<Head />
			<Wrapper css={tw`bg-slate-800 text-white`}>
				<Main>{children}</Main>
			</Wrapper>
		</>
	);
}
