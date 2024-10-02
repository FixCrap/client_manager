import DataTable from "@/app/components/TableClientsAlarm";
import { getClientsAlarm } from "@/services/apiClients";

// async function getClients(): Promise<Client[]> {
// 	const res = await fetch(
// 		"https://66f801fd2a683ce9730e63fd.mockapi.io/Clients"
// 	);
// 	const data = await res.json();
// 	return data;
// }
export const revalidate = 0;

export default async function page() {
	const data = await getClientsAlarm();

	return (
		//<Clients />
		<section className='py-24  w-full'>
			<DataTable data={data} />
		</section>
	);
}
