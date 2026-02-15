import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Navigation from './components/navigation';
import Write from './pages/write';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/write" element={<Write />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
