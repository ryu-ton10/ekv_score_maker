<template>
  <div>
    <p>メンバーを入力</p>
    <div class="member-input-table">
      <UForm :schema="memberSchema" :state="member" @submit="addMember">
        <p>Aチーム</p>
        <UFormGroup name="name">
          <UInput class="input" v-model="member.name" />
        </UFormGroup>
        <UButton type="submit">Lock</UButton>
      </UForm>
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
    const memberSchema = object(
      { name: string() }
    )

    type Schema = InferType<typeof memberSchema>

    function addMember(event: FormSubmitEvent<Schema>) {
      if (!event.data.name) { return; }
      store.addMember('A', event.data.name)
      console.log(store.members)
    }

    const member = store.member

    return {
      member,
      memberSchema,
      addMember,
    }
  }
})
</script>

<style scoped>
.member-input-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.input {
  margin: 10px;
}
</style>