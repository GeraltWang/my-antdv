<template>
    <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="/home">
          <router-link to="/home">
            <pie-chart-outlined />
            <span>主页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/upload">
          <router-link to="/upload">
            <desktop-outlined />
            <span>上传</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>import { watch } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'

const route = useRoute()
const collapsed = ref(false)
const selectedKeys = ref([''])

watch(() => route.path, (val, oldVal) => {
  console.log(val, oldVal)
  selectedKeys.value[0] = val
},
{ immediate: true })
</script>
<style lang="less" scoped>

</style>
