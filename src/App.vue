<template>
  <div>
    <!-- <myHeader title="mytitle"/> -->
    <Tree :data="data" @on-click="getData"/>
    {{name}}-{{age}}-{{like}}
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup lang="ts">
  import Tree from './components/Tree.vue'
  import { toRef, reactive } from 'vue'
  const p1 = {name: 'pphs', age: 18, like: 'code'}
  const toRefs = <T extends object>(object: T) => {
    const map:any = {}
    for(let key in object) {
      map[key] = toRef(object, key)
    }
    return map
  }
  const {name, age, like} = toRefs(p1)
  const handleClick = () => {
    console.log(name, age, like);
    
  }

  type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
  }
  const data = reactive<TreeList[]>(
    [
      {name: 'no.1', children: [
        {name: 'no.1-1', children: [
          {name: 'no.1-1-1'}
        ]}
      ]},
      {
        name: 'no.2', children: [
        {name: 'no.2-1', children: [
          {name: 'no.2-1-1'}
        ]}
      ]
      }
    ]
  )
  const getData = (item:TreeList) => {
    console.log(item);
    
  }
</script>

<style scoped>

</style>
