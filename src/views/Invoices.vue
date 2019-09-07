<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Due"
            type="gradient-info"
            sub-title="8"
            icon="ni ni-time-alarm"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <!-- <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>-->
              <span class="text-nowrap">$ 6,500</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Overdue"
            type="gradient-red"
            sub-title="2"
            icon="ni ni-bell-55"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-up"></i>$ 1,500
              </span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Cancelled"
            type="gradient-orange"
            sub-title="3"
            icon="ni ni-fat-remove"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-warning mr-2">
                <i class="fa fa-arrow-up"></i>$ 3,500
              </span>
              <!-- <span class="text-nowrap">Since last month</span> -->
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Paid"
            type="gradient-green"
            sub-title="4"
            icon="ni ni-check-bold"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i>$ 500
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Quoted"
            :columns="['Company', 'Amount', 'Date Quoted']"
            :rows="quoted"
            @click="$router.push('/invoice-details/quoted')"
          >
            <template slot="button">
              <base-button type="primary" size="sm" @click="modals.companies = true">Create Invoice</base-button>
            </template>

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
              <td class="budget">{{row.amount}}</td>
              <td>{{row.date}}</td>
            </template>
          </projects-table>
        </div>

        <div class="col">
          <projects-table
            class="mt-4"
            title="Cancelled"
            :columns="['Company', 'Amount', 'Date Quoted']"
            :rows="cancelled"
            @click="$router.push('/invoice-details/cancelled')"
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
              <td class="budget">{{row.amount}}</td>
              <td>{{row.date}}</td>
            </template>
          </projects-table>
        </div>
      </div>

      <!-- first table -->
      <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Overdue"
            :columns="['Company', 'Amount', 'Date Issued', 'Due Date', 'Days Overdue', 'Amount Payed']"
            :rows="overdue"
            @click="$router.push('/invoice-details/overdue')"
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
              <td>{{row.issue}}</td>
              <td>{{row.due}}</td>
              <td>{{row.days}}</td>

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
            :rows="upcoming"
            @click="$router.push('/invoice-details/upcoming')"
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

      <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Paid"
            :columns="['Company', 'Amount', 'Date Issued', 'Due Date']"
            :rows="paid"
            @click="$router.push('/invoice-details/details')"
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
    <!-- Modal -->
    <modal :show.sync="modals.companies">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">Choose Company</h5>
      </template>
      <div>
        <div class="row icon-examples">
          <div class="col-6" v-for="(icon, index) in icons" :key="icon.name + index">
            <div
              class="btn-icon-clipboard d-flex flex-row align-items-center justify-content-start"
              @click="modals.companies = false; $router.push('/create-invoice')"
            >
              <a href="#" class="avatar rounded-circle mr-1">
                <img alt="Image placeholder" :src="icon.logo" />
              </a>
              <span class="text-left">{{icon.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </modal>
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
      icons: [
        { name: "ABC", logo: "img/brand/ABC.png" },
        { name: "Angular Co.", logo: "img/theme/angular.jpg" },
        { name: "Vue Co.", logo: "img/theme/vue.jpg" },
        { name: "React Co.", logo: "img/theme/react.jpg" },
        { name: "Sketch Co.", logo: "img/theme/sketch.jpg" }
      ],
      modals: {
        companies: false
      },
      quoted: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Bona",
          amount: "1,500,000 IQD",
          date: "2019-08-01"
        },
        {
          img: "img/theme/angular.jpg",
          title: "Anga Co.",
          amount: "800,000 IQD",
          date: "2019-07-23"
        },
        {
          img: "img/theme/sketch.jpg",
          title: "Diamond LTD",
          amount: "$ 1,500",
          date: "2019-07-15"
        }
      ],
      cancelled: [
        {
          img: "img/theme/react.jpg",
          title: "Anga Co.",
          amount: "800,000 IQD",
          date: "2019-07-23"
        },
        {
          img: "img/theme/vue.jpg",
          title: "Bona",
          amount: "1,500,000 IQD",
          date: "2019-08-01"
        },
        {
          img: "img/theme/sketch.jpg",
          title: "Diamond LTD",
          amount: "$ 1,500",
          date: "2019-07-15"
        }
      ],
      overdue: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Bowna",
          budget: "$2500 USD",
          issue: "2019-08-01",
          due: "2019-09-01",
          days: 7,
          status: "pending",
          statusType: "warning",
          completion: 50
        },
        {
          img: "img/theme/angular.jpg",
          title: "Ammy & Johnes Co.",
          budget: "$1800 USD",
          issue: "2019-08-15",
          due: "2019-09-05",
          days: 2,
          status: "completed",
          statusType: "success",
          completion: 75
        }
      ],
      upcoming: [
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
        }
      ],
      paid: [
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
        }
      ]
    };
  }
};
</script>
<style></style>
