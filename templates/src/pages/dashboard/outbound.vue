<template>
  <q-card class="shadow-11" :style="{ height: height }">
    <q-card-section>
      <div class="text-h6 text-grey-8 text-weight-bolder">
        {{ selected_product + $t('index.chart') }}
        <q-select outlined v-model="selected_product" class="bg-white float-right q-mb-sm " style="width:300px;" :options="product_options" label="Select Product" />
      </div>
    </q-card-section>
    <q-card-section :style="{ height: height2, marginTop:'10px' }"><IEcharts :option="barChartOption" :resizable="true" /></q-card-section>
  </q-card>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.js';
import { getauth } from 'boot/axios_request';

export default {
  name: 'charts',
  data() {
    return {
      pathname: 'dashboard/',
      height: '',
      height2: '',
      width: '100%',
      barChartOption: {
        grid: {
          bottom: '25%'
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: [],
          source: []
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            rotate: 45
          },
          nameLocation: 'middle',
          nameGap: 78
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: [30, 20]
            }
          }
        },
        series: []
      },
      selected_product: this.$t('dashboards.total_sales'),
      product_options: [this.$t('dashboards.total_sales')]
    };
  },
  methods: {
    getList() {
      var _this = this;
      if (_this.$q.localStorage.has('auth')) {
        getauth(_this.pathname + 'sales/', {})
          .then(res => {
            _this.barChartOption.dataset = res.dataset;
            _this.barChartOption.series = res.series;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
      }
    }
  },
  mounted() {
    var _this = this;
    if (_this.$q.platform.is.electron) {
      _this.height = String(_this.$q.screen.height - 190) + 'px';
    } else {
      _this.height = _this.$q.screen.height - 190 + '' + 'px';
    }
    if (_this.$q.platform.is.electron) {
      _this.height2 = String(_this.$q.screen.height - 270) + 'px';
    } else {
      _this.height2 = _this.$q.screen.height - 270 + '' + 'px';
    }
    _this.getList();
  },
  components: {
    IEcharts
  }
};
</script>
