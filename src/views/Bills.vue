<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Due"
            type="gradient-info"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Overdue"
            type="gradient-red"
            sub-title="924"
            icon="ni ni-bell-55"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-down"></i> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Cancelled"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-fat-remove"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-up"></i> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Paid"
            type="gradient-green"
            sub-title="49,65%"
            icon="ni ni-satisfied"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 54.8%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <!-- first table -->
      <div class="row">
        <div class="col">
          <projects-table
            title="Overdue"
            :columns="['Company', 'Amount', 'Date Issued', 'Due Date', 'Days Overdue', 'Amount Payed']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.title}}</span>
                  </div>
                </div>
              </td>
              <td class="budget">{{row.budget}}</td>
              <td>{{row.dateIssued}}</td>
              <td>{{row.dateDue}}</td>
              <td>{{row.daysLeft}}</td>

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

      <!-- Second Table -->
      <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Upcoming"
            :columns="['Company', 'Amount', 'Date Issued', 'Due Date', 'Days Left', 'Amount Payed']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.title}}</span>
                  </div>
                </div>
              </td>
              <td class="budget">{{row.budget}}</td>
              <td>{{row.dateIssued}}</td>
              <td>{{row.dateDue}}</td>
              <td>{{row.daysLeft}}</td>

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

          <!-- third and fourth -->
      <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Quoted"
            :columns="['Company', 'Amount', 'Date Quoted']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.title}}</span>
                  </div>
                </div>
              </td>
              <td class="budget">{{row.budget}}</td>
              <td>{{row.dateIssued}}</td>
            </template>
          </projects-table>
        </div>

        <div class="col">
          <projects-table
            class="mt-4"
            title="Cancelled"
            :columns="['Company', 'Amount', 'Date Quoted']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.title}}</span>
                  </div>
                </div>
              </td>
              <td class="budget">{{row.budget}}</td>
              <td>{{row.dateIssued}}</td>
            </template>
          </projects-table>
        </div> 
      </div>

        <!-- Final Table -->

        <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Paid"
            :columns="['Company', 'Amount', 'Date Issued', 'Due Date']"
            :rows="tableData"
          >
            <template scope="{row}">
              <td>
                <div class="media align-items-center">
                  <a href="#" class="avatar rounded-circle mr-3">
                    <img alt="Image placeholder" :src="row.img" />
                  </a>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">{{row.title}}</span>
                  </div>
                </div>
              </td>
              <td class="budget">{{row.budget}}</td>
              <td>{{row.dateIssued}}</td>
              <td>{{row.dateDue}}</td>
              
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
  data() {
    return {
      tableData: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          budget: "$2500 USD",
          status: "pending",
          statusType: "warning",
          completion: 60
        },
        {
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          budget: "$1800 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        },
        {
          img: "img/theme/sketch.jpg",
          title: "Black Dashboard",
          budget: "$3150 USD",
          status: "delayed",
          statusType: "danger",
          completion: 72
        },
        {
          img: "img/theme/react.jpg",
          title: "React Material Dashboard",
          budget: "$4400 USD",
          status: "on schedule",
          statusType: "info",
          completion: 90
        },
        {
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          budget: "$2200 USD",
          status: "completed",
          statusType: "success",
          completion: 100
        }
      ]
    };
  }
};
</script>
<style></style>
