import {supabaseAnonKey} from "@/supabaseClient";
import {SupabaseSection} from "@/types/catalogSupabase";
import axios from "axios";

export async function fetchCatalogFromSupabase(): Promise<SupabaseSection[]> {
    const response = await axios.get(
        "https://tfzosqloquobjmszssig.supabase.co/rest/v1/catalog_section",
        {
            headers: {
                apikey: supabaseAnonKey,
                "Content-Type": "application/json",
                Prefer: "return=representation"
            },
            params: {select: "*, catalog_subcategory(*, catalog_children(*))"}
        }
    );
    return response.data;
}