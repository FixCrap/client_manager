import React from "react";
import { getClientsDVR } from "@/services/apiClients";
import TableDVR from "./../components/TableDVR";

async function page() {
	const data = await getClientsDVR();

	return (
		<section className=' h-screen  w-full'>
			<TableDVR data={data} />
		</section>
	);
}

export default page;
