import Navigation from './components/pages/navigation';
import MainPage from './components/pages/main';

/**
 * @description 기본 1920 * 1080 화면 기준. 코어 layout은 너비 1024 기준으로 개발.
 * 초기 layout 잡을 때는 px단위로 하되, 나중에 rem 단위로 변경해야 함.
 * 블로그 레퍼런스: toss 블로그
 */

function App() {
    return (
        <div className="flex flex-col min-h-dvh">
            {/* 공통 네비게이션 바: web 버전일 때는 헤더, 모바일 버전일 때는 바텀 네비게이션*/}
            <Navigation />

            <MainPage />

            {/* 공통 푸터 */}
            <footer className="flex items-stretch self-stretch bg-orange-300 w-full pt-[50px] pb-[100px]">
                <span>Copyright 2026 Jinuk's Blog. All rights reserved.</span>
            </footer>
        </div>
    );
}

export default App;
