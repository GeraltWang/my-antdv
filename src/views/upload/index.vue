<template>
  <div>
    <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    action=""
    @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </a-upload-dragger>
  </div>
</template>
<script setup>
import { ref } from '@vue/reactivity'
import { message } from 'ant-design-vue'

const fileList = ref([])

const handleChange = info => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
