export function normalizeMajorName(name: string) {
  return name.trim().replace(/\s+/g, " ").replace(/학부$/, "학과");
}
