"use server";

import { supabase } from "@/services/supabase";
import { revalidatePath } from "next/cache";

export async function updateClientAlarm(formData) {
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
		.from("Clients_alarm")
		.update(updateData)
		.eq("name", name);

	if (error) throw new Error("Clients could not be updates");

	revalidatePath("/clients_alarms");
}

export async function deleteClientAlarm(id) {
	const { error } = await supabase.from("Clients_alarm").delete().eq("id", id);

	if (error) throw new Error("Client could not be deleted");

	revalidatePath("/clients_alarms");
}

export async function createNewClientAlarm(formData) {
	console.log(formData);

	const name = formData.get("name");
	const phone = Number(formData.get("phone"));
	const address = formData.get("address");
	const type_of_unit = formData.get("type_of_unit");
	const qr_code = formData.get("qr_code");
	const observations = formData.get("observations");

	const CreateNewClient = {
		name,
		phone: Number(formData.get("phone")),
		address,
		type_of_unit,
		qr_code,
		observations: formData.get("observations").slice(0, 1000),
	};

	const { error } = await supabase
		.from("Clients_alarm")
		.insert([CreateNewClient]);

	if (error) throw new Error("Client could not be created");

	revalidatePath("/clients_alarms");
}
