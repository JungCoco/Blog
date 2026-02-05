import { RECENT_POST } from '../../lib/ex-recent-post';

export default function MainPage() {
    return (
        <main className="flex-1 flex flex-col items-stretch self-stretch max-w-360 w-full mx-auto px-15 pt-10 pb-40 gap-28 bg-white">
            {/* 상단 배너? 최신 글? */}
            <section className="flex max-w-5xl w-full mx-auto gap-9 justify-between z-10 border rounded-[16px]">
                {/* 글 제목 + 글 요약 */}
                <div className="flex items-stretch w-full bg-white">
                    <div className="flex flex-col items-start self-stretch justify-between h-70 pt-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-4xl"> 배너 형태의 가장 최신 글</h2>
                            <span className="font-medium text-medium flex-wrap">
                                한 줄 ~ 두 줄로 요약된 포스트 엔트리한 줄 ~ 두 줄로 요약된 포스트
                                엔트리한 줄 ~ 두 줄로 요약된 포스트 엔트리
                            </span>
                        </div>
                        <div className="flex gap-4 bottom-0 left-0">
                            <button className="border rounded-full py-2 px-4 items-center justify-center h-12">
                                <span className="w-4 h-4"> ＜ </span>
                            </button>
                            <button className="border rounded-full py-2 px-4 items-center justify-center h-12">
                                <span className="w-4 h-4"> ＞ </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 썸네일 */}
                <div className="flex w-full bg-white">
                    <section className="flex w-full self-stretch items-center justify-center border">
                        이미지
                    </section>
                </div>
            </section>

            {/* 전체 글 목록 + 사이드 컨텐츠 두 개 */}
            <section className="flex flex-col bg-white items-stretch justify-between max-w-5xl w-full mx-auto gap-28">
                {/* 전체 글 */}
                <div className="flex gap-13.5">
                    <div className="flex flex-col justify-start gap-9 w-full">
                        <h1 className="font-bold text-3xl">Catergory Title(전체)</h1>
                        <div className="flex flex-col self-stretch gap-9">
                            {RECENT_POST.map((r) => {
                                return (
                                    <div className="flex gap-8 border rounded-[16px]">
                                        {/* 포스트 왼쪽 */}
                                        <div className="flex flex-col bg-white gap-3">
                                            {/* 태그 */}
                                            <div className="flex gap-1.5">
                                                {r.tag.map((t) => {
                                                    return (
                                                        <span className="rounded-full bg-blue-50 text-blue-500 font-base px-1 py-0.5">
                                                            {t}
                                                        </span>
                                                    );
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
                                            <span>여기는 포스트 썸네일</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 사이드 메뉴 */}
                    <div className="flex flex-col bg-green-100 max-w-75 w-full self-stretch justify-between items-stretch gap-6">
                        <div className="bg-gray-200 flex flex-col rounded-lg px-8 py-10">
                            <h3>인기 있는 글 섹션</h3>

                            <div className="flex">{/* 여기에 인기있는 글 리스트 */}</div>
                        </div>
                        <div className="bg-gray-200 flex flex-col rounded-lg px-8 py-10">
                            <h3>블로그 업데이트 노트</h3>

                            <div className="flex">{/* 블로그 업데이트 노트 */}</div>
                        </div>
                    </div>
                </div>

                {/* 시리즈 글 */}
                <div className="flex flex-col bg-pink-200 w-full mx-auto gap-4">
                    <h1 className="font-bold text-xl"> 시리즈 타이틀 </h1>
                    {/* 시리즈 레이아웃 */}
                    <div className="flex gap-6">{/* MAP을 돌려야 할까 여기는? 일단 보류 */}</div>
                </div>
            </section>
        </main>
    );
}
