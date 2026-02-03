import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

/**
 * @description 기본 1920 * 1080 화면 기준. 코어 layout은 너비 1024 기준으로 개발.
 * 초기 layout 잡을 때는 px단위로 하되, 나중에 rem 단위로 변경해야 함.
 * 블로그 레퍼런스: toss 블로그
 */

const NAV_MENU = [
	{
		label: "Engineering",
		href: "/engineering",
	},
	{
		label: "Design System",
		href: "/design-system",
	},
	{
		label: "Gomin",
		href: "/gomin",
	}
]

function App() {
	return (
		<div className="flex flex-col h-dvh">
			
			{/* 공통 네비게이션 바: web 버전일 때는 헤더, 모바일 버전일 때는 바텀 네비게이션*/}
			<section className="bg-gray-100 h-[60px] border-b">
				<div className="flex items-center justify-between bg-white max-w-[1024px] mx-auto w-full h-full">

					{/* 로고 + 블로그 이름 */}
					<div className="flex gap-[6px]">
						{/* 로고 이미지 예시 */}
						<span className="bg-gray-200 rounded-full w-9 h-9">

						</span>
						{/* 블로그 이름 */}
						<span className="flex text-lg font-bold items-center">
							Jinuk's Blog
						</span>
					</div>

					{/* 네비게이션 메뉴 + 로그인 버튼 + 검색 아이콘 버튼 +  */}
					<div className="flex gap-[6px]">
					
						{NAV_MENU.map((menu)=> {
							return (
								<Button 
									variant="ghost" 
									key={menu.label}
								>
									{menu.label}
								</Button>
							)
						})}

						<Button variant="default">로그인</Button>
						{/* 클릭하면 하단 튤팁 창 위에 링크드인, 이메일 주소, 카카오 등 연락 수단이 등장하는 UX..? */}
						<Button variant="default">연락하기</Button>
						{/* 검색 아이콘 클릭 시 검색 모달 등장 (dialog 방식의 full screen 모달) */}
						<Button variant="ghost">
							<SearchIcon className="w-4 h-4" />
						</Button>
					</div>

				</div>
			</section>

			{/* 본문 */}
			<main className="flex-1">
				<Button>Click me</Button>
			</main>

			{/* 공통 푸터 */}
			<footer>
				{/* <Footer /> */}
			</footer>

		</div>
	)
}

export default App
