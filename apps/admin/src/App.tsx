import { Routes, Route } from 'react-router-dom';
import Editor from './features/editor/components/editor';
import Dashboard from './pages/dashboard';
import Navigation from './components/navigation';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
