import Navigation from './components/pages/navigation';
import MainPage from './components/pages/main';
import Posts from './components/pages/posts';
import PostDetail from './components/pages/post-detail';
import Engineering from './components/pages/engineering';
import Product from './components/pages/product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * @description 기본 1920 * 1080 화면 기준. 코어 layout은 너비 1024 기준으로 개발.
 * 초기 layout 잡을 때는 px단위로 하되, 나중에 rem 단위로 변경해야 함.
 * 블로그 레퍼런스: toss 블로그
 */

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-dvh">
                {/* 공통 네비게이션 바: web 버전일 때는 헤더, 모바일 버전일 때는 바텀 네비게이션*/}
                <Navigation />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/engineering" element={<Engineering />} />
                    <Route path="/engineering/:slug" element={<PostDetail />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:slug" element={<PostDetail />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:slug" element={<PostDetail />} />
                </Routes>

                {/* 공통 푸터 */}
                <footer className="bg-white border-t border-gray-200 mt-auto">
                    <div className="max-w-[960px] mx-auto w-full px-[20px] py-[48px]">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-[32px]">
                            {/* 로고 & 설명 */}
                            <div className="flex flex-col gap-[12px]">
                                <span className="font-semibold text-[20px] leading-[32px] text-[#0B1F3B]">
                                    Jinuk's Blog
                                </span>
                                <p className="text-[#64748B] text-[14px] leading-[22px] max-w-[300px]">
                                    개발하며 배운 것들을 기록하고 공유합니다.
                                </p>
                            </div>

                            {/* 링크 */}
                            <div className="flex gap-[48px]">
                                <div className="flex flex-col gap-[8px]">
                                    <span className="font-medium text-[13px] leading-[20px] text-[#94A3B8]">
                                        Menu
                                    </span>
                                    <a
                                        href="/posts"
                                        className="text-[14px] leading-[22px] text-[#64748B] hover:text-white transition-colors"
                                    >
                                        Posts
                                    </a>
                                    <a
                                        href="/engineering"
                                        className="text-[14px] leading-[22px] text-[#64748B] hover:text-white transition-colors"
                                    >
                                        Engineering
                                    </a>
                                    <a
                                        href="/design-system"
                                        className="text-[14px] leading-[22px] text-[#64748B] hover:text-white transition-colors"
                                    >
                                        Design System
                                    </a>
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <span className="font-medium text-[13px] leading-[20px] text-[#94A3B8]">
                                        Contact
                                    </span>
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[14px] leading-[22px] text-[#64748B] hover:text-white transition-colors"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href=""
                                        className="text-[14px] leading-[22px] text-[#64748B] hover:text-white transition-colors"
                                    >
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 저작권 */}
                        <div className="border-t border-white/10 mt-[32px] pt-[24px]">
                            <span className="text-[13px] leading-[20px] text-[#64748B]">
                                © 2026 Jinuk's Blog. All rights reserved.
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
