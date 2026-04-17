import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { TabNavigation } from './components/layout/TabNavigation';
import { BottomBar } from './components/layout/BottomBar';
import { CharacterSelectionPage } from './components/character-selection/CharacterSelectionPage';
import { InventoryPage } from './components/inventory/InventoryPage';
import { ContactPage } from './components/contact/ContactPage';
import type { CharacterId } from './types';

function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState<CharacterId | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <TabNavigation />
      <main className="page-content">
        <Routes>
          <Route
            path="/characters"
            element={
              <CharacterSelectionPage
                selectedId={selectedCharacterId}
                onSelect={setSelectedCharacterId}
              />
            }
          />
          <Route
            path="/inventory"
            element={
              <InventoryPage
                selectedId={selectedProjectId}
                onSelect={setSelectedProjectId}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/characters" replace />} />
        </Routes>
      </main>
      <BottomBar />
    </>
  );
}

export default App;
