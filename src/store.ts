import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type OnboardingStore = {
  name: string;
  email: string;
  phoneNumber: string;
  income: string;
  currentPageIndex: number;
  isNextButtonDisabled: boolean;

  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setIncome: (income: string) => void;  
  setCurrentPageIndex: (page: number) => void;  
  setIsNextButtonDisabled: (disabled: boolean) => void;
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
      isNextButtonDisabled: true,

      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      setIncome: (income) => set({ income }),
      setCurrentPageIndex: (currentPageIndex) => set({ currentPageIndex }),
      setIsNextButtonDisabled: (isNextButtonDisabled) => set({ isNextButtonDisabled }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
