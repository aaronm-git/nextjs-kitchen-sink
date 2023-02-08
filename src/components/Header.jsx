import tw from 'twin.macro';

const Header = tw.div`
px-6
py-4
bg-blueGray-800
text-white
text-2xl
font-bold
uppercase
shadow
`;

export default function BodyHeader() {
	return (
		<Header>
			<h1>Body Header</h1>
		</Header>
	);
}
