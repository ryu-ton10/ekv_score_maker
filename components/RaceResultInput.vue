<script setup lang="ts">
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

<template>
  <UTabs :items="items" class="w-full">
    <template #first="{ item }">
      <UCard>
        <template #header>
          <p>{{ item.label }}</p>
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
</template>