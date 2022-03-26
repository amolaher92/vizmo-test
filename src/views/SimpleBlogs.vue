<template>
    <div class="container">
        <h1>Simple blogs</h1>
        <simple-blog></simple-blog>
    </div>
</template>
<script>
import SimpleBlog from '../components/SimpleBlog.vue'
export default {
    name: 'SimpleTodos',
    components: {
        SimpleBlog
    }
}
</script>