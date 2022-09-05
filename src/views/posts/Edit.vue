<script lang="ts" setup>
import PostWriter from '~/components/PostWriter.vue';
import { useRoute, useRouter } from 'vue-router';
import { usePosts } from '~/stores/posts';
import { Post } from '~/interfaces/posts';

const route = useRoute();
const postsStores = usePosts();
const posts = usePosts();
const router = useRouter();

const id = route.params.id as string;
const post = postsStores.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}

const handleSubmit = async (post: Post) => {
  await posts.updatePost(post);
  router.push('/');
};
</script>

<template>
  Edit Post
  <PostWriter :post="post" @submit="handleSubmit" />
</template>
