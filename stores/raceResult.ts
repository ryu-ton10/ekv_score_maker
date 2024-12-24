import { defineStore } from 'pinia'
import type { MemberEntity } from './members';

export const useRaceResultStore = defineStore('raceResultStore', {
  state: () => ({
    rawRaceResults: [] as Array<{ raceNumber: number; rank: number; member: MemberEntity }>
  }),
})