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
</template>

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