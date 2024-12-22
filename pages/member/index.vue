<template>
  <div>
    <div class="input-table">
      <UForm :schema="teamNameSchema" :state="teamName" @submit="addTeamName">
        <p>チーム名を入力</p>
        <UFormGroup name="teamName">
          <UInput class="input" v-model="teamName.name" />
        </UFormGroup>
        <UButton type="submit">追加</UButton>
      </UForm>
      <div>
        <div v-for="teamName in teamNames">
          <p>{{ teamName.name }}</p>
        </div>
      </div>
    </div>
    <div class="input-table">
      <UForm :schema="memberSchema" :state="member" @submit="addMember">
        <p>メンバーを入力</p>
        <USelectMenu
          v-model="selectedTeam"
          :options="teamNames"
          option-attribute="name"
          placeholder="チームを選択"
        />
        <UFormGroup name="name">
          <UInput class="input" v-model="member.name" />
        </UFormGroup>
        <UButton type="submit">追加</UButton>
      </UForm>
      <div>
        <div v-for="member in members">
          <p>{{ member.name }}</p>
        </div>
      </div>
    </div>
    <div class="member-show-table">
    </div>
    <NuxtLink to='/input'>
      <UButton>スコア集計を開始する</UButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { object, string, type InferType } from 'yup'
import { useMembersStore } from '@/stores/members'
import type { FormSubmitEvent } from '#ui/types'

export default defineComponent({
  setup() {
    const store = useMembersStore()
    const teamNameSchema = object(
      { name: string() }
    )
    const memberSchema = object(
      { name: string() }
    )

    type TeamNameSchema = InferType<typeof teamNameSchema>
    type MemberSchema = InferType<typeof memberSchema>

    function addTeamName(event: FormSubmitEvent<TeamNameSchema>) {
      if (!event.data.name) { return; }
      store.addTeamName(event.data.name)
    }

    function addMember(event: FormSubmitEvent<MemberSchema>) {
      if (!event.data.name) { return; }
      store.addMember(selectedTeam.value.name, event.data.name)
    }

    const teamNames = store.rawTeamNames
    const teamName = store.teamName
    const selectedTeam = ref(teamNames[0])
    const members = store.rawMembers
    const member = store.member

    return {
      members,
      member,
      teamNames,
      teamName,
      selectedTeam,
      teamNameSchema,
      memberSchema,
      addMember,
      addTeamName,
    }
  }
})
</script>

<style scoped>
.input-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 30px 0;
}

.input {
  margin: 10px;
}
</style>