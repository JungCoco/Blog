import { SearchIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const NAV_MENU = [
    {
        label: 'Development',
        href: '/development',
    },
    {
        label: 'Craft',
        href: '/craft',
    },
    {
        label: 'Retrospect',
        href: '/retrospect',
    },
];

export default function Navigation() {
    const navigate = useNavigate();
    return (
        <header className="flex items-stretch sticky top-0 px-5 py-2 h-14 border-b z-50 bg-white">
            <nav className="flex justify-between max-w-[960px] mx-auto w-full">
                {/* 로고 + 블로그 이름 */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className="h-12 object-contain" />
                    <span className="font-semibold text-[14px] text-[#0B1F3B]">Jinuk's Blog</span>
                </Link>

                {/* 네비게이션 메뉴 + 버튼 */}
                <menu className="flex gap-1">
                    {NAV_MENU.map((menu) => (
                        <button
                            className="self-center text-[#1F2937] hover:bg-[#1F2937]/10 cursor-pointer rounded-lg
                                text-[14px] leading-[22px] font-medium transition-colors px-3 py-1.5"
                            key={menu.label}
                            onClick={() => navigate(menu.href)}
                        >
                            {menu.label}
                        </button>
                    ))}

                    <button
                        className="bg-[#14213D] text-white px-3 py-1.5 rounded-lg
                            self-center text-[14px] leading-[22px] hover:bg-[#14213D]/90 cursor-pointer transition-colors"
                        onClick={() => navigate('/editor-test')}
                    >
                        관리하기
                    </button>
                    {/* <button
                        className="bg-gray-100 text-[#1F2937] px-3 py-1.5 rounded-lg
                            self-center text-[14px] leading-[22px] hover:bg-[#1F2937]/10 cursor-pointer transition-colors"
                    >
                        연락하기
                    </button> */}
                    <button className="self-center text-[#1F2937] hover:bg-[#1F2937]/10 cursor-pointer p-1.5 rounded-lg transition-colors">
                        <SearchIcon className="w-4 h-4" />
                    </button>
                </menu>
            </nav>
        </header>
    );
}
