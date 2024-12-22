import { defineStore } from 'pinia'

export const useMembersStore = defineStore('membersStore', {
  state: () => ({
    rawTeamNames: [] as Array<{ name: string }>, 
    teamName: {} as { name: string },
    rawMembers: [] as Array<{ team: string; name: string }>,
    member: {} as { team: string; name: string },
  }),
  getters: {
    teamNames: (state): Array<{ team: string; name: string }> =>
      state.rawMembers,
    members: (state): Array<{ team: string; name: string }> =>
      state.rawMembers,
  },
  actions: {
    addTeamName(name: string) {
      this.rawTeamNames.push({ name: name })
    },
    addMember(team: string, name: string) {
      this.rawMembers.push({ team: team, name: name })
    },
  }
})