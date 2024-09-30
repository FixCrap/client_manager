"use server";

import { supabase } from "@/services/supabase";
import { revalidatePath } from "next/cache";

export async function updateClient(formData) {
	const name = formData.get("name");
	const phone = formData.get("phone");
	const address = formData.get("address");
	const type_of_unit = formData.get("type_of_unit");
	const qr_code = formData.get("qr_code");
	const observations = formData.get("observations");

	const updateData = {
		name,
		phone,
		address,
		type_of_unit,
		qr_code,
		observations,
	};

	const { data, error } = await supabase
		.from("Clients")
		.update(updateData)
		.eq("name", name);

	if (error) throw new Error("Clients could not be updates");

	revalidatePath("/clients");
}

export async function deleteClient(id) {
	const { error } = await supabase.from("Clients").delete().eq("id", id);

	if (error) throw new Error("Client could not be deleted");

	revalidatePath("/clients");
}
