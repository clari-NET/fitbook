export default function getIcon(category) {
  switch (category) {
    case 'Swimming':
      return 'swim';
    case 'Bench Press':
      return 'weight-lifter';
    case 'Golf':
      return 'golf';
    case 'Basketball':
      return 'basketball-hoop';
    case 'Volleyball':
      return 'volleyball';
    case 'Soccer':
      return 'soccer';
    case 'Baseball':
      return 'baseball-bat';
    case 'Cycling':
      return 'bike-fast';
    default:
      return 'arm-flex';
  }
}
