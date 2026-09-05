import { create } from "zustand";
import { SECTIONS, type Version } from "@/lib/doc";

type ReaderState = {
  version: Version;
  sectionId: string;
  query: string;
  tocOpen: boolean;
  setVersion: (version: Version) => void;
  setSection: (sectionId: string) => void;
  setQuery: (query: string) => void;
  setTocOpen: (open: boolean) => void;
  next: () => void;
  prev: () => void;
};

export const useReader = create<ReaderState>((set, get) => ({
  version: "v2",
  sectionId: "cover",
  query: "",
  tocOpen: false,
  setVersion: (version) => set({ version }),
  setSection: (sectionId) => set({ sectionId, tocOpen: false }),
  setQuery: (query) => set({ query }),
  setTocOpen: (tocOpen) => set({ tocOpen }),
  next: () => {
    const index = SECTIONS.findIndex((section) => section.id === get().sectionId);
    const next = SECTIONS[Math.min(SECTIONS.length - 1, index + 1)];
    if (next) set({ sectionId: next.id, tocOpen: false });
  },
  prev: () => {
    const index = SECTIONS.findIndex((section) => section.id === get().sectionId);
    const prev = SECTIONS[Math.max(0, index - 1)];
    if (prev) set({ sectionId: prev.id, tocOpen: false });
  },
}));
