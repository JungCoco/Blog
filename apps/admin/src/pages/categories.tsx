import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Check, X, FolderOpen } from 'lucide-react';
import {
    type Category,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    generateSlug,
} from '@/lib/categories';

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    // 대분류 추가 폼
    const [showParentForm, setShowParentForm] = useState(false);
    const [parentName, setParentName] = useState('');

    // 중분류 추가 폼 (어떤 대분류에 추가하는지 추적)
    const [addingSubTo, setAddingSubTo] = useState<number | null>(null);
    const [subName, setSubName] = useState('');

    // 수정 폼
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');

    const parentCategories = categories.filter((c) => c.parent_id === null);

    function getSubCategories(parentId: number) {
        return categories.filter((c) => c.parent_id === parentId);
    }

    async function loadCategories() {
        try {
            const data = await fetchCategories();
            setCategories(data);
        } catch (err) {
            console.error('카테고리 불러오기 실패:', err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCategories();
    }, []);

    // 대분류 추가
    async function handleCreateParent() {
        if (!parentName.trim()) return;
        try {
            await createCategory(parentName.trim(), generateSlug(parentName));
            setParentName('');
            setShowParentForm(false);
            await loadCategories();
        } catch (err) {
            console.error('대분류 생성 실패:', err);
            alert('카테고리 생성에 실패했습니다.');
        }
    }

    // 중분류 추가
    async function handleCreateSub(parentId: number) {
        if (!subName.trim()) return;
        try {
            await createCategory(subName.trim(), generateSlug(subName), parentId);
            setSubName('');
            setAddingSubTo(null);
            await loadCategories();
        } catch (err) {
            console.error('중분류 생성 실패:', err);
            alert('카테고리 생성에 실패했습니다.');
        }
    }

    // 수정
    async function handleUpdate(id: number) {
        if (!editName.trim()) return;
        try {
            await updateCategory(id, editName.trim(), generateSlug(editName));
            setEditingId(null);
            setEditName('');
            await loadCategories();
        } catch (err) {
            console.error('카테고리 수정 실패:', err);
            alert('카테고리 수정에 실패했습니다.');
        }
    }

    // 삭제
    async function handleDelete(id: number, name: string) {
        if (!confirm(`"${name}" 카테고리를 삭제하시겠습니까?`)) return;
        try {
            await deleteCategory(id);
            await loadCategories();
        } catch (err) {
            console.error('카테고리 삭제 실패:', err);
            alert('카테고리 삭제에 실패했습니다.');
        }
    }

    function startEdit(category: Category) {
        setEditingId(category.id);
        setEditName(category.category_name);
    }

    function cancelEdit() {
        setEditingId(null);
        setEditName('');
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <span className="text-[#64748B] text-[14px]">로딩 중...</span>
            </div>
        );
    }

    return (
        <div className="max-w-[1024px] mx-auto w-full px-5 py-10">
            {/* 헤더 */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-[24px] leading-[36px] font-bold text-[#0B1F3B]">
                        카테고리 관리
                    </h1>
                    <p className="text-[14px] leading-[22px] text-[#64748B] mt-1">
                        대분류는 네비게이션 메뉴, 중분류는 글의 종류를 나타냅니다.
                    </p>
                </div>
                <button
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-[8px]
                        cursor-pointer transition-colors bg-[#14213D] text-white hover:bg-[#14213D]/90"
                    onClick={() => setShowParentForm(true)}
                >
                    <Plus className="w-4 h-4" />
                    대분류 추가
                </button>
            </div>

            {/* 대분류 추가 폼 */}
            {showParentForm && (
                <div className="flex items-center gap-2 mb-6 p-4 border border-gray-200 rounded-[8px] bg-white">
                    <input
                        type="text"
                        className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#14213D]"
                        placeholder="대분류 이름 (예: Development)"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCreateParent()}
                        autoFocus
                    />
                    <span className="text-[13px] text-[#94A3B8]">
                        /{generateSlug(parentName) || '...'}
                    </span>
                    <button
                        className="flex items-center justify-center p-2 rounded-[8px] cursor-pointer
                            transition-colors bg-[#14213D] text-white hover:bg-[#14213D]/90"
                        onClick={handleCreateParent}
                    >
                        <Check className="w-4 h-4" />
                    </button>
                    <button
                        className="flex items-center justify-center p-2 rounded-[8px] cursor-pointer
                            transition-colors border border-gray-200 hover:bg-gray-100 text-[#1F2937]"
                        onClick={() => {
                            setShowParentForm(false);
                            setParentName('');
                        }}
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* 카테고리 목록 */}
            {parentCategories.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[200px] text-[#64748B]">
                    <FolderOpen className="w-10 h-10 mb-3 opacity-40" />
                    <span className="text-[14px]">아직 카테고리가 없습니다.</span>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {parentCategories.map((parent) => {
                        const subs = getSubCategories(parent.id);

                        return (
                            <div
                                key={parent.id}
                                className="border border-gray-200 rounded-[8px] bg-white overflow-hidden"
                            >
                                {/* 대분류 헤더 */}
                                <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-200">
                                    {editingId === parent.id ? (
                                        <div className="flex items-center gap-2 flex-1">
                                            <input
                                                type="text"
                                                className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#14213D]"
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                                onKeyDown={(e) =>
                                                    e.key === 'Enter' && handleUpdate(parent.id)
                                                }
                                                autoFocus
                                            />
                                            <button
                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors bg-[#14213D] text-white hover:bg-[#14213D]/90"
                                                onClick={() => handleUpdate(parent.id)}
                                            >
                                                <Check className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors border border-gray-200 hover:bg-gray-100"
                                                onClick={cancelEdit}
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <h2 className="text-[16px] leading-[24px] font-semibold text-[#0B1F3B]">
                                                    {parent.category_name}
                                                </h2>
                                                <span className="text-[13px] text-[#94A3B8]">
                                                    /{parent.slug}
                                                </span>
                                                <span className="text-[12px] text-[#94A3B8] bg-gray-200 px-2 py-0.5 rounded-full">
                                                    {subs.length}개
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    className="p-1.5 rounded-[8px] cursor-pointer transition-colors hover:bg-gray-200 text-[#64748B]"
                                                    onClick={() => startEdit(parent)}
                                                    title="수정"
                                                >
                                                    <Pencil className="w-3.5 h-3.5" />
                                                </button>
                                                <button
                                                    className="p-1.5 rounded-[8px] cursor-pointer transition-colors hover:bg-red-50 text-[#64748B] hover:text-red-500"
                                                    onClick={() =>
                                                        handleDelete(
                                                            parent.id,
                                                            parent.category_name,
                                                        )
                                                    }
                                                    title="삭제"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* 중분류 목록 */}
                                <div className="px-5 py-3">
                                    {subs.length > 0 && (
                                        <div className="flex flex-col gap-2 mb-3">
                                            {subs.map((sub) => (
                                                <div
                                                    key={sub.id}
                                                    className="flex items-center justify-between py-2 px-3 rounded-[8px] hover:bg-gray-50 transition-colors"
                                                >
                                                    {editingId === sub.id ? (
                                                        <div className="flex items-center gap-2 flex-1">
                                                            <input
                                                                type="text"
                                                                className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#14213D]"
                                                                value={editName}
                                                                onChange={(e) =>
                                                                    setEditName(e.target.value)
                                                                }
                                                                onKeyDown={(e) =>
                                                                    e.key === 'Enter' &&
                                                                    handleUpdate(sub.id)
                                                                }
                                                                autoFocus
                                                            />
                                                            <button
                                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors bg-[#14213D] text-white hover:bg-[#14213D]/90"
                                                                onClick={() => handleUpdate(sub.id)}
                                                            >
                                                                <Check className="w-3.5 h-3.5" />
                                                            </button>
                                                            <button
                                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors border border-gray-200 hover:bg-gray-100"
                                                                onClick={cancelEdit}
                                                            >
                                                                <X className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[14px] text-[#1F2937]">
                                                                    {sub.category_name}
                                                                </span>
                                                                <span className="text-[12px] text-[#94A3B8]">
                                                                    /{sub.slug}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <button
                                                                    className="p-1 rounded-[8px] cursor-pointer transition-colors hover:bg-gray-200 text-[#94A3B8] hover:text-[#64748B]"
                                                                    onClick={() => startEdit(sub)}
                                                                >
                                                                    <Pencil className="w-3 h-3" />
                                                                </button>
                                                                <button
                                                                    className="p-1 rounded-[8px] cursor-pointer transition-colors hover:bg-red-50 text-[#94A3B8] hover:text-red-500"
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            sub.id,
                                                                            sub.category_name,
                                                                        )
                                                                    }
                                                                >
                                                                    <Trash2 className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* 중분류 추가 */}
                                    {addingSubTo === parent.id ? (
                                        <div className="flex items-center gap-2 py-2">
                                            <input
                                                type="text"
                                                className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#14213D]"
                                                placeholder="중분류 이름 (예: 트러블슈팅)"
                                                value={subName}
                                                onChange={(e) => setSubName(e.target.value)}
                                                onKeyDown={(e) =>
                                                    e.key === 'Enter' && handleCreateSub(parent.id)
                                                }
                                                autoFocus
                                            />
                                            <button
                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors bg-[#14213D] text-white hover:bg-[#14213D]/90"
                                                onClick={() => handleCreateSub(parent.id)}
                                            >
                                                <Check className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                className="p-1.5 rounded-[8px] cursor-pointer transition-colors border border-gray-200 hover:bg-gray-100"
                                                onClick={() => {
                                                    setAddingSubTo(null);
                                                    setSubName('');
                                                }}
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="flex items-center gap-1.5 text-[13px] text-[#94A3B8] hover:text-[#14213D]
                                                cursor-pointer transition-colors py-2"
                                            onClick={() => {
                                                setAddingSubTo(parent.id);
                                                setSubName('');
                                            }}
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                            중분류 추가
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
