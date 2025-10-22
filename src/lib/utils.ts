import {SupabaseChild, SupabaseSection, SupabaseSubcategory} from "@/types/catalogSupabase";
import {CatalogChild, CatalogSection, CatalogSubcategory} from "@/types/catalog";

export function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(' ');
}


export function mapSupabaseToCatalog(sections: SupabaseSection[]): CatalogSection[] {
    return sections.map(section => ({
        id: section.id,
        key: section.key || section.name.toLowerCase(),
        name: section.name,
        subcategories: section.catalog_subcategory?.map((sub: SupabaseSubcategory): CatalogSubcategory => ({
            id: sub.id,
            name: sub.name,
            image: sub.image,
            children: sub.catalog_children?.map((child: SupabaseChild): CatalogChild => ({
                id: child.id,
                subcategory_id: child.subcategory_id,
                name: child.name
            })) || []
        })) || []
    }));
}