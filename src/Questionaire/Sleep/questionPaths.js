import { initialValues } from "./data";
import { drugIds } from "./sleepSelections";

import {
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  VisitStartPage,
  validateVisitStart,
  AnythingElsePage,
  validateAnythingElse,
  PicturesPage,
  validatePictures,
  OtherMedicinesPage,
  validateOtherMedicines
} from "../Pages/Shared";

import {
  SleepProblemsPage,
  validateSleepProblems,
  SleepIssuesPage,
  validateSleepIssues,
  SleepHealthPage,
  validateSleepHealth,
  SleepBehaviorPage,
  validateSleepBehavior,
  SleepHistoryPage,
  validateSleepHistory,
  SleepSymptomsPage,
  validateSleepSymptoms,
  SleepMedHistoryPage,
  validateSleepMedHistory,
  SleepHabitsPage,
  validateSleepHabits,
  SleepDozingPage,
  validateSleepDozing,
  SleepFamilyPage,
  validateSleepFamily,
  SleepAllergiesPage,
  validateSleepAllergies,
  SleepDrugPreferencePage,
  validateSleepDrugPreference,
  SleepDosePage,
  validateSleepDose,
  SleepIntervalPage,
  validateSleepInterval,
  SleepOtherMedicationsPage,
  validateSleepOtherMedications,
  AddonPage,
  validateAddon
} from "../Pages/Sleep";

const pathConstants = {
  ZIPCODE: "Zipcode",
  GENDER: "Gender",
  BIRTHDATE: "Birthdate",
  SOLUTIONTYPE: 1,
  DRUGPREFERENCE: 1,
  SLEEPDOSE: 2,
  ADDON: 3,
  SLEEPINTERVAL: 4,
  SLEEPSTART: 5,
  SLEEPOTHERMEDS: 6,
  SLEEPPROBLEMS: 7,
  SLEEPISSUES: 8,
  SLEEPHEALTH: 9,
  SLEEPBEHAVIOR: 10,
  SLEEPHISTORY: 11,
  SLEEPSYMPTOMS: 12,
  SLEEPHABITS: 13,
  SLEEPDOZING: 14,
  SLEEPMEDHISTORY: 15,
  SLEEPFAMILY: 16,
  OTHERMEDICINES: 34,
  ALLERGIES: 35,
  ANYTHINGELSE: 36,
  PICTURES: 37
};

const pages = [
  {
    key: pathConstants.ZIPCODE,
    component: ZipcodePage,
    validate: validateZipcode
  },
  {
    key: pathConstants.GENDER,
    component: GenderPage,
    validate: validateEitherGender
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate
  },
  {
    key: pathConstants.DRUGPREFERENCE,
    component: SleepDrugPreferencePage,
    validate: validateSleepDrugPreference
  },
  {
    key: pathConstants.SLEEPDOSE,
    component: SleepDosePage,
    validate: validateSleepDose
  },
  {
    key: pathConstants.ADDON,
    component: AddonPage,
    validate: validateAddon
  },
  {
    key: pathConstants.SLEEPINTERVAL,
    component: SleepIntervalPage,
    validate: validateSleepInterval
  },
  {
    key: pathConstants.SLEEPSTART,
    component: VisitStartPage,
    validate: validateVisitStart
  },
  {
    key: pathConstants.SLEEPOTHERMEDS,
    component: SleepOtherMedicationsPage,
    validate: validateSleepOtherMedications
  },
  {
    key: pathConstants.SLEEPPROBLEMS,
    component: SleepProblemsPage,
    validate: validateSleepProblems
  },
  {
    key: pathConstants.SLEEPISSUES,
    component: SleepIssuesPage,
    validate: validateSleepIssues
  },
  {
    key: pathConstants.SLEEPHEALTH,
    component: SleepHealthPage,
    validate: validateSleepHealth
  },
  {
    key: pathConstants.SLEEPBEHAVIOR,
    component: SleepBehaviorPage,
    validate: validateSleepBehavior
  },
  {
    key: pathConstants.SLEEPHISTORY,
    component: SleepHistoryPage,
    validate: validateSleepHistory
  },
  {
    key: pathConstants.SLEEPSYMPTOMS,
    component: SleepSymptomsPage,
    validate: validateSleepSymptoms
  },
  {
    key: pathConstants.SLEEPHABITS,
    component: SleepHabitsPage,
    validate: validateSleepHabits
  },
  {
    key: pathConstants.SLEEPDOZING,
    component: SleepDozingPage,
    validate: validateSleepDozing
  },
  {
    key: pathConstants.SLEEPMEDHISTORY,
    component: SleepMedHistoryPage,
    validate: validateSleepMedHistory
  },
  {
    key: pathConstants.SLEEPFAMILY,
    component: SleepFamilyPage,
    validate: validateSleepFamily
  },
  {
    key: pathConstants.OTHERMEDICINES,
    component: OtherMedicinesPage,
    validate: validateOtherMedicines
  },
  {
    key: pathConstants.ALLERGIES,
    component: SleepAllergiesPage,
    validate: validateSleepAllergies
  },
  {
    key: pathConstants.ANYTHINGELSE,
    component: AnythingElsePage,
    validate: validateAnythingElse
  },
  {
    key: pathConstants.PICTURES,
    component: PicturesPage,
    validate: validatePictures
  }
];

const SkipPage = (key, values) => {
  let skip = false;

  switch (key) {
    case pathConstants.SLEEPDOSE: {
      skip = values.subscription.drugId === drugIds.SLEEP_N;
      break;
    }

    default: {
      skip = false;
    }
  }

  return skip;
};

const sleepQuestionaire = {
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/sleep",
  startPath: "/sleepstart",
  heading: " better sleep ",
  initialValues: initialValues
};

export default sleepQuestionaire;