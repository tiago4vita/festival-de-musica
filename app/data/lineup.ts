/**
 * Fictional two-day schedule — display names as intended (styling applied in UI).
 */

export type LineupStage = 'MAIN' | 'LAB'

export interface LineupScheduleRow {
  /** Stable id for keys */
  id: string
  stage: LineupStage
  /** Primary display string */
  displayName: string
  /** Optional subtitle, e.g. special set */
  note?: string
}

export interface LineupDayBlock {
  id: string
  /** Short weekday label, e.g. FRI */
  weekday: string
  /** e.g. [NOV] */
  monthBracket: string
  dayOfMonth: number
  /** e.g. '26 */
  yearShort: string
  /** e.g. [UK] */
  countryCode: string
  rows: LineupScheduleRow[]
}

/** Ordinal suffix for English day-of-month (20th, 21st, …). */
export function ordinalSuffix(day: number): string {
  const j = day % 10
  const k = day % 100
  if (k >= 11 && k <= 13) return 'th'
  if (j === 1) return 'st'
  if (j === 2) return 'nd'
  if (j === 3) return 'rd'
  return 'th'
}

/**
 * Friday / Saturday — MAIN vs LAB; wide grid alignment in `lineup-section.vue`.
 */
export const lineupDays: LineupDayBlock[] = [
  {
    id: 'day-1',
    weekday: 'FRI',
    monthBracket: '[NOV]',
    dayOfMonth: 20,
    yearShort: "'26",
    countryCode: '[UK]',
    rows: [
      { id: 'ihm', stage: 'MAIN', displayName: 'I Hate Models' },
      { id: 'peggy', stage: 'MAIN', displayName: 'Peggy Gou' },
      {
        id: 'fred-four-sk',
        stage: 'MAIN',
        displayName: 'Fred Again.. b2b Four Tet b2b Skrillex',
      },
      { id: 'klang', stage: 'MAIN', displayName: 'Klangkuenstler' },
      { id: 'sara-landry', stage: 'MAIN', displayName: 'Sara Landry' },
      { id: 'heartstring', stage: 'MAIN', displayName: 'DJ Heartstring' },
      { id: 'ueberrest', stage: 'LAB', displayName: 'Ueberrest' },
      { id: 'shlomo', stage: 'LAB', displayName: 'Shlomo' },
      { id: 'mischluft', stage: 'LAB', displayName: 'Mischluft' },
      { id: 'alex-farell', stage: 'LAB', displayName: 'Alex Farell' },
      { id: 'kettama', stage: 'LAB', displayName: 'Kettama' },
    ],
  },
  {
    id: 'day-2',
    weekday: 'SAT',
    monthBracket: '[NOV]',
    dayOfMonth: 21,
    yearShort: "'26",
    countryCode: '[UK]',
    rows: [
      { id: 'brutalismus3000', stage: 'MAIN', displayName: 'Brutalismus 3000' },
      { id: 'kobosil', stage: 'MAIN', displayName: 'Kobosil' },
      { id: 'horsegiirl', stage: 'MAIN', displayName: 'horsegiirL' },
      { id: 'mallgrab', stage: 'MAIN', displayName: 'Mall Grab', note: 'Long set' },
      {
        id: 'yukimatsu',
        stage: 'MAIN',
        displayName: '¥ØU$UK€ ¥UK1MAT$U',
      },
      { id: 'u96', stage: 'MAIN', displayName: 'U96' },
      { id: 'pegassi', stage: 'LAB', displayName: 'Pegassi' },
      { id: 'atrip', stage: 'LAB', displayName: 'ATRIP' },
      { id: 'swim', stage: 'LAB', displayName: 'Swim' },
      {
        id: 'worm-eurohead',
        stage: 'LAB',
        displayName: 'DJ Worm b2b Eurohead',
      },
      {
        id: 'ecco2k',
        stage: 'LAB',
        displayName: 'Ecco2k',
        note: 'Special set',
      },
    ],
  },
]
