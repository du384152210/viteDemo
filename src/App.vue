<template>
  <header>
      <h2>header</h2>
  </header>
  <div class="box flex">
    
    <div class="left-nav">
      <Tree v-for="(item,index) in data"  :key="index" :data="item" />
    </div>
    <!-- <myHeader title="mytitle"/> -->
    
    <!-- {{name}}-{{age}}-{{like}}
    <button @click="handleClick">click</button> -->
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
.box {
  height: 100%;
}
header {
  padding: 15px;
  border-bottom: 1px solid #dddddd;
}
.left-nav {
  height: 100%;
  width: 250px;
  border-right: 1px solid #dddddd;
}
</style>
