/** Get the reverse domain name id for a plugin at a given path */
export function getPluginId(ID_In, path) {
  return `${ID_In}/${path}`;
}
