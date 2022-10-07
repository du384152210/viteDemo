<template>
  <div style="margin-left: 16px;">
    <div v-for="(item,index) in data" :key="index" @click.stop="handleClick(item)">
      {{item.name}}
      <TreeItem @on-click="handleClick" v-if="item.children?.length" :data="item.children" :key="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TreeItem from './Tree.vue'

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
type Props = {
    data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])
const handleClick = (item:TreeList) => {
  emit('on-click', item)
}
</script>

<style scoped>

</style>