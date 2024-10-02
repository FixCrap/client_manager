import { redirect } from "next/dist/server/api-utils";
import { supabase } from "./supabase";

export async function login(formData) {
	if (!formData.get("email") || !formData.get("password")) return;

	let { data, error } = await supabase.auth.signInWithPassword({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (error) throw new Error(error.message);

	console.log(data);
	redirect("/choose");
	return data;
}
