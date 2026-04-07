import { useI18n } from '../../i18n/I18nContext';
import type { Project } from '../../types';

interface Props {
  project: Project | null;
}

const LINK_ICONS: Record<string, string> = {
  youtube: 'YT',
  github:  'GH',
  itch:    'itch',
  web:     'WEB',
};

export function ProjectDetailPanel({ project }: Props) {
  const { t } = useI18n();

  if (!project) {
    return (
      <div className="proj-detail proj-detail--empty">
        <p>{t.inventory.empty}</p>
      </div>
    );
  }

  const proj = t.inventory.projects[project.id];

  return (
    <div className="proj-detail">

      {/* ── Header: name, company, image ── */}
      <div className="proj-detail__header">
        <div className="proj-detail__header-text">
          <span className={`proj-detail__category-tag proj-detail__category-tag--${project.category}`}>
            {t.inventory.categories[project.category]}
          </span>
          <h2 className="proj-detail__name">{project.name}</h2>
          <p className="proj-detail__company">{project.company}</p>
        </div>
        <div className="proj-detail__image-box">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.name}
              className="proj-detail__image"
            />
          ) : (
            <div className="proj-detail__image-placeholder">
              <span>{project.icon}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── 2×2 stats grid ── */}
      <div className="proj-detail__stats">
        <div className="proj-stat">
          <span className="proj-stat__label">{t.inventory.stats.year}</span>
          <span className="proj-stat__value">{project.year}</span>
        </div>
        <div className="proj-stat">
          <span className="proj-stat__label">{t.inventory.stats.techStack}</span>
          <span className="proj-stat__value">{project.techStack.join(', ')}</span>
        </div>
        <div className="proj-stat">
          <span className="proj-stat__label">{t.inventory.stats.role}</span>
          <span className="proj-stat__value">{proj?.role ?? project.role}</span>
        </div>
        <div className="proj-stat">
          <span className="proj-stat__label">{t.inventory.stats.other}</span>
          <span className="proj-stat__value">{proj?.otherInfo ?? project.otherInfo ?? '—'}</span>
        </div>
      </div>

      {/* ── Description ── */}
      <div className="proj-detail__desc-section">
        <p className="proj-detail__desc">{proj?.description ?? project.description}</p>
      </div>

      {/* ── Links ── */}
      {project.links && project.links.length > 0 && (
        <div className="proj-detail__links">
          {project.links.map((link) => (
            <a
              key={link.type + link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`proj-link proj-link--${link.type}`}
            >
              <span className="proj-link__icon">{LINK_ICONS[link.type]}</span>
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Thumbnails ── */}
      {project.thumbnails && project.thumbnails.length > 0 && (
        <div className="proj-detail__thumbnails">
          {project.thumbnails.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className="proj-detail__thumb"
            />
          ))}
        </div>
      )}

    </div>
  );
}
