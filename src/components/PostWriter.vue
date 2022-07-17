<script lang="ts" setup>
import { TimelinePost } from '../interfaces/posts';
import { ref, onMounted, watchEffect } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  post: TimelinePost
}>()

const html = ref('')

const title = ref(props.post.title)
const content = ref(props.post.markdown)
const contentEditable = ref<HTMLDivElement>()

watchEffect(() => marked.parse(content.value, (_err, parseResult) => html.value = parseResult))

// similar solution with watch
// watch(content, (newContent) => {
//   marked.parse(newContent, (_err, parseResult) => html.value = parseResult)
// }, { immediate: true})

onMounted(() => {
  if(!contentEditable.value) throw Error('ContentEditable DOM node was not found')
  contentEditable.value.innerText = content.value
})

const handleInput = () => {
  if(!contentEditable.value) throw Error('ContentEditable DOM node was not found')
  content.value = contentEditable.value.innerText
}
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post title</div>
          <input type="text" class="input" v-model="title" />
        </div>
      </div>
  </div>

  <div class="columns">
    <div class="column">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="column">
      <div v-html="html" />
    </div>
  </div>
</template>