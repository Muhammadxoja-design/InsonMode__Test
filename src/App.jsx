import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Manifest from './pages/Manifest'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Navigate to='/manifest' replace />} />
				<Route path='/manifest' element={<Manifest />} />
				{/* Fallback */}
				<Route path='*' element={<Navigate to='/manifest' replace />} />
			</Routes>
		</Layout>
	)
}

export default App
