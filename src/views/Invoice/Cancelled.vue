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
                      <base-input
                        alternative
                        label="Currency"
                        readonly
                        input-classes="form-control-alternative"
                        value="IQD"
                      />
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
                      <base-button type="danger" icon="ni ni-fat-delete" @click="removeLine(i)"></base-button>
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
                            v-model="model.notes"
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
                            v-model="model.terms"
                          ></textarea>
                        </base-input>
                      </div>
                    </div>
                  </div>
                </div>
                 <!-- Reason -->
                <h6 class="heading-small text-muted mb-4">Comments</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col">
                      <div class="form-group">
                        <base-input alternative label="Reason">
                          <textarea
                            rows="4"
                            class="form-control form-control-alternative"
                            placeholder="Reason Quote was declined"
                            :value="'Pen is too expensive, we would like a cheaper model'"
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
                  >Save &amp; Resend</a>
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
        logoURL:
          "data:image/png;base64,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",
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
        notes: "Shipping cost will be covered",
        terms: "",
        // header
        discount: "2%",

        // lines
        lines: [
          { description: "Pen", quantity: 2, price: 5 },
          { description: "Book", quantity: 3, price: 4 },
          { description: "Notebook", quantity: 5, price: 1 }
        ]
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
        return this.subtotal * (1 - this.model.discount.substring(0, i) / 100);
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