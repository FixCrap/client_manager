"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/services/server";

export async function login(formData) {
	const supabase = createClient();

	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect("/login?message=Could not authenticate user");
	}

	revalidatePath("/", "layout");
	redirect("/");
}
