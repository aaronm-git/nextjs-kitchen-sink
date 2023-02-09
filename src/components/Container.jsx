import tw from 'twin.macro';

const Container = tw.div`
container
mx-auto
`;

export default function ContainerComponent(props) {
	return (
		<Container {...props} css={props.css}>
			{props.children}
		</Container>
	);
}
