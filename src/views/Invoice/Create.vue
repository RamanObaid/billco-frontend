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
      </div>-->

      <div class="row">
        <div class="col">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8 d-flex align-items-center">
                  <h3 class="mb-0 mr-3">Send To</h3>
                  <base-dropdown v-model="test">
                    <base-button slot="title" type="secondary" class="dropdown-toggle">ABC</base-button>
                    <a class="dropdown-item" href="#">Example Co.</a>
                    <a class="dropdown-item" href="#">InnerG</a>
                  </base-dropdown>
                </div>
                <p>{{test}}</p>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Send Invoice</a>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">Header</h6>
                <div class="pl-lg-4">
                  <div class="row mt-4">
                    <base-input label="Date" class="col-lg-4">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="model.dateQuoted"
                      ></flat-picker>
                    </base-input>

                    <base-input label="Due Date" class="col-lg-4">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="model.dateDue"
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
                </div>
                <hr class="my-4" />

                <h6 class="heading-small text-muted mb-4">Totals</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col">
                      <base-input
                        alternative
                        label="Subtotal"
                        readonly
                        input-classes="form-control-alternative"
                        :value="subtotal"
                      />
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Discount"
                        placeholder="5%"
                        input-classes="form-control-alternative"
                        v-model="model.discount"
                      />
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Total"
                        readonly
                        input-classes="form-control-alternative"
                        :value="total"
                      />
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Amount Paid"
                        readonly
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Balance Due"
                        readonly
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Lines</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-5">
                      <base-input
                        alternative
                        label="Description"
                        placeholder="Pen"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        label="Quantity"
                        placeholder="2.0"
                        input-classes="form-control-alternative"
                        v-model="line.quantity"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        label="Unit Price"
                        placeholder="0.5"
                        input-classes="form-control-alternative"
                        v-model="line.price"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        label="Total"
                        readonly
                        placeholder="1.0"
                        input-classes="form-control-alternative"
                        :value="line.quantity * line.price"
                      />
                    </div>
                    <div class="col d-flex flex-column justify-content-center">
                      <base-button type="primary" icon="ni ni-fat-add" @click="addLine"></base-button>
                    </div>
                  </div>

                  <div class="row" v-for="(line, i) in model.lines" :key="i">
                    <div class="col-lg-5">
                      <base-input
                        alternative
                        placeholder="Pen"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        placeholder="2.0"
                        input-classes="form-control-alternative"
                        v-model="model.country"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        placeholder="0.5"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        readonly
                        placeholder="1.0"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>
                    <div class="col d-flex flex-column justify-content-start">
                      <base-button type="danger" icon="ni ni-fat-delete" @click="removeLine(i)"></base-button>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Notes</h6>
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
  data() {
    return {
      test: "",
      line: {
        description: null,
        quantity: null,
        price: null
      },
      model: {
        // dates
        dateQuoted: new Date().toISOString(),
        dateDue: new Date().toISOString(),
        // notes
        paymentTerms: "",
        notes: "",
        terms: "",
        // header
        discount: "",
        // lines
        lines: []
      }
    };
  },
  methods: {
    addLine() {
      this.model.lines.push(this.line);
    },
    removeLine(i) {
      this.model.lines.splice(i);
    }
  },
  computed: {
    subtotal() {
      return this.model.lines.reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },
    total() {
      return this.subtotal - this.model.discount;
    }
  }
};
</script>
<style></style>
