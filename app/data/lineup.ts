/**
 * Fictional lineup — display names as intended (styling applied in UI).
 */

export interface LineupAct {
  /** Stable id for keys */
  id: string
  /** Primary display string */
  displayName: string
  /** Optional subtitle, e.g. special set */
  note?: string
}

export const lineupActs: LineupAct[] = [
  { id: 'heartstring', displayName: 'DJ Heartstring' },
  { id: 'pegassi', displayName: 'Pegassi' },
  {
    id: 'mallgrab',
    displayName: 'Mall Grab',
    note: 'Long set',
  },
  {
    id: 'yukimatsu',
    displayName: '¥ØU$UK€ ¥UK1MAT$U',
  },
  { id: 'u96', displayName: 'U96' },
  { id: 'brutalismus3000', displayName: 'Brutalismus 3000' },
  { id: 'kobosil', displayName: 'Kobosil' },
  { id: 'horsegiirl', displayName: 'horsegiirL' },
  { id: 'atrip', displayName: 'ATRIP' },
  { id: 'kettama', displayName: 'Kettama' },
  { id: 'swim', displayName: 'Swim' },
  {
    id: 'fred-four-sk',
    displayName: 'Fred Again.. b2b Four Tet b2b Skrillex',
  },
  {
    id: 'worm-eurohead',
    displayName: 'DJ Worm b2b Eurohead',
  },
  {
    id: 'ecco2k',
    displayName: 'Ecco2k',
    note: 'Special set',
  },
]
