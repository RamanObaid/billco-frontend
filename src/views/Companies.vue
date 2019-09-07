<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table
            title="Companies"
            :columns="['Name', 'Sector','Phone', 'Address', 'Email', 'Pays on Time']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.name}}</span>
                  </div>
                </div>
              </td>
              <td>{{row.sector}}</td>
              <td>{{row.phone}}</td>
              <td>{{row.address}}</td>
              <td>{{row.email}}</td>

              <td class="text-right">
                <div class="d-flex align-items-center">
                  <span class="completion mr-2">{{row.completion}}%</span>
                  <div>
                    <base-progress
                      :type="row.statusType"
                      :show-percentage="false"
                      class="pt-0"
                      :value="row.completion"
                    />
                  </div>
                </div>
              </td>
            </template>
          </projects-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsTable from "./Tables/ProjectsTable";
export default {
  name: "invoices",
  components: {
    ProjectsTable
  },
  data(){
    return {
      tableData: [{
          img: "img/theme/bootstrap.jpg",
          name: "ABC",
          sector: 'IT Services',
          phone: "770 123 45 67",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/angular.jpg",
          name: "Example",
          sector: 'Law Firm',
          phone: "750 456 78 90",
          status: "completed",
          statusType: "success",
          completion: 100
        }]
    }
  }
};
</script>
<style></style>
