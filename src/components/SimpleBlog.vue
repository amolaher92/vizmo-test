<template>
    <div class="grid">
        <div class="col-4" v-for="blog in allBlogs" :key="blog.id">
            <Card v-if="blog.id <= 10">
                <template #title>
                    {{blog.title}}
                </template>
                <template #content>
                    {{blog.body}}
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
//import { mapGetters, mapActions } from 'vuex'
import Card from 'primevue/card';
export default {
    name: 'SimpleTodo',
    components: {
        Card
    },
    /* computed: mapGetters(['allBlogs']),
     methods: {
         ...mapActions(['fetchBlogs'])
     },
     created() {
         this.fetchBlogs()
     }*/
    computed: {
        allBlogs() {
            return this.$store.getters.allBlogs
        }
    },
    created() {
        this.$store.dispatch('fetchBlogs')
    },
}
/**
 * 1) Way First (Indirect)
 * import {mapGetters,mapActions} from 'vuex'
 * computed : mapGetters(['allblogs']),
 * methods:{
 * 	...mapActions(['fetchBlogs'])
 * },
 * created(){
 * 	this.fetchBlogs
 * }
 * --------------------------------------------
 * 2) Way Second(direct)
 * computed:{
 * 	allBolgs(){
 * 		return this.$store.getters.allBlogs
 * 	}
 * },
 * created(){
 * 	this.$store.dispatch('fetchBlogs')
 * }
 * */
</script>