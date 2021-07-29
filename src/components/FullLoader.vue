<template>
  <div :class="status ? 'active full-loader' : 'full-loader'">
    <img src="@/assets/logo-loterias.svg" alt="Logo Loteriais" />
  </div>
</template>

<script>
export default {
  name: 'FullLoader',
  props: {
    status: Boolean
  }
}
</script>
