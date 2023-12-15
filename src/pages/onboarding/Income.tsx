import React, { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import { useOnboardingStore } from "../../store";
import Headline from "../../components/headlines/Headline";
import { useTranslation } from "react-i18next";

const incomeRanges = [
  { value: "0-1000", label: "0 - 1.000" },
  { value: "1000-2000", label: "1.000 - 2.000" },
  { value: "2000-3000", label: "2.000 - 3.000" },
  { value: "3000-4000", label: "3.000 - 4.000" },
  { value: "4000-plus", label: "> 4.000" }
];

export default function Income() {
  const { t } = useTranslation();
  const { income, setIncome, incomeValid, setIncomeValid } =
    useOnboardingStore();

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIncome = e.target.value;
    setIncome(newIncome);
  };

  useEffect(() => {
    setIncomeValid(income !== "");
  }, [income]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">{t("pages.income.headline")}</Headline>

      <div className="space-y-4 mb-4">
        {incomeRanges.map((range, index) => (
          <div key={range.value} className="flex items-center">
            <label
              htmlFor={`income-${index}`}
              className="flex items-center text-sm leading-0 font-medium leading-6 cursor-pointer"
            >
              <input
                type="radio"
                id={`income-${index}`}
                value={range.value}
                checked={income === range.value}
                onChange={handleIncomeChange}
                className="h-4 w-4 mr-2 checked:bg-cyan-700 checked:focus:bg-cyan-700 focus:ring-cyan-700 cursor-pointer"
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
