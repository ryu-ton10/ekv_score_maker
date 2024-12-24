import { defineStore } from 'pinia'

export type MemberEntity = {
  team: string;
  name: string;
}

export const useMembersStore = defineStore('membersStore', {
  state: () => ({
    rawTeamNames: [] as Array<{ name: string }>, 
    teamName: {} as { name: string },
    rawMembers: [] as Array<MemberEntity>,
    member: {} as MemberEntity,
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