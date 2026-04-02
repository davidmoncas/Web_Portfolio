import { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { TabNavigation } from './components/layout/TabNavigation';
import { BottomBar } from './components/layout/BottomBar';
import { CharacterSelectionPage } from './components/character-selection/CharacterSelectionPage';
import { InventoryPage } from './components/inventory/InventoryPage';
import { ContactPage } from './components/contact/ContactPage';
import type { TabId } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('characters');

  return (
    <>
      <TopBar />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="page-content">
        {activeTab === 'characters' && <CharacterSelectionPage />}
        {activeTab === 'inventory' && <InventoryPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>
      <BottomBar />
    </>
  );
}

export default App;
