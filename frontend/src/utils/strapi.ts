import { config } from '../config'
import { IMedia } from '../types/strapi'

function removeTrailingSlash(str: string): string {
  return str.replace(/\/$/, '')
}

function addApiHostToMediaUrl(url: string): string {
  return removeTrailingSlash(config.api.host) + url
}

export function addApiHostToMedia(media: IMedia): IMedia {
  const clone = JSON.parse(JSON.stringify(media)) as IMedia
  const attrs = clone.data.attributes

  attrs.url = addApiHostToMediaUrl(attrs.url)

  if (attrs.formats) {
    attrs.formats.small.url = addApiHostToMediaUrl(attrs.formats.small.url)
    attrs.formats.medium.url = addApiHostToMediaUrl(attrs.formats.medium.url)
    attrs.formats.large.url = addApiHostToMediaUrl(attrs.formats.large.url)
    attrs.formats.thumbnail.url = addApiHostToMediaUrl(attrs.formats.thumbnail.url)
  }

  clone.data.attributes = attrs
  return clone
}

export function trimPostDescription(description: string, length: number): string {
  return description.length > length ? `${description.slice(0, length)}...` : description
}
