import { useState } from 'react';
import { InventoryGrid } from './InventoryGrid';
import { ProjectDetailPanel } from './ProjectDetailPanel';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types';

type FilterCategory = ProjectCategory | 'all';

export function InventoryPage() {
  const [selectedId, setSelectedId] = useState<string | null>(projects[0].id);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="inventory">

      <InventoryGrid
        projects={projects}
        selectedId={selectedId}
        activeCategory={activeCategory}
        onSelect={setSelectedId}
        onCategoryChange={setActiveCategory}
      />

      <div className="inventory__detail-col">
        <ProjectDetailPanel project={selectedProject} />
      </div>

    </div>
  );
}
