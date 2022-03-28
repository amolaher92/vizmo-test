<template>
    <div class="container">
        <h1>Employee Table</h1>
       <employee-list></employee-list>
    </div>
</template>
<script>
import EmployeeList from '../components/EmployeeList.vue'
export default {
    name: 'SimpleTodos',
    components: {
        EmployeeList
    }
}
</script>