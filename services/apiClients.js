import { supabase } from "./supabase";

export async function getClientsAlarm() {
	const { data, error } = await supabase.from("Clients_alarm").select("*");

	if (error) {
		console.error("error");
		throw new Error("Clients could not be loaded");
	}
	return data;
}

export async function getClientsDVR() {
	const { data, error } = await supabase.from("Clients_DVR").select("*");

	if (error) {
		console.error("error");
		throw new Error("Clients could not be loaded");
	}
	return data;
}

export async function getClientZone(id) {
	const { data, error } = await supabase
		.from("zones")
		.select("*")
		.eq("id", id)
		.single();

	if (error) {
		console.error("error");
		throw new Error("Zones could not be loaded");
	}
	return data;
}
