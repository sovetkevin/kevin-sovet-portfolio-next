import React from 'react';

/** Matches <a href="URL" ...>label</a> so you can write custom link text in descriptions. */
const ANCHOR_TAG_REGEX = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;

/** Matches raw http(s) URLs for auto-linking when no custom anchor is used. */
const URL_REGEX = /(https?:\/\/\S+)/g;

function trimTrailingPunctuation(url: string): string {
  return url.replace(/[.,;:!?)]+$/, '');
}

function makeLink(
  href: string,
  children: React.ReactNode,
  index: number,
  linkClassName: string
): React.ReactElement {
  return (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {children}
    </a>
  );
}

/**
 * Converts plain text into React nodes with clickable links. Supports:
 * - Custom anchors: <a href="https://..." target="_blank">Label</a> → link with "Label" as text
 * - Raw URLs: https://example.com → auto-linked (trailing punctuation trimmed from href)
 */
export function linkify(text: string, linkClassName?: string): React.ReactNode {
  if (!text) return null;

  const className = linkClassName ?? 'premium-link';
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Find next occurrence of either custom <a> tag or raw URL (whichever comes first)
  ANCHOR_TAG_REGEX.lastIndex = 0;
  URL_REGEX.lastIndex = 0;

  let anchorMatch: RegExpExecArray | null = null;
  let urlMatch: RegExpExecArray | null = null;

  const nextAnchor = () => {
    ANCHOR_TAG_REGEX.lastIndex = lastIndex;
    return ANCHOR_TAG_REGEX.exec(text);
  };
  const nextUrl = () => {
    URL_REGEX.lastIndex = lastIndex;
    return URL_REGEX.exec(text);
  };

  for (;;) {
    anchorMatch = nextAnchor();
    urlMatch = nextUrl();

    // Pick the match that appears first (and is at or after lastIndex)
    const anchorIndex = anchorMatch ? anchorMatch.index : Infinity;
    const urlIndex = urlMatch ? urlMatch.index : Infinity;
    const firstIndex = Math.min(anchorIndex, urlIndex);

    if (firstIndex === Infinity || firstIndex >= text.length) {
      break;
    }

    if (firstIndex > lastIndex) {
      parts.push(text.slice(lastIndex, firstIndex));
    }

    if (anchorMatch && anchorIndex <= urlIndex) {
      const [, href, label] = anchorMatch;
      parts.push(makeLink(href.trim(), label.trim(), firstIndex, className));
      lastIndex = anchorMatch.index + anchorMatch[0].length;
    } else if (urlMatch && urlIndex <= anchorIndex) {
      const [fullMatch] = urlMatch;
      const href = trimTrailingPunctuation(fullMatch);
      parts.push(makeLink(href, href, urlMatch.index, className));
      lastIndex = urlMatch.index + fullMatch.length;
    }
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <>{parts}</>;
}
