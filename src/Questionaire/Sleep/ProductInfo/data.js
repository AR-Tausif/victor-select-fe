import { personal, payment, subscription } from "../../Shared/ProductInfo";

export const initialValues = {
  type: "SLEEP",
  personal,
  payment,
  subscription,
  sleepProblems: {
    falling: false,
    fallingExplain: "",
    staying: false,
    stayingAwake: false,
    nightmares: false,
    unexpected: false,
    accident: false,
    accidentExplain: "",
    tooEarly: false,
    none: false
  },
  sleepIssues: {
    takeSomething: false,
    takeSomethingExplain: "",
    alcohol: false,
    alcoholExplain: "",
    sad: false,
    nervous: false,
    unusualHours: false,
    unusualHoursExplain: "",
    none: false
  },
  sleepHealth: {
    legCramps: false,
    headache: false,
    urinate: false,
    difficultyBreathing: false,
    sweat: false,
    dryMouth: false,
    allergies: false,
    allergiesExplain: "",
    none: false
  },
  sleepBehavior: {
    bedtimeWeekday: "",
    bedtimeWeekend: "",
    naps: "0",
    awakenRefreshed: ""
  },
  sleepHistory: {
    sleepStudy: false,
    sleepStudyExplain: "",
    useCPAP: false,
    useCPAPExplain: "",
    tonsilsRemoved: false,
    sinusSurgery: false,
    brokenNose: false,
    headInjury: false,
    distruptConditions: false,
    disruptConditionsExplain: "",
    childProblems: false,
    anythingElse: false,
    anythingElseExplain: "",
    hadExam: false,
    none: false
  },
  sleepSymptoms: {
    restlessLegs: false,
    snoring: false,
    kicking: false,
    kickingExplain: "",
    grindTeeth: false,
    none: false
  },
  sleepMedHistory: {
    hypertension: false,
    hypertensionExplain: "",
    heartFailure: false,
    heartFailureExplain: "",
    heartAttack: false,
    heartAttackExplain: "",
    cardiacArrhythmias: false,
    cardiacArrhythmiasExplain: "",
    stroke: false,
    strokeExplain: "",
    thyroidDisease: false,
    thyroidDiseaseExplain: "",
    lungProblems: false,
    lungProblemsExplain: "",
    pulmonaryHypertension: false,
    pulmonaryHypertensionExplain: "",
    diabetes: false,
    diabetesExplain: "",
    parkinsons: false,
    parkinsonsExplain: "",
    anemia: false,
    anemiaExplain: "",
    heartburn: false,
    heartburnExplain: "",
    arthritis: false,
    arthritisExplain: "",
    sexualDysfunction: false,
    sexualDysfunctionExplain: "",
    fibromyalgia: false,
    fibromyalgiaExplain: "",
    depression: false,
    depressionExplain: "",
    seizures: false,
    seizuresExplain: "",
    menopause: false,
    menopauseExplain: "",
    bloodDonations: false,
    bloodDonationsExplain: "",
    lupus: false,
    lupusExplain: "",
    cancer: false,
    cancerExplain: "",
    congestion: false,
    congestionExplain: "",
    kidneyDisease: false,
    kidneyDiseaseExplain: "",
    none: false
  },
  sleepHabits: {
    watchTV: false,
    shareBed: false,
    partnerDisorder: false,
    pets: false,
    drinkCaffeine: false,
    drinkCaffeineExplain: "",
    exercise: false,
    none: false
  },
  sleepDozing: {
    reading: "Never",
    watchingTV: "Never",
    sitting: "Never",
    publicPlace: "Never",
    passenger: "Never",
    lyingDown: "Never",
    talking: "Never",
    afterLunch: "Never"
  },
  sleepFamily: {
    snoring: [],
    narcolepsy: [],
    seizures: [],
    depression: [],
    hypertension: [],
    stroke: [],
    diabetes: []
  },
  otherMeds: {
    hydrocodone: false,
    bupropion: false,
    cimetidine: false,
    stJohnsWart: false,
    terbinafine: false,
    tolazamide: false,
    antiDepressants: false,
    antiDepressantsExplain: "",
    heartMeds: false,
    heartMedsExplain: "",
    mesoridazine: false,
    ketoconazole: false,
    safinamide: false,
    none: false
  },
  otherMedicines: {
    taking: "",
    explain: ""
  },
  anythingElse: {
    answer: "",
    explain: ""
  },
  allergies: {
    have: "",
    explain: ""
  }
};
