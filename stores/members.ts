import { defineStore } from 'pinia'

export const useMembersStore = defineStore('membersStore', {
  state: () => ({
    rawMembers: [] as Array<{ team: string; name: string }>,
    member: {} as { team: string; name: string },
  }),
  getters: {
    members: (state): Array<{ team: string; name: string }> =>
      state.rawMembers
  },
  actions: {
    addMember(team: string, name: string) {
      this.rawMembers.push({ team: team, name: name })
    },
  }
})