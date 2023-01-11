export function initInitials(userName: string): string {
  return userName?.split(' ').map((string: string) => {
    return string[0];
  }).join('').toUpperCase();
}