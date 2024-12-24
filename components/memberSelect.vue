<template>
  <p>{{ rank }}</p>
  <USelectMenu
    searchable
    searchable-placeholder="名前を入力..."
    placeholder="メンバーを選択"
    :options="membersStore.members.map((m) => m.name)"
    v-model="selectedMember"
  />
</template>

<script setup lang="ts">
import { useMembersStore } from '@/stores/members'

defineProps<{
  rank: string
}>()

const membersStore = useMembersStore()
const selectedMember = ref()
</script>