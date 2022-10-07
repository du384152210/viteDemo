<template>
  <div class="tree">
    <div class="flex f-j-s treeItem" @click.stop="handleClick" :class="{'active': open}">
      <span>{{data.name}}</span>
      <span class="arrow" :class="{'active': open, 'normal': !open}" v-if="isFolding"></span>
    </div>
    <div v-if="isFolding" v-show="open" style="margin-left:16px;" >
      <TreeItem v-for="(item,index) in data.children" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TreeItem from './Tree.vue'


type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
type Props = {
  data: TreeList
}
const props = defineProps<Props>()

let isFolding = computed(() => {
  return props.data.children && props.data.children.length ? true : false
})

let open = ref<boolean>(false)

const emit = defineEmits(['on-click'])
const handleClick = () => {
  if(isFolding) {
    open.value = !open.value
  }
}
</script>

<style scoped>
.tree {
  user-select: none
 /* width: 200px; */
}
.treeItem {
  padding: 15px 10px 15px 5px;
  cursor: pointer;
}
.treeItem:hover {
  background: #f5f5f5;
}
.arrow {
  margin-top: 5px;
  border-bottom: 2px solid #dddddd;
  border-right: 2px solid #dddddd;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
}
.arrow.active {
  transform: rotate(-135deg);
  transition: transform 0.2s linear;
}
.arrow.normal {
  transform: rotate(45deg);
  transition: transform 0.2s linear;
}

</style>