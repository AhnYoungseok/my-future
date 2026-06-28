"use client";

const key = "career-compass-pro-portfolio";

export type PortfolioState = {
  majors: string[];
  jobs: string[];
  companies: string[];
  diagnosis?: unknown;
};

export const emptyPortfolio: PortfolioState = {
  majors: [],
  jobs: [],
  companies: []
};

export function loadPortfolio(): PortfolioState {
  if (typeof window === "undefined") return emptyPortfolio;
  try {
    return { ...emptyPortfolio, ...JSON.parse(window.localStorage.getItem(key) || "{}") };
  } catch {
    return emptyPortfolio;
  }
}

export function savePortfolio(state: PortfolioState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(state));
}

export function toggleSaved(type: keyof Pick<PortfolioState, "majors" | "jobs" | "companies">, id: string) {
  const state = loadPortfolio();
  const set = new Set(state[type]);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  const next = { ...state, [type]: Array.from(set) };
  savePortfolio(next);
  return next;
}
