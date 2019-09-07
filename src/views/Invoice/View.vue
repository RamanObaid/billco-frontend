<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <span class="mask bg-gradient-success opacity-8"></span>
    </base-header>

    <div class="container-fluid mt--7">
      <!-- <div class="row">
        <div class="col mb-5">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/theme/team-4-800x800.jpg" class="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between"></div>
            </div>
            <div class="card-body mt-5 pt-0 pt-md-4">
              <div class="text-center mt-4">
                <h3>Shaveens Company</h3>
                <div class="h5 font-weight-300">
                  <i class="ni ni-square-pin mr-2"></i>Bucharest, Romania
                  <i class="ni ni-email-83 mr-2 ml-2"></i>shaveensalih22@gmail.com
                  <i class="ni ni-mobile-button mr-1 ml-2"></i> 0770 182 1246
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row">
        <div class="col">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">New Invoice</h3>
                </div>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Send Invoice</a>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">Bill To</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-4">
                      <base-dropdown>
                        <base-button slot="title" type="secondary" class="dropdown-toggle">Regular</base-button>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </base-dropdown>
                    </div>
                  </div>

                  <div class="row mt-4">
                    <base-input label="Date" class="col-lg-4">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="dates.simple"
                      ></flat-picker>
                    </base-input>

                    <base-input label="Due Date" class="col-lg-4">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="dates.simple"
                      ></flat-picker>
                    </base-input>

                    <div class="col-lg-4">
                      <base-input
                        alternative
                        label="Payment Terms"
                        placeholder="Payment Terms"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                  </div>

                  <div class="row mt-4 ml-2">
                      <h4>Balance Due</h4>

                    <!-- Enter Calculation -->

                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Add Products</h6>
                <div class="pl-lg-4">
                  <!-- <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative
                        label="Address"
                        placeholder="Home Address"
                        input-classes="form-control-alternative"
                        v-model="model.address"
                      />
                    </div>
                  </div>-->
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative
                        label="Description"
                        placeholder="Description"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        label="Quantity"
                        placeholder="Qty"
                        input-classes="form-control-alternative"
                        v-model="model.country"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        label="Unit Price"
                        placeholder="Unit Price"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>

                    <!-- <div class="col-lg-2">

                      <base-input
                        alternative
                        label="Postal code"
                        placeholder="Postal code"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>-->
                  </div>

                  <base-button type="primary" icon="ni ni-fat-add"></base-button>
                </div>
                <hr class="my-4" />

                <div class="row ml-4">
                    <h4>Subtotal</h4>
                </div>


                <div class="row ml-4">
                    <base-input
                        alternative
                        label="Discount (%)"
                        placeholder="Discount"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                </div>

                <div class="row ml-4">
                    <h4>Total</h4>
                </div>

                <div class="row ml-4">

                    <base-input
                        alternative
                        label="Amount Paid"
                        placeholder="Amount Paid"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Extra Notes</h6>
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input alternative label="Notes">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Notes - Any additional information"
                      ></textarea>
                    </base-input>
                  </div>
                </div>

                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input alternative label="Terms">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Terms - Terms and conditions"
                      ></textarea>
                    </base-input>
                  </div>
                </div>
              </form>
            </template>

            <template slot="footer" class="bg-white border-0">
                <div class="row align-items-center">
                    <div class="col-12 text-center">
                    <a href="#!" class="btn btn-lg btn-primary">Send Invoice</a>
                    </div>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";

export default {
  components: {
    flatPicker
  },
  name: "user-profile",
  data() {
    return {
      model: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: ""
      },

      dates: {
        simple: "2018-07-17"
      }
    };
  }
};
</script>
<style></style>
