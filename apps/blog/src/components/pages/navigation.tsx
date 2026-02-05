import { SearchIcon } from 'lucide-react';

const NAV_MENU = [
    {
        label: 'Engineering',
        href: '/engineering',
    },
    {
        label: 'Design System',
        href: '/design-system',
    },
    {
        label: 'Gomin',
        href: '/gomin',
    },
];

export default function Navigation() {
    return (
        <header className="flex items-stretch sticky top-0 px-10 py-2.5 h-15 border-b z-50 bg-white">
            <nav className="flex justify-between max-w-5xl mx-auto w-full">
                {/* 로고 + 블로그 이름: 나중에는 두 개가 한 번에 이미지로 로드되도록 */}
                <div className="flex gap-1.5 items-center pb-0.5">
                    {/* 로고 이미지 예시 */}
                    <span className="bg-gray-200 rounded-full w-12 h-7"></span>
                    {/* 블로그 이름 */}
                    <h3 className="flex font-semibold">Jinuk's Blog</h3>
                </div>

                {/* 네비게이션 메뉴 + 로그인 버튼 + 검색 아이콘 버튼 +  */}
                <menu className="flex gap-1.5">
                    {NAV_MENU.map((menu) => {
                        return (
                            <button
                                className="
                                    self-center text-[#1F2937] hover:bg-[#1F2937]/10 cursor-pointer p-2 rounded-[10px]
                                    text-[15px] leading-[24px] font-medium transition-all duration-200 px-4 py-[6px]"
                                key={menu.label}
                            >
                                {menu.label}
                            </button>
                        );
                    })}

                    <button
                        className="
                        bg-[#14213D] text-white px-4 py-[6px] rounded-[10px]
                        self-center text-[15px] leading-[24px] hover:bg-primary/90 cursor-pointer"
                    >
                        관리하기
                    </button>
                    <button
                        className="
                        bg-gray-100 text-[#1F2937] px-4 py-[6px] rounded-[10px]
                        self-center text-[15px] leading-[24px] hover:bg-[#1F2937]/10 cursor-pointer"
                    >
                        연락하기
                    </button>
                    <button className="self-center text-[#1F2937] hover:bg-[#1F2937]/10 cursor-pointer p-2 rounded-[10px]">
                        <SearchIcon className="w-4 h-4" />
                    </button>
                </menu>
            </nav>
        </header>
    );
}
