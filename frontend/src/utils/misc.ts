let nextRunetimeId = 1

/**
 * Gets an id that is unique for the runetime of the application, starting with 1.
 * If the app is reloaded by e.g. the user, the id will be reset to 1.
 * @returns Unique runetime id.
 */
export function getUniqueRuntimeId(): number {
  return nextRunetimeId++
}
