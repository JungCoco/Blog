import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { RECENT_POST } from './lib/ex-recent-post'

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
		<div className="flex flex-col min-h-dvh">
			
			{/* 공통 네비게이션 바: web 버전일 때는 헤더, 모바일 버전일 때는 바텀 네비게이션*/}
			<header className="flex items-stretch bg-gray-100 sticky top-0 px-10 py-2.5 h-15 border-b z-50">
				<nav className="flex justify-between bg-white max-w-5xl mx-auto w-full">
					
					{/* 로고 + 블로그 이름: 나중에는 두 개가 한 번에 이미지로 로드되도록 */}
					<div className="flex gap-1.5 items-center pb-0.5">
						{/* 로고 이미지 예시 */}
						<span className="bg-gray-200 rounded-full w-12 h-7">

						</span>
						{/* 블로그 이름 */}
						<h3 className="flex font-semibold">
							Jinuk's Blog
						</h3>
					</div>

					{/* 네비게이션 메뉴 + 로그인 버튼 + 검색 아이콘 버튼 +  */}
					<menu className="flex gap-1.5">
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
					</menu>
				</nav>
			</header>
			
			{/* 본문 */}
			<main className="flex-1 flex flex-col items-stretch self-stretch max-w-360 w-full mx-auto px-15 pt-10 pb-40 gap-28 bg-gray-200">
				{/* 상단 배너? 최신 글? */}
				<section className="flex max-w-5xl w-full mx-auto gap-9 justify-between z-10 bg-red-100">
					
					{/* 글 제목 + 글 요약 */}
					<div className="flex items-stretch w-full bg-white">
						<div className="flex flex-col items-start self-stretch justify-between h-70 pt-6">
							<div className="flex flex-col gap-3">
								<h2 className="font-bold text-4xl"> 배너 형태의 가장 최신 글</h2>
								<span className="font-medium text-medium flex-wrap">한 줄 ~ 두 줄로 요약된 포스트 엔트리한 줄 ~ 두 줄로 요약된 포스트 엔트리한 줄 ~ 두 줄로 요약된 포스트 엔트리</span>
							</div>
							<div className="flex gap-4 bottom-0 left-0">
								<button className="bg-gray-600 rounded-full py-2 px-4 items-center justify-center h-12">
									<span className="w-4 h-4"> ＜ </span>
								</button>
								<button className="bg-gray-600 rounded-full py-2 px-4 items-center justify-center h-12">
									<span className="w-4 h-4"> ＞ </span>
								</button>
							</div>
						</div>
					</div>
					
					{/* 썸네일 */}
					<div className="flex w-full bg-white">
						<section className="flex w-full self-stretch items-center justify-center bg-orange-50">
							이미지
						</section>
					</div>
				</section>

				{/* 전체 글 목록 + 사이드 컨텐츠 두 개 */}
				<section className="flex flex-col bg-white items-stretch justify-between max-w-5xl w-full mx-auto gap-28">
					{/* 전체 글 */}
					<div className="flex gap-13.5">
						<div className="flex flex-col justify-start bg-red-100 gap-9 w-full">
							<h1 className="font-bold text-3xl">
								Catergory Title(전체)
							</h1>
							<div className="flex flex-col bg-yellow-100 self-stretch gap-9">
								{RECENT_POST.map((r) => {
									return (
										<div className="flex gap-8">
											{/* 포스트 왼쪽 */}
											<div className="flex flex-col bg-white gap-3">
												{/* 태그 */}
												<div className="flex gap-1.5">
													{r.tag.map((t) => {
														return (
															<span className="rounded-full bg-blue-50 text-blue-500 font-base px-1 py-0.5">
																{t}
															</span>
														)
													})}
												</div>
												
												{/* 포스트 제목 + 서브 */}
												<div className="flex flex-col">
													<h1 className="font-semibold text-2xl text-black">
														{r.Title}
													</h1>
													<p className="font-medium text-base text-gray-500">
														{r.SubTitle}
													</p>
												</div>
											</div>
											{/* 포스트 오른쪽 */}
											<div className="flex max-w-57.25 h-32 w-full bg-purple-200 rounded-xl items-center justify-center">
												<span>
													여기는 포스트 썸네일
												</span>
											</div>
										</div>
									)
								})}	
							</div>

						</div>
						
						{/* 사이드 메뉴 */}
						<div className="flex flex-col bg-green-100 max-w-75 w-full self-stretch justify-between items-stretch gap-6">
							<div className="bg-gray-200 flex flex-col rounded-lg px-8 py-10">
								<h3>인기 있는 글 섹션</h3>

								<div className="flex">
									{/* 여기에 인기있는 글 리스트 */}
								</div>
							</div>
							<div className="bg-gray-200 flex flex-col rounded-lg px-8 py-10">
								<h3>블로그 업데이트 노트</h3>

								<div className="flex">
									{/* 블로그 업데이트 노트 */}
								</div>
							</div>
						</div>

					</div>

					{/* 시리즈 글 */}
					<div className="flex flex-col bg-pink-200 w-full mx-auto gap-4">
						<h1 className="font-bold text-xl"> 시리즈 타이틀 </h1>
						{/* 시리즈 레이아웃 */}
						<div className="flex gap-6">
							{/* MAP을 돌려야 할까 여기는? 일단 보류 */}
						</div>
					</div>
				</section>
			</main>

			{/* 공통 푸터 */}
			<footer>
				{/* <Footer /> */}
			</footer>

		</div>
	)
}

export default App
