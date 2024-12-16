<template>
  <div>
    <p>メンバーを入力</p>
    <div class="member-input-table">
      <div>
        <p>Aチーム</p>
        <UInput class="input" />
        <UInput class="input" />
        <UInput class="input" />
      </div>
      <div>
        <p>Bチーム</p>
        <UInput class="input" />
        <UInput class="input" />
        <UInput class="input" />
      </div>
      <div>
        <p>Cチーム</p>
        <UInput class="input" />
        <UInput class="input" />
        <UInput class="input" />
      </div>
      <div>
        <p>Dチーム</p>
        <UInput class="input" />
        <UInput class="input" />
        <UInput class="input" />
      </div>
    </div>
  </div>
</template>

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