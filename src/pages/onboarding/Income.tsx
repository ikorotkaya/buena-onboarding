import React, { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import { useOnboardingStore } from "../../store";
import Headline from "../../components/headlines/Headline";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const incomeRanges = [
  { value: "0-1000", label: "< 1.000 EUR" },
  { value: "1000-2000", label: "1.000 - 2.000 EUR" },
  { value: "2000-3000", label: "2.000 - 3.000 EUR" },
  { value: "3000-4000", label: "3.000 - 4.000 EUR" },
  { value: "4000-plus", label: "> 4.000 EUR" }
];

export default function Income() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { income, setIncome, incomeValid, setIncomeValid, nextOnboardingPage } =
    useOnboardingStore();

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIncome = e.target.value;
    setIncome(newIncome);
  };

  const handleFormSubmit = (e: React.KeyboardEvent) => {
    if (incomeValid && e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      navigate(`/onboarding/${nextOnboardingPage}`);
    }
  };

  useEffect(() => {
    setIncomeValid(income !== "");
  }, [income]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">{t("pages.income.headline")}</Headline>

      <div className="mb-4 space-y-4">
        {incomeRanges.map((range, index) => (
          <div key={range.value} className="flex items-center">
            <label
              htmlFor={`income-${index}`}
              className="flex cursor-pointer items-center text-sm font-medium leading-6"
            >
              <input
                onKeyDown={handleFormSubmit}
                onChange={handleIncomeChange}
                type="radio"
                id={`income-${index}`}
                name="income"
                value={range.value}
                autoFocus={income ? income === range.value : index === 0}
                checked={income === range.value}
                className="mr-2 h-4 w-4 cursor-pointer checked:bg-cyan-700 focus:ring-cyan-700 checked:focus:bg-cyan-700"
              />

              {range.label}
            </label>
          </div>
        ))}
      </div>

      <NextButton className="hidden md:flex" disabled={!incomeValid} />
    </div>
  );
}
