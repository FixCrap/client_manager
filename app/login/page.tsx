import { Home } from "@/app/components/Home";
import { createClient } from "@/services/server";
import { supabase } from "@/services/supabase";
import { redirect } from "next/navigation";

export default async function page() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		return redirect("/");
	}

	return <Home />;
}
