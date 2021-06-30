<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Stat from "@/components/widgets/stat";
//import SalesAnalytics from "./sales-analytics";
import AxelAnalytics from "./axel-analytics";
//import SellingProduct from './selling-product';
import AxelLoad from "./axel-load";
//import TopUsers from './top-users';
//import Activity from './activity';
//import SocialSource from './social-source';

export default {
  page: {
    title: "Dashboard",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
    Stat,
    AxelAnalytics,
    //SellingProduct,
    AxelLoad,
    //TopUsers,
    //Activity,
    //SocialSource
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Kenload",
        },
        {
          text: "Dashboard",
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
    <Stat />
    <div class="row">
      <!--<SalesAnalytics />-->
      <AxelAnalytics />
      <div class="col-xl-4">
        <div class="card bg-primary">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-12">
                <p class="text-light font-size-18">
                  Enhance our
                  <b>Axel </b>Load Control for effective operation on
                  weighbridge
                  <i class="mdi mdi-arrow-right"></i>
                </p>
                <div class="mt-4">
                  <a
                    style="
                      background-color: yellow;
                      color: black;
                      border: none;
                      shadow: none;
                    "
                    href="javascript: void(0);"
                    class="btn btn-success waves-effect waves-light"
                    >Axel loads</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
        <!--<SellingProduct />-->
        <AxelLoad />
      </div>
    </div>
    <!--<div class="row">
        <TopUsers />
        <Activity />
        <SocialSource />
    </div>-->
  </Layout>
</template>