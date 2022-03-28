import axios from "axios";

const state = {
    employees: []
};

const getters = {
    allEmployees: (state) => state.employees,
};

const mutations = {
    getEmployees: (state, employees) => state.employees = employees
};

const actions = {
    async fetchEmployees({ commit }) {
        try {

            let response = await axios.get('employee')
            response = response.data

            commit('getEmployees', response)
        } catch (err) {
            console.log(err.message);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};