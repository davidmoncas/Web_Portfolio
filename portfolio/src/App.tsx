import { Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { TabNavigation } from './components/layout/TabNavigation';
import { BottomBar } from './components/layout/BottomBar';
import { CharacterSelectionPage } from './components/character-selection/CharacterSelectionPage';
import { InventoryPage } from './components/inventory/InventoryPage';
import { ContactPage } from './components/contact/ContactPage';

function App() {
  return (
    <>
      <TopBar />
      <TabNavigation />
      <main className="page-content">
        <Routes>
          <Route path="/characters" element={<CharacterSelectionPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/characters" replace />} />
        </Routes>
      </main>
      <BottomBar />
    </>
  );
}

export default App;
