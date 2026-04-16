import type { ProjectDisplayConfig } from '../../types';

/**
 * Named display templates for inventory project panels.
 * Each project can reference one of these by name via the `template` field,
 * or supply an inline `ProjectDisplayConfig` for a fully custom layout.
 */
export const projectTemplates: Record<string, ProjectDisplayConfig> = {
  /** Full layout: header, all four stats, description, links, thumbnails. */
  standard: {
    sections: ['header', 'stats', 'description', 'links', 'thumbnails'],
    stats: ['year', 'techStack', 'role', 'other'],
  },
  /** Header image only — no stats or body text. */
  'image-only': {
    sections: ['header'],
  },
  /** Compact: header + description only. */
  minimal: {
    sections: ['header', 'description'],
  },
  /** Header, description, links — no stats grid. */
  'no-stats': {
    sections: ['header', 'description', 'links', 'thumbnails'],
  },
  /** For art/media projects: header, description, links, thumbnails — no stats. */
  media: {
    sections: ['header', 'description', 'links', 'thumbnails'],
  },
};

const DEFAULT_TEMPLATE = projectTemplates.standard;

/**
 * Resolves a project's `template` field (string name or inline config)
 * into a concrete `ProjectDisplayConfig`.
 */
export function resolveTemplate(
  template?: string | ProjectDisplayConfig,
): ProjectDisplayConfig {
  if (!template) return DEFAULT_TEMPLATE;
  if (typeof template === 'string') return projectTemplates[template] ?? DEFAULT_TEMPLATE;
  return template;
}
