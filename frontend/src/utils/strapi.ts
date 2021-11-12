import { config } from '../config'
import { IMedia } from '../types/blog'

function removeTrailingSlash(str: string): string {
  return str.replace(/\/$/, '')
}

function addApiHostToMediaUrl(url: string): string {
  return removeTrailingSlash(config.api.host) + url
}

export function addApiHostToMedia(media: IMedia): IMedia {
  const clone = JSON.parse(JSON.stringify(media)) as IMedia
  clone.url = addApiHostToMediaUrl(clone.url)

  clone.formats.small.url = addApiHostToMediaUrl(clone.formats.small.url)
  clone.formats.medium.url = addApiHostToMediaUrl(clone.formats.medium.url)
  clone.formats.large.url = addApiHostToMediaUrl(clone.formats.large.url)
  clone.formats.thumbnail.url = addApiHostToMediaUrl(clone.formats.thumbnail.url)
  return clone
}
