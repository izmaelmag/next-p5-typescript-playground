export const toRad = (deg: number): number => {
  return ((deg * Math.PI) / 180) % (Math.PI * 2);
};
