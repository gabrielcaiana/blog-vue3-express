<script lang="ts" setup>
import hightlightjs from 'highlight.js'
import { TimelinePost } from '../interfaces/posts';
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'
import { useDebounceFn } from '@vueuse/core'

const props = defineProps<{
  post: TimelinePost
}>()

const html = ref('')

const title = ref(props.post.title)
const content = ref(props.post.markdown)
const contentEditable = ref<HTMLDivElement>()


const parseHTML = (markdown: string) => {
  marked.parse(markdown, {
      gfm: true,
      breaks: true,
      highlight: (code) => hightlightjs.highlightAuto(code).value
  }, (_err, parseResult) => html.value = parseResult)
}

const debouncedFn = useDebounceFn((markdown: string) => parseHTML(markdown), 250)
watch(content, (newContent) => debouncedFn(newContent), { immediate: true})


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