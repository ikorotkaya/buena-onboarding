import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type OnboardingStore = {
  name: string;
  email: string;
  phoneNumber: string;
  income: string;
  currentPageIndex: number;

  setFullName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setSalary: (income: string) => void;  
  setCurrentPageIndex: (page: number) => void;  
};

type OnboardingStoreState = {
  $$storeMutators?: Array<[(state: OnboardingStore) => void, string]>;
} & OnboardingStore;

export const useOnboardingStore = create(
  persist<OnboardingStoreState>(
    (set) => ({
      name: "",
      email: "",
      phoneNumber: "",
      income: "",
      currentPageIndex: 0,

      setFullName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      setSalary: (income) => set({ income }),
      setCurrentPageIndex: (currentPageIndex) => set({ currentPageIndex }),      
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
