import { GlobalStyles } from 'twin.macro';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
