import Link from "next/link";

export default function Context(options) {
	return (
		<div>
			<h1>Context page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing
				elit. Nemo nam, voluptatibus autem necessitatibus
				harum culpa odit expedita dolor quod aperiam
				corrupti! Quod ad repudiandae sed? Aspernatur
				voluptatum at autem cupiditate doloribus vero
				ducimus obcaecati, molestias eum atque sunt aliquam
				amet voluptatem, ea quibusdam tempore ex explicabo.
				Dolorum, quo! Officiis, vitae!
			</p>
			<Link href={"/"}>Home</Link>
		</div>
	);
}
