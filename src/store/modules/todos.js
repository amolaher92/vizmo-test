import axios from 'axios'

/**
 * define properties
 * It is data object like in vue component
 * */
const state = {
    blogs: []
}

/**
 * define getters
 * It is computed properties
 * */

const getters = {
    allBlogs: state => state.blogs
}

//define mutations
const mutations = {
    /**
     * define mutations to dynamic changes
     * */
    getBlogs: (state, blogs) => state.blogs = blogs
}

//define methods
const actions = {
    /**
     * define method to get blog data
     * */
    async fetchBlogs({ commit }) {
        let response = await axios.get('posts')
        response = response.data

        commit('getBlogs', response)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}