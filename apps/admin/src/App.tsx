import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Navigation from './components/navigation';
import Write from './pages/write';
import Categories from './pages/categories';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
