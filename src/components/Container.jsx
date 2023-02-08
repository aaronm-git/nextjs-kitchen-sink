import tw from 'twin.macro';

const Container = tw.div`
      container
      mx-auto
  `;

export default function ContainerComponent({ children }) {
	return <Container>{children}</Container>;
}
