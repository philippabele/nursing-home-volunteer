import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import striptags from 'striptags'

/**
 * Parses the given markdown and sanitizes the html.
 * @param markdown Markdown to parse.
 * @returns Parsed and sanitized html.
 */
export function markdownToHtml(markdown: string): string {
  if (!markdown) return ''
  const html = marked(markdown, {
    breaks: true,
    gfm: true,
  })

  return sanitizeHtml(html)
}

/**
 * Removes all html from the given string.
 * @param html String with html.
 * @returns String without html.
 */
export function stripHtml(html: string): string {
  return striptags(html, [], ' ')
}

/**
 * Removes all markdown from the given string.
 * @param markdown String with markdown.
 * @returns String without markdown.
 */
export function stripMarkdown(markdown: string): string {
  return stripHtml(markdownToHtml(markdown))
}
