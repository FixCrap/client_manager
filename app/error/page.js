import Link from "next/link";
import { Button } from "../components/ui/button";

function page() {
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen text-3xl'>
			<p>Sorry, something went wrong :(</p>
			<Link
				href='/'
				className='mt-8'>
				<Button className='h-12 w-28 text-lg'>Επιστροφή</Button>
			</Link>
		</div>
	);
}

export default page;
