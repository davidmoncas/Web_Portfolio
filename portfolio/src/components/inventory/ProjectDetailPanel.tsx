import { useState } from 'react';
import { useI18n } from '../../i18n/I18nContext';
import type { Project } from '../../types';
import { resolveTemplate } from './projectTemplates';

interface Props {
  project: Project | null;
}

const LINK_ICONS: Record<string, string> = {
  youtube: 'YT',
  github: 'GH',
  itch: 'itch',
  web: 'WEB',
};

export function ProjectDetailPanel({ project }: Props) {
  const { t } = useI18n();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="proj-detail proj-detail--empty">
        <p>{t.inventory.empty}</p>
      </div>
    );
  }

  const proj = t.inventory.projects[project.id];
  const { sections, stats = ['year', 'techStack', 'role', 'other'] } = resolveTemplate(project.template);
  const has = (section: string) => sections.includes(section as never);
  const headerImage = project.panelImageUrl ?? project.imageUrl;

  return (
    <div className="proj-detail">

      {/* ── Header subpanel: image, name, subtitle, tag, completion bar ── */}
      {has('header') && (
        <div className="proj-detail__header-subpanel">
          <div className="proj-detail__header">
            <div className="proj-detail__image-box">
              {headerImage ? (
                <img
                  src={headerImage}
                  alt={project.name}
                  className="proj-detail__image"
                />
              ) : (
                <div className="proj-detail__image-placeholder">
                  <span>{project.icon}</span>
                </div>
              )}
            </div>
            <div className="proj-detail__header-text">
              <span className={`proj-detail__category-tag proj-detail__category-tag--${project.category}`}>
                {t.inventory.categories[project.category]}
              </span>
              <h2 className="proj-detail__name">{project.name}</h2>
              <p className="proj-detail__subtitle">{proj?.otherInfo ?? project.otherInfo}</p>
            </div>
          </div>
          {project.completion !== undefined && (
            <div className="proj-detail__completion">
              <div className="proj-detail__completion-labels">
                <span className="proj-detail__completion-text">COMPLETION</span>
                <span className="proj-detail__completion-pct">{project.completion}%</span>
              </div>
              <div className="proj-detail__completion-track">
                <div
                  className="proj-detail__completion-fill"
                  style={{ width: `${project.completion}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Stats grid ── */}
      {has('stats') && stats.length > 0 && (
        <div className="proj-detail__stats">
          {stats.includes('year') && (
            <div className="proj-stat">
              <span className="proj-stat__label">{t.inventory.stats.year}</span>
              <span className="proj-stat__value">{project.year}</span>
            </div>
          )}
          {stats.includes('techStack') && (
            <div className="proj-stat">
              <span className="proj-stat__label">{t.inventory.stats.techStack}</span>
              <span className="proj-stat__value">{project.techStack.join(', ')}</span>
            </div>
          )}
          {stats.includes('role') && (
            <div className="proj-stat">
              <span className="proj-stat__label">{t.inventory.stats.role}</span>
              <span className="proj-stat__value">{proj?.role ?? project.role}</span>
            </div>
          )}
          {stats.includes('company') && (
            <div className="proj-stat">
              <span className="proj-stat__label">{t.inventory.stats.company}</span>
              <span className="proj-stat__value">{project.company}</span>
            </div>
          )}
          {stats.includes('other') && (
            <div className="proj-stat">
              <span className="proj-stat__label">{t.inventory.stats.other}</span>
              <span className="proj-stat__value">{proj?.otherInfo ?? project.otherInfo ?? '—'}</span>
            </div>
          )}
        </div>
      )}

      {/* ── Gallery (clickable previews with lightbox) ── */}
      {has('gallery') && project.thumbnails && project.thumbnails.length > 0 && (
        <div className="proj-detail__gallery">
          {project.thumbnails.map((src, i) => (
            <button
              key={i}
              className="proj-gallery__thumb-btn"
              onClick={() => setLightboxSrc(src)}
              title={`${project.name} screenshot ${i + 1}`}
            >
              <img
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                className="proj-gallery__thumb"
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Thumbnails (legacy inline display) ── */}
      {has('thumbnails') && project.thumbnails && project.thumbnails.length > 0 && (
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

      {/* ── Lightbox ── */}
      {lightboxSrc && (
        <div className="proj-lightbox" onClick={() => setLightboxSrc(null)}>
          <button
            className="proj-lightbox__close"
            onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Preview"
            className="proj-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── Description ── */}
      {has('description') && (
        <div className="proj-detail__desc-section">
          {(proj?.description ?? project.description).split('\n\n').map((para, i) => (
            <p key={i} className="proj-detail__desc">{para}</p>
          ))}
        </div>
      )}

      {/* ── Links ── */}
      {has('links') && project.links && project.links.length > 0 && (
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



    </div>
  );
}
