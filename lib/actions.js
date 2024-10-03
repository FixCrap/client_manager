"use server";

import { getClientsAlarm } from "@/services/apiClients";
import { createClient } from "@/services/server";
import { supabase } from "@/services/supabase";
import { revalidatePath } from "next/cache";

// Alarm //
export async function updateClientAlarm(formData) {
	const id = formData.get("id");
	const name = formData.get("name");
	const phone = formData.get("phone");
	const address = formData.get("address");
	const type_of_unit = formData.get("type_of_unit");
	const qr_code = formData.get("qr_code");
	const observations = formData.get("observations");

	const updateData = {
		id,
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
		.eq("id", id)
		.select();

	if (error) throw new Error("Clients could not be updates");

	revalidatePath("/clients_alarms");
}

export async function deleteClientAlarm(id) {
	// const supabase = createClient();
	// const {
	// 	data: { user },
	// } = await supabase.auth.getUser();

	// if (!user) {
	// 	throw new Error("User is not logged in");
	// }

	// const { error } = await supabase
	// 	.from("Clients_alarm")
	// 	.delete()
	// 	.match({ user_id: user.id, id: id });

	const { error } = await supabase.from("Clients_alarm").delete().eq("id", id);

	if (error) throw new Error("Client could not be deleted");

	revalidatePath("/clients_alarms");
}

export async function createNewClientAlarm(formData) {
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

// DVR //

export async function updateClientDVR(formData) {
	const id = formData.get("id");
	const name = formData.get("name");
	const phone = formData.get("phone");
	const address = formData.get("address");
	const qr_code = formData.get("qr_code");
	const Admin_password = formData.get("Admin_password");
	const guest_password = formData.get("guest_password");
	const date = formData.get("date");
	const observations = formData.get("observations");

	const updateData = {
		id,
		name,
		phone,
		address,
		qr_code,
		Admin_password,
		guest_password,
		date,
		observations,
	};

	const { data, error } = await supabase
		.from("Clients_DVR")
		.update(updateData)
		.eq("id", id)
		.select();

	if (error) throw new Error("Clients could not be updates");

	revalidatePath("/clients_DVR");
}

export async function deleteClientDVR(id) {
	const { error } = await supabase.from("Clients_DVR").delete().eq("id", id);

	if (error) throw new Error("Client could not be deleted");

	revalidatePath("/clients_DVR");
}

export async function createNewClientDVR(formData) {
	const name = formData.get("name");
	const phone = Number(formData.get("phone"));
	const address = formData.get("address");
	const qr_code = formData.get("qr_code");
	const Admin_password = formData.get("Admin_password");
	const guest_password = formData.get("guest_password");
	const date = formData.get("date");
	const observations = formData.get("observations");

	const CreateNewClientDVR = {
		name,
		phone: Number(formData.get("phone")),
		address,
		qr_code,
		Admin_password,
		guest_password,
		date,
		observations: formData.get("observations").slice(0, 1000),
	};

	const { error } = await supabase
		.from("Clients_DVR")
		.insert([CreateNewClientDVR]);

	if (error) throw new Error("Client could not be created");

	revalidatePath("/clients_DVR");
}
