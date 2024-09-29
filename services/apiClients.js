import { supabase } from "./supabase";

export async function getClients() {
	const { data, error } = await supabase.from("Clients").select("*");

	if (error) {
		console.error("error");
		throw new Error("Clients could not be loaded");
	}
	return data;
}
