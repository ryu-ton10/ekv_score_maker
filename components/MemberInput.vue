<template>
  <div>
    <p>メンバーを入力</p>
    <div class="member-input-table">
      <div>
        <p>Aチーム</p>
        <UInput />
        <UInput />
        <UInput />
      </div>
      <div>
        <p>Bチーム</p>
        <UInput />
        <UInput />
        <UInput />
      </div>
      <div>
        <p>Cチーム</p>
        <UInput />
        <UInput />
        <UInput />
      </div>
      <div>
        <p>Dチーム</p>
        <UInput />
        <UInput />
        <UInput />
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
</style>