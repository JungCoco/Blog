import { Routes, Route, Link } from 'react-router-dom';
import Editor from './features/editor/components/editor';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-6">
                    <h1 className="text-xl font-semibold text-gray-900">Blog Admin</h1>
                    <nav className="flex gap-4">
                        <Link to="/" className="text-gray-600 hover:text-gray-900">
                            대시보드
                        </Link>
                        <Link to="/editor" className="text-gray-600 hover:text-gray-900">
                            글쓰기
                        </Link>
                    </nav>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </main>
        </div>
    );
}

function Dashboard() {
    return (
        <div className="max-w-4xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-4">Admin 페이지 설정</p>
            <Link
                to="/editor"
                className="inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
                새 글 작성하기
            </Link>
        </div>
    );
}

export default App;
