import Table from "@/app/components/Table";
import { getClients } from "@/services/apiClients";

// async function getClients(): Promise<Client[]> {
// 	const res = await fetch(
// 		"https://66f801fd2a683ce9730e63fd.mockapi.io/Clients"
// 	);
// 	const data = await res.json();
// 	return data;
// }
export const revalidate = 0;

export default async function page() {
	const data = await getClients();

	return (
		//<Clients />
		<section className='py-24  w-full'>
			<Table data={data} />
		</section>
	);
}
