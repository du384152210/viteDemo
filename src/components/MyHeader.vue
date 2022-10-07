<template>
    <div class="title">
        {{title}}
    </div>
</template>

<script setup lang="ts">
    
type Props = {
    title?: string
}
withDefaults(defineProps<Props>(), {
    title: '默认'
})
</script>

<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
}
</style>
  