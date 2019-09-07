<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">


    </base-header>

    <!--Charts-->

    <div class="container-fluid mt--7">
      <!-- <div class="row">
        <div class="col-xl-6">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Invoices Issued</h6>
                <h5 class="h3 mb-0">Total Invoices</h5>
              </div>
            </div>

            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData"></bar-chart>
          </card>
        </div>

        <div class="col-xl-6">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Bills Payed</h6>
                <h5 class="h3 mb-0">Total Bills</h5>
              </div>
            </div>

            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData"></bar-chart>
          </card>
        </div>
      </div> -->
      <!-- End charts-->

      <!--Tables-->
      <!-- <div class="row mt-5">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div> -->

    <div class="row">
        <div class="col">
          <projects-table
            class="mt-4"
            title="Upcoming Bills"
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

      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";

// Tables
import ProjectsTable from "./Tables/ProjectsTable.vue";

export default {
  components: {
    ProjectsTable,
    LineChart,
    BarChart,
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
      ],
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: chartConfigs.blueChartOptions
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29]
            }
          ]
        }
      }
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  }
};
</script>
<style></style>
