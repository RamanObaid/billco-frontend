<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
      <span class="mask bg-gradient-success opacity-8"></span>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-1"></div>
        <div class="col mb-5">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img :src="to.logoURL" class="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between"></div>
            </div>
            <div class="card-body mt-5 pt-0 pt-md-4">
              <div class="text-center mt-4">
                <h3>{{to.name}}</h3>
                <div class="h5 font-weight-300">
                  <i class="ni ni-square-pin mr-2"></i>
                  {{to.address}}
                  <i class="ni ni-email-83 mr-2 ml-2"></i>
                  {{to.email}}
                  <i class="ni ni-mobile-button mr-1 ml-2"></i>
                  {{to.phone}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>

      <div class="row">
        <div class="col-1"></div>
        <div class="col">
          <card shadow type="secondary">
            <template>
              <form @submit.prevent>
                <h6 class="heading-small text-muted mb-4">Header</h6>
                <div class="pl-lg-4">
                  <div class="row mt-4">
                    <base-input label="Date" class="col">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="model.dateQuoted"
                      ></flat-picker>
                    </base-input>

                    <base-input label="Due Date" class="col">
                      <flat-picker
                        slot-scope="{focus, blur}"
                        @on-open="focus"
                        @on-close="blur"
                        :config="{allowInput: true}"
                        class="form-control datepicker"
                        v-model="model.dateDue"
                      ></flat-picker>
                    </base-input>

                    <div class="col">
                      <base-input
                        alternative
                        label="Payment Terms"
                        placeholder="Payment Terms"
                        input-classes="form-control-alternative"
                        v-model="model.paymentTerms"
                      />
                    </div>

                    <div class="col">
                      <base-input alternative label="Currency" placeholder="Payment Terms">
                        <base-dropdown style="display: block;">
                          <base-button slot="title" type="info" class="dropdown-toggle">IQD</base-button>
                          <a class="dropdown-item" href="#">USD</a>
                        </base-dropdown>
                      </base-input>
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Subtotal"
                        readonly
                        input-classes="form-control-alternative"
                        :value="subtotal.toFixed(2) + ' IQD'"                        
                      />
                    </div>

                    <div class="col">
                      <base-input
                        alternative
                        label="Discount"
                        placeholder="5% or 10"
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
                        :value="total.toFixed(2) + ' IQD'"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Lines</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-5">
                      <base-input
                        alternative
                        label="Description"
                        placeholder="Pen"
                        input-classes="form-control-alternative"
                        v-model="line.description"
                      />
                    </div>
                    <div class="col-2">
                      <base-input
                        alternative
                        label="Quantity"
                        placeholder="2.0"
                        input-classes="form-control-alternative"
                        v-model="line.quantity"
                      />
                    </div>
                    <div class="col-2">
                      <base-input
                        alternative
                        label="Unit Price"
                        placeholder="0.5"
                        input-classes="form-control-alternative"
                        v-model="line.price"
                      />
                    </div>
                    <div class="col-2">
                      <base-input
                        alternative
                        label="Total"
                        readonly
                        placeholder="1.0"
                        input-classes="form-control-alternative"
                        :value="(line.quantity * line.price) + ' IQD'"
                      />
                    </div>
                    <div class="col d-flex flex-column justify-content-center align-items-start">
                      <base-button
                        type="primary"
                        style="margin-bottom: -0.5rem;"
                        icon="ni ni-fat-add"
                        @click="addLine"
                      ></base-button>
                    </div>
                  </div>

                  <div class="row" v-for="(line, i) in model.lines" :key="i">
                    <div class="col-lg-5">
                      <base-input
                        alternative
                        placeholder="Pen"
                        input-classes="form-control-alternative"
                        v-model="model.lines[i].description"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        placeholder="2.0"
                        input-classes="form-control-alternative"
                        v-model="model.lines[i].quantity"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        placeholder="0.5"
                        input-classes="form-control-alternative"
                        v-model="model.lines[i].price"
                      />
                    </div>
                    <div class="col-lg-2">
                      <base-input
                        alternative
                        readonly
                        placeholder="1.0"
                        input-classes="form-control-alternative"
                        :value="(model.lines[i].quantity * model.lines[i].price) + ' IQD'"
                      />
                    </div>
                    <div class="col d-flex flex-column justify-content-start align-items-start">
                      <base-button
                        type="danger"
                        style="margin-bottom: -0.5rem;"
                        icon="ni ni-fat-delete"
                        @click="removeLine(i)"
                      ></base-button>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <h6 class="heading-small text-muted mb-4">Notes</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col">
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
                    <div class="col">
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
                  </div>
                </div>
              </form>
            </template>

            <template slot="footer" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-12 text-center">
                  <a
                    href="#!"
                    class="btn btn-lg btn-primary px-6"
                    @click="$router.push('/invoices')"
                  >Send</a>
                </div>
              </div>
            </template>
          </card>
        </div>
        <div class="col-1"></div>
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
      // other
      to: {
        logoURL: "img/brand/ABC.png",
                name: "ABC",
        address: "Iraq, Slemani",
        phone: "770 123 45 56",
        email: "info@abc.com"
      },
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
  created() {
    var today = new Date(this.model.dateQuoted);
    today.setDate(today.getDate() + 15);
    this.model.dateDue = today.toISOString();
  },
  methods: {
    addLine() {
      this.model.lines.push(this.line);
      this.line = {
        description: null,
        quantity: null,
        price: null
      };
    },
    removeLine(i) {
      this.model.lines.splice(i, 1);
    }
  },
  computed: {
    discountAmount() {
      var i = this.model.discount.indexOf("%");
      if (i > 0) {
        var percent = this.model.discount.substring(0, i) / 100;
        return this.subtotal * percent;
      } else {
        return this.model.discount;
      }
    },
    subtotal() {
      return this.model.lines.reduce(
        (acc, val) => acc + val.quantity * val.price,
        0
      );
    },
    total() {
      return this.subtotal - this.discountAmount;
    }
  }
};
</script>
<style></style>