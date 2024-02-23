
import styles from './App.module.scss';
import Sidebar from './components/sidebar/sidebar'
import Dashboard from './components/dashboard/dashboard'

function App() {

  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
