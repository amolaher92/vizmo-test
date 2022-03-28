<template>
    <div class="container mx-auto">
        <div class="w-full">
            <DataTable :value="allEmployees" :paginator="true" :rows="10" responsiveLayout="scroll" class="p-datatable-sm" :globalFilterFields="['name','country.name','representative.name','status']">
                <Column field="id" header="id" sortable></Column>
                <Column field="name" header="Image">
                    <template #body="{data}">
                        <img :src="data.avatar" width="30" />
                        <span class="image-text">{{data.country.name}}</span>
                    </template>
                </Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="email" header="Email"></Column>
                <Column field="phone" header="Phone">
                     <template #body="{data}">
                        {{(data.phone)}}
                    </template>
                </Column>
                <Column field="department" header="Department"></Column>
                <Column field="birthday" header="DOB">
                    <template #body="{data}">
                        {{getDateForm(data.birthday)}}
                    </template>
                </Column>
                <Column field="country" header="Country"></Column>
                <Column field="createdAt" header="createdAt">
                      <template #body="{data}">
                        {{getDateForm(data.createdAt)}}
                    </template>
                </Column>
            </DataTable>
        </div>
        <!-- <h1>Home</h1>
        <div v-for="employee in allEmployees" :key="employee.id">
            <p>{{ employee.createdAt }}</p>
            <p>{{ employee.name }}</p>
            <p>{{ employee.email }}</p>
            <img :src="employee.avatar" alt="" />
            <p>{{ employee.phone }}</p>
            <p>{{ employee.department }}</p>
            <p>{{ employee.birthday }}</p>
            <p>{{ employee.country }}</p>
        </div> -->
    </div>
</template>
<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        DataTable,
        Column
    },
    computed: mapGetters(["allEmployees"]),
    methods: {
        ...mapActions(["fetchEmployees"]),
        getDateForm(getDate) {
            const app = new Date(getDate,);
            return app.toLocaleString()
            //console.log(`${app.toLocaleTimeString()}`);
        }
    },
    created() {
        this.fetchEmployees();
        // this.getDateForm()
    },
};
</script>