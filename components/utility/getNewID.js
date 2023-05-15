let lastId = 0;

export default function getNewID(prefix = 'id') {
  lastId++;
  return `${prefix}${lastId}`;
}
