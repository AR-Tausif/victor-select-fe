import { initialValues } from "./data";

import {
  ZipcodePage,
  validateZipcode,
  GenderPage,
  validateEitherGender,
  BirthdatePage,
  validateBirthdate,
  VisitStartPage,
  validateVisitStart,
  PicturesPage,
  validatePictures,
  ShippingPage,
  validateShipping,
} from "../../Shared/Pages";

import {
  PaymentInfoPage,
  validatePaymentInfo,
} from "../../Shared/Pages/PaymentPage";

import {
  JoyIntervalPage,
  validateJoyInterval,
  HowOftenPage,
  validateHowOften,
  HowOften2Page,
  validateHowOften2,
  HowOften3Page,
  validateHowOften3,
  SeenPhysicianPage,
  validateSeenPhysician,
  SocialFactorsPage,
  validateSocialFactors,
  SummaryPage,
  validateSummary,
} from "../Pages";

const pathConstants = {
  ZIPCODE: "zipcode",
  GENDER: "gender",
  FEMALE_ED: "genderf",
  BIRTHDATE: "birthdate",
  DRUGPREFERENCE: 1,
  TIMESPERMONTH: 2,
  VISITSTART: 7,
  HOWOFTEN: 8,
  HOWOFTEN2: 9,
  HOWOFTEN3: 10,
  SEENPHYSICIAN: 11,
  HEADISSUES: 12,
  SYMPTOMSBEGAN: 13,
  SYMPTOMMONTHS: 14,
  SOCIALFACTORS: 16,
  MAKEWORSE: 17,
  SMOKING: 18,
  DWELLING: 19,
  OTHERMEDICINES: 20,
  ALLERGYMEDICATIONS: 21,
  PROBLEMS: 22,
  SKINTESTING: 23,
  ALLERGYSHOTS: 24,
  ENVIRONMENTAL: 25,
  DUSTANDMOLD: 26,
  ANYTHINGELSE: 40,
  PICTURES: "photos",
  SUMMARY: "summary",
  SHIPPING: "shipping",
  PAYMENT: "payment",
};

const pages = [
  {
    key: pathConstants.ZIPCODE,
    component: ZipcodePage,
    validate: validateZipcode,
  },
  {
    key: pathConstants.GENDER,
    component: GenderPage,
    validate: validateEitherGender,
  },
  {
    key: pathConstants.BIRTHDATE,
    component: BirthdatePage,
    validate: validateBirthdate,
  },
  {
    key: pathConstants.TIMESPERMONTH,
    component: JoyIntervalPage,
    validate: validateJoyInterval,
  },
  {
    key: pathConstants.VISITSTART,
    component: VisitStartPage,
    validate: validateVisitStart,
  },
  {
    key: pathConstants.HOWOFTEN,
    component: HowOftenPage,
    validate: validateHowOften,
  },
  {
    key: pathConstants.HOWOFTEN2,
    component: HowOften2Page,
    validate: validateHowOften2,
  },
  {
    key: pathConstants.HOWOFTEN3,
    component: HowOften3Page,
    validate: validateHowOften3,
  },
  {
    key: pathConstants.SEENPHYSICIAN,
    component: SeenPhysicianPage,
    validate: validateSeenPhysician,
  },
  {
    key: pathConstants.SOCIALFACTORS,
    component: SocialFactorsPage,
    validate: validateSocialFactors,
  },
  {
    key: pathConstants.PICTURES,
    component: PicturesPage,
    validate: validatePictures,
  },
  {
    key: pathConstants.SUMMARY,
    component: SummaryPage,
    validate: validateSummary,
  },
  {
    key: pathConstants.SHIPPING,
    component: ShippingPage,
    validate: validateShipping,
  },
  {
    key: pathConstants.PAYMENT,
    component: PaymentInfoPage,
    validate: validatePaymentInfo,
  },
];

const SkipPage = (key) => {
  let skip = false;

  switch (key) {
    default:
      skip = false;
  }

  return skip;
};

export const joyQuestionaire = {
  type: "JOY",
  pages: pages,
  skipPage: SkipPage,
  pathBase: "/visit/Joy",
  startPath: "/joystart",
  heading: " getting rid of your blues ",
  initialValues: initialValues,
};
