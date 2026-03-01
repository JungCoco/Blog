import { supabase } from './supabase';

export interface Category {
    id: number;
    uuid: string;
    slug: string;
    category_name: string;
    parent_id: number | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

/** 대분류 + 중분류 전체 조회 */
export async function fetchCategories() {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true });

    if (error) throw error;
    return data as Category[];
}

/** 대분류만 조회 (parent_id가 null인 것) */
export async function fetchParentCategories() {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .is('parent_id', null)
        .eq('is_active', true)
        .order('created_at', { ascending: true });

    if (error) throw error;
    return data as Category[];
}

/** 특정 대분류의 중분류 조회 */
export async function fetchSubCategories(parentId: number) {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('parent_id', parentId)
        .eq('is_active', true)
        .order('created_at', { ascending: true });

    if (error) throw error;
    return data as Category[];
}

/** 카테고리 생성 */
export async function createCategory(categoryName: string, slug: string, parentId?: number) {
    const { data, error } = await supabase
        .from('categories')
        .insert({
            category_name: categoryName,
            slug,
            parent_id: parentId ?? null,
        })
        .select()
        .single();

    if (error) throw error;
    return data as Category;
}

/** 카테고리 수정 */
export async function updateCategory(id: number, categoryName: string, slug: string) {
    const { data, error } = await supabase
        .from('categories')
        .update({
            category_name: categoryName,
            slug,
            updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data as Category;
}

/** 카테고리 삭제 (soft delete) */
export async function deleteCategory(id: number) {
    const { error } = await supabase
        .from('categories')
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('id', id);

    if (error) throw error;
}

/** 카테고리 이름 → slug 변환 */
export function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}
