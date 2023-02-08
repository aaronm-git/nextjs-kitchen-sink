import { Global, css } from '@emotion/react';
import Layout from '@/components/Layout';
import tailwindDirectives from '/node_modules/tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Global styles={tailwindDirectives} />
			<Component {...pageProps} />
		</Layout>
	);
}
