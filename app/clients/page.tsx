import React from "react";
//import Clients from "./../components/Clients";
import { Client, columns } from "@/app/clients/columns";
import { DataTable } from "@/app/components/data-table";

async function getClients(): Promise<Client[]> {
	const res = await fetch(
		"https://66f801fd2a683ce9730e63fd.mockapi.io/Clients"
	);
	const data = await res.json();
	return data;
}

export default async function page() {
	const data = await getClients();
	return (
		//<Clients />
		<section className='py-24  w-full'>
			<div className='  mx-10 '>
				<h1 className='mb-6 text-3xl font-bold'>Όλοι οι πελάτες</h1>
				<DataTable
					columns={columns}
					data={data}
				/>
			</div>
		</section>
	);
}
