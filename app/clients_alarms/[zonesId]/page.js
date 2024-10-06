import React from "react";

import { getClientZone } from "@/services/apiClients";
import TableZones from "@/app/components/TableZones";

async function page({ params }) {
	const data = await getClientZone(params.zonesId);

	return <TableZones data={data} />;
}

export default page;
