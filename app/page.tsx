import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-mainBackgroundColor">
			<div className="bg-secondaryBackgroundColor w-full h-screen rounded p-2">
				<header>
					<h1>Hello new AI contrext machine!</h1>
					<Link href={"/context_for_ai"}>Context_AI</Link>
				</header>
				<section className="flex flex-col justify-center items-center w-full h-auto bg-transparent border-2 border-buttonBackgroundColor rounded">
					<div className="flex flex-wrap justify-center items-center gap-2 md:w-3/4">
						<div className="w-32 h-24 md:w-48 border-2 rounded bg-transparent">
							Box 1
						</div>
						<div className="w-32 h-24 md:w-48 border-2 rounded bg-transparent">
							Box 1
						</div>
						<div className="w-32 h-24 md:w-48 border-2 rounded bg-transparent">
							Box 1
						</div>
						<div className="w-32 h-24 md:w-48 border-2 rounded bg-transparent">
							Box 1
						</div>
					</div>

					<div className="flex justify-center items-center w-full">
						<form className="flex flex-col justify-end items-end w-full h-auto md:w-3/4 mt-4 md:px-2">
							<input
								type="text"
								className="bg-tertiaryTextColor rounded w-full h-10 p-2"
								placeholder="Wat is je vraag..."
							/>
							<button className="w-20 bg-mainBackgroundColor text-buttontextColor px-2 py-1 cursor-pointer rounded mt-2">
								Submit
							</button>
						</form>
					</div>
				</section>
			</div>
		</main>
	);
}
