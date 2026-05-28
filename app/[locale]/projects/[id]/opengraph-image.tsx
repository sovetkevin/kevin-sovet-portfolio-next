import { ImageResponse } from 'next/og';
import { PROJECTS_DATA } from '@/data/constants';
import { resolveLocalizedValue } from '@/utils/localization';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr'; id: string }>;
}) {
  const { locale, id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    return new ImageResponse(
      <div style={{ width: 1200, height: 630, background: '#eef7f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 48, color: '#1a1a1a', fontWeight: 700 }}>Kevin Sovet</span>
      </div>
    );
  }

  const baseUrl = 'https://by-sovet.me';
  const imageUrl = `${baseUrl}${project.thumbnail}`;
  const projectType = resolveLocalizedValue(project.type, locale);
  const projectDescription = resolveLocalizedValue(project.description, locale);

  const shortDesc =
    projectDescription.length > 240 ? projectDescription.slice(0, 240).trimEnd() + '...' : projectDescription;

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        fontFamily: 'sans-serif',
      }}
    >
      <img
        src={imageUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '480px',
          background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '64px 80px',
        }}
      >
        <span style={{ fontSize: 16, color: '#0891b2', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {projectType}
        </span>
        <h1 style={{ fontSize: 72, color: '#111827', fontWeight: 900, lineHeight: 1, margin: 0, letterSpacing: '-0.03em' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: 22, color: '#4b5563', fontWeight: 400, lineHeight: 1.4, margin: 0, maxWidth: 750 }}>{shortDesc}</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
          {project.category.map((cat) => (
            <span
              key={cat}
              style={{
                fontSize: 13,
                color: '#374151',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'rgba(0,0,0,0.07)',
                padding: '8px 18px',
                borderRadius: '100px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>,
    { ...size }
  );
}
