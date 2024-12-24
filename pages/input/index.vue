<template>
  <div className="card-select">
    <div>特殊カードを選択</div>
    <div>
      <div class="card-select-table">
        <UCheckbox>
          <template #label>
            <img src="@/public/invalid.png">
          </template>
        </UCheckbox>
        <UCheckbox>
          <template #label>
            <img src="@/public/double.png">
          </template>
        </UCheckbox>
        <UCheckbox>
          <template #label>
            <img src="@/public/triple.png">
          </template>
        </UCheckbox>
        <UCheckbox>
          <template #label>
            <img src="@/public/quatro.png">
          </template>
        </UCheckbox>
      </div>
    </div>
  </div>
  <UTabs :items="items" class="w-full">
    <template #first="{ item }">
      <UCard>
        <template #header>
          <MemberSelect rank="1st" />
          <MemberSelect rank="2nd" />
          <MemberSelect rank="3rd" />
          <MemberSelect rank="4th" />
          <MemberSelect rank="5th" />
          <MemberSelect rank="6th" />
          <MemberSelect rank="7th" />
          <MemberSelect rank="8th" />
          <MemberSelect rank="9th" />
          <MemberSelect rank="10th" />
          <MemberSelect rank="11th" />
          <MemberSelect rank="12th" />
        </template>
      </UCard>
    </template>
    <template #second="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #third="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #fourth="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #fifth="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #sixth="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #seventh="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
    <template #eighth="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
        </template>
      </UCard>
    </template>
  </UTabs>
  <NuxtLink to='/member'>
    <UButton>メンバー入力に戻る</UButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useMembersStore } from '@/stores/members'

const membersStore = useMembersStore()
const selectedMember = ref()
const items = [
  {
    slot: 'first',
    label: '1st Race'
  },
  {
    slot: 'second',
    label: '2nd Race'
  },
  {
    slot: 'third',
    label: '3rd Race'
  },
  {
    slot: 'fourth',
    label: '4th Race'
  },
  {
    slot: 'fifth',
    label: '5th Race'
  },
  {
    slot: 'sixth',
    label: '6th Race'
  },
  {
    slot: 'seventh',
    label: '7th Race'
  },
  {
    slot: 'eighth',
    label: '8th Race'
  },
]

</script>

<style scoped>
.card-select {
  padding: 50px 0;
}
.card-select-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>