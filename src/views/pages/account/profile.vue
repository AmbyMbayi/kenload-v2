<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

/**
 * Profile component
 */
export default {
  components: { Layout, PageHeader, vueDropzone: vue2Dropzone },
  page: {
    title: "Profile",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      title: "Profile",
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value",
        },
      },
      items: [
        {
          text: "Profile",
        },
        {
          text: "Profile",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row mb-4">
      <div class="col-xl-4">
        <div class="card h-100">
          <div class="card-body">
            <div class="text-center">
              <b-dropdown
                class="float-end"
                variant="white"
                right
                menu-class="dropdown-menu-end"
                toggle-class="font-size-16 text-body p-0"
              >
                <template v-slot:button-content>
                  <i class="uil uil-ellipsis-v"></i>
                </template>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Deactivate</a>
              </b-dropdown>
              <div class="clearfix"></div>
              <div>
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  alt
                  class="avatar-lg rounded-circle img-thumbnail"
                />
              </div>
              <h5 class="mt-3 mb-1">Amby</h5>
              <p class="text-muted">Admin</p>
            </div>

            <div class="text-muted">
              <div class="table-responsive mt-2 mb-0">
                <div>
                  <p class="mb-1">Name :</p>
                  <h5 class="font-size-16">Ambrose Mbayi</h5>
                </div>
                <div class="mt-4">
                  <p class="mb-1">Mobile :</p>
                  <h5 class="font-size-16">+254716402525</h5>
                </div>
                <div class="mt-4">
                  <p class="mb-1">E-mail :</p>
                  <h5 class="font-size-16">ambymbayi@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card mb-0">
          <b-tabs content-class="p-4" justified class="nav-tabs-custom">
            <b-tab active>
              <template v-slot:title>
                <i class="uil uil-user-circle font-size-20"></i>
                <span class="d-none d-sm-block">About</span>
              </template>
              <div>
                <div>
                  <h5 class="font-size-16 mb-4">Edit Details</h5>
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="mt-4">
                        <form>
                          <b-form-group
                            label="Name"
                            label-for="formrow-firstname-input"
                            class="mb-3"
                          >
                            <b-form-input
                              type="text"
                              id="formrow-firstname-input"
                            ></b-form-input>
                          </b-form-group>

                          <div class="row">
                            <div class="col-md-6">
                              <b-form-group
                                label="Email"
                                label-for="formrow-email-input"
                                class="mb-3"
                              >
                                <b-form-input
                                  id="formrow-email-input"
                                  type="email"
                                ></b-form-input>
                              </b-form-group>
                            </div>
                            <div class="col-md-6">
                              <b-form-group
                                label="Password"
                                label-for="formrow-password-input"
                                class="mb-3"
                              >
                                <b-form-input
                                  id="formrow-password-input"
                                  type="password"
                                ></b-form-input>
                              </b-form-group>
                            </div>
                          </div>

                          <div class="mt-4 mb-4">
                            <b-button type="submit" variant="primary"
                              >Submit</b-button
                            >
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="border-top">
                        <vue-dropzone
                          id="dropzone"
                          ref="myVueDropzone"
                          :use-custom-slot="true"
                          :options="dropzoneOptions"
                        >
                          <div class="dropzone-custom-content">
                            <i
                              class="display-4 text-muted bx bxs-cloud-upload"
                            ></i>
                            <h4>Drop files here or click to upload.</h4>
                          </div>
                        </vue-dropzone>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="uil uil-clipboard-notes font-size-20"></i>
                <span class="d-none d-sm-block">Tasks</span>
              </template>
              <div>
                <h5 class="font-size-16 mb-3">Active Shifts</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="tasks-activeCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-activeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold text-dark">Shift One</a>
                        </td>

                        <td>27 May, 2021</td>
                        <td style="width: 160px">
                          <span class="badge bg-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="tasks-activeCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-activeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold text-dark">Shift Two</a>
                        </td>

                        <td>26 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-primary font-size-12"
                            >Active</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 class="font-size-16 my-3">Completed Shifts</h5>

                <div class="table-responsive">
                  <table class="table table-nowrap table-centered">
                    <tbody>
                      <tr>
                        <td style="width: 60px">
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="tasks-completeCheck3"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck3"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold text-dark">Shift One</a>
                        </td>

                        <td>27 May, 2020</td>
                        <td style="width: 160px">
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="tasks-completeCheck2"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck2"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold text-dark">Shift Two</a>
                        </td>

                        <td>27 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox text-center"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="tasks-completeCheck1"
                            />
                            <label
                              class="custom-control-label"
                              for="tasks-completeCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="fw-bold text-dark">shift Three</a>
                        </td>

                        <td>26 May, 2020</td>
                        <td>
                          <span class="badge bg-soft-success font-size-12"
                            >Complete</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-tab>
          </b-tabs>
          <!-- Nav tabs -->
          <!-- Tab content -->
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
