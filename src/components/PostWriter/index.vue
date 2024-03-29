<script lang="ts" setup>
import hightlightjs from 'highlight.js';
import { TimelinePost, Post } from '~/interfaces/posts';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { marked } from 'marked';
import { useDebounceFn } from '@vueuse/core';
import { usePosts } from '~/stores/posts';
import { useUsers } from '~/stores/users';

const props = defineProps<{
  post: TimelinePost | Post;
}>();

const emit = defineEmits<{
  (event: 'submit', post: Post): void;
}>();

const html = ref('');
const title = ref(props.post.title);
const content = ref(props.post.markdown);
const contentEditable = ref<HTMLDivElement>();

const posts = usePosts();
const router = useRouter();
const usersStore = useUsers();

const parseHTML = (markdown: string) => {
  marked.parse(
    markdown,
    {
      gfm: true,
      breaks: true,
      highlight: (code) => hightlightjs.highlightAuto(code).value,
    },
    (_err, parseResult) => (html.value = parseResult)
  );
};

const debouncedFn = useDebounceFn(
  (markdown: string) => parseHTML(markdown),
  250
);
watch(content, (newContent) => debouncedFn(newContent), { immediate: true });

onMounted(() => {
  if (!contentEditable.value)
    throw Error('ContentEditable DOM node was not found');
  contentEditable.value.innerText = content.value;
});

const handleInput = () => {
  if (!contentEditable.value)
    throw Error('ContentEditable DOM node was not found');
  content.value = contentEditable.value.innerText;
};

const handleClick = async () => {
  if (!usersStore.currentUserId) {
    throw Error('User was not found!');
  }

  const newPost: Post = {
    ...props.post,
    created:
      typeof props.post.created === 'string'
        ? props.post.created
        : props.post.created.toISO(),
    title: title.value,
    authorId: usersStore.currentUserId,
    markdown: content.value,
    html: html.value,
  };

  emit('submit', newPost);
};
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

  <div class="columns">
    <div class="column">
      <button @click="handleClick" class="button is-primary is-pulled-right">
        Save Post
      </button>
    </div>
  </div>
</template>
