<template>
    <div>
      <transition appear enter-active-class="animated fadeIn">
      <q-table
        class="my-sticky-header-table shadow-24"
        :data="table_list"
        row-key="id"
        :separator="separator"
        :loading="loading"
        :filter="filter"
        :columns="columns"
        hide-bottom
        :pagination.sync="pagination"
        no-data-label="No data"
        no-results-label="No data you want"
        :table-style="{ height: height }"
        flat
        bordered
      >
         <template v-slot:top>
           <q-btn-group push>
             <q-btn :label="$t('refresh')" icon="refresh" @click="reFresh()">
               <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
                 {{ $t('refreshtip') }}
               </q-tooltip>
             </q-btn>
             <q-btn :label="$t('download')" icon="cloud_download" @click="downloadData()">
               <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
                 {{ $t('downloadtip') }}
               </q-tooltip>
             </q-btn>
           </q-btn-group>
           <q-space />
           <q-input outlined rounded dense debounce="300" color="primary" v-model="filter" :placeholder="$t('search')" @blur="getSearchList()" @keyup.enter="getSearchList()">
             <template v-slot:append>
               <q-icon name="search" @click="getSearchList()"/>
             </template>
           </q-input>
         </template>
         <template v-slot:body="props">
           <q-tr :props="props">
             <q-td key="goods_code" :props="props">
               {{ props.row.goods_code }}
             </q-td>
             <q-td key="goods_desc" :props="props">
               {{ props.row.goods_desc }}
             </q-td>
             <q-td key="goods_qty" :props="props">
               {{ props.row.goods_qty }}
             </q-td>
             <q-td key="onhand_stock" :props="props">
               {{ props.row.onhand_stock }}
             </q-td>
             <q-td key="can_order_stock" :props="props">
               {{ props.row.can_order_stock }}
             </q-td>
             <q-td key="ordered_stock" :props="props">
               {{ props.row.ordered_stock }}
             </q-td>
             <q-td key="inspect_stock" :props="props">
               {{ props.row.inspect_stock }}
             </q-td>
             <q-td key="hold_stock" :props="props">
               {{ props.row.hold_stock }}
             </q-td>
             <q-td key="damage_stock" :props="props">
                 {{ props.row.damage_stock }}
             </q-td>
             <q-td key="asn_stock" :props="props">
               {{ props.row.asn_stock }}
             </q-td>
             <q-td key="dn_stock" :props="props">
               {{ props.row.dn_stock }}
             </q-td>
             <q-td key="pre_load_stock" :props="props">
               {{ props.row.pre_load_stock }}
             </q-td>
             <q-td key="pre_sort_stock" :props="props">
               {{ props.row.pre_sort_stock }}
             </q-td>
             <q-td key="sorted_stock" :props="props">
               {{ props.row.sorted_stock }}
             </q-td>
             <q-td key="pick_stock" :props="props">
               {{ props.row.pick_stock }}
             </q-td>
             <q-td key="picked_stock" :props="props">
               {{ props.row.picked_stock }}
             </q-td>
             <q-td key="back_order_stock" :props="props">
               {{ props.row.back_order_stock }}
             </q-td>
             <q-td key="create_time" :props="props">
               {{ props.row.create_time }}
             </q-td>
             <q-td key="update_time" :props="props">
               {{ props.row.update_time }}
             </q-td>
           </q-tr>
         </template>
        </q-table>
      </transition>
      <template>
        <div class="q-pa-lg flex flex-center">
          <q-btn v-show="pathname_previous" flat push color="purple" :label="$t('previous')" icon="navigate_before" @click="getListPrevious()">
            <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
              {{ $t('previous') }}
            </q-tooltip>
          </q-btn>
          <q-btn v-show="pathname_next" flat push color="purple" :label="$t('next')" icon-right="navigate_next" @click="getListNext()">
            <q-tooltip content-class="bg-amber text-black shadow-4" :offset="[10, 10]" content-style="font-size: 12px">
              {{ $t('next') }}
            </q-tooltip>
          </q-btn>
          <q-btn v-show="!pathname_previous && !pathname_next" flat push color="dark" :label="$t('no_data')"></q-btn>
        </div>
      </template>
    </div>
</template>
    <router-view />

<script>
import { getauth, getfile } from 'boot/axios_request'
import { date, exportFile, LocalStorage } from 'quasar'

export default {
  name: 'Pagestocklist',
  data () {
    return {
      openid: '',
      login_name: '',
      authin: '0',
      pathname: 'stock/list/',
      pathname_previous: '',
      pathname_next: '',
      separator: 'cell',
      loading: false,
      height: '',
      table_list: [],
      bin_size_list: [],
      bin_property_list: [],
      warehouse_list: [],
      columns: [
        { name: 'goods_code', required: true, label: this.$t('stock.view_stocklist.goods_code'), align: 'left', field: 'goods_code' },
        { name: 'goods_desc', label: this.$t('stock.view_stocklist.goods_desc'), field: 'goods_desc', align: 'center' },
        { name: 'goods_qty', label: this.$t('stock.view_stocklist.goods_qty'), field: 'goods_qty', align: 'center' },
        { name: 'onhand_stock', label: this.$t('stock.view_stocklist.onhand_stock'), field: 'onhand_stock', align: 'center' },
        { name: 'can_order_stock', label: this.$t('stock.view_stocklist.can_order_stock'), field: 'can_order_stock', align: 'center' },
        { name: 'ordered_stock', label: this.$t('stock.view_stocklist.ordered_stock'), field: 'ordered_stock', align: 'center' },
        { name: 'inspect_stock', label: this.$t('stock.view_stocklist.inspect_stock'), field: 'inspect_stock', align: 'center' },
        { name: 'hold_stock', label: this.$t('stock.view_stocklist.hold_stock'), field: 'hold_stock', align: 'center' },
        { name: 'damage_stock', label: this.$t('stock.view_stocklist.damage_stock'), field: 'damage_stock', align: 'center' },
        { name: 'asn_stock', label: this.$t('stock.view_stocklist.asn_stock'), field: 'asn_stock', align: 'center' },
        { name: 'dn_stock', label: this.$t('stock.view_stocklist.dn_stock'), field: 'dn_stock', align: 'center' },
        { name: 'pre_load_stock', label: this.$t('stock.view_stocklist.pre_load_stock'), field: 'pre_load_stock', align: 'center' },
        { name: 'pre_sort_stock', label: this.$t('stock.view_stocklist.pre_sort_stock'), field: 'pre_sort_stock', align: 'center' },
        { name: 'sorted_stock', label: this.$t('stock.view_stocklist.sorted_stock'), field: 'sorted_stock', align: 'center' },
        { name: 'pick_stock', label: this.$t('stock.view_stocklist.pick_stock'), field: 'pick_stock', align: 'center' },
        { name: 'picked_stock', label: this.$t('stock.view_stocklist.picked_stock'), field: 'picked_stock', align: 'center' },
        { name: 'back_order_stock', label: this.$t('stock.view_stocklist.back_order_stock'), field: 'back_order_stock', align: 'center' },
        { name: 'create_time', label: this.$t('createtime'), field: 'create_time', align: 'center' },
        { name: 'update_time', label: this.$t('updatetime'), field: 'update_time', align: 'center' }
      ],
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: '30'
      }
    }
  },
  methods: {
    getList () {
      var _this = this
      if (LocalStorage.has('auth')) {
        getauth(_this.pathname + '?ordering=-update_time', {
        }).then(res => {
          _this.table_list = res.results
          _this.pathname_previous = res.previous
          _this.pathname_next = res.next
        }).catch(err => {
          _this.$q.notify({
            message: err.detail,
            icon: 'close',
            color: 'negative'
          })
        })
      } else {
      }
    },
    getSearchList () {
      var _this = this
      if (LocalStorage.has('auth')) {
        getauth(_this.pathname + '?ordering=-update_time' + '&goods_code__icontains=' + _this.filter, {
        }).then(res => {
          _this.table_list = res.results
          _this.pathname_previous = res.previous
          _this.pathname_next = res.next
        }).catch(err => {
          _this.$q.notify({
            message: err.detail,
            icon: 'close',
            color: 'negative'
          })
        })
      } else {
      }
    },
    getListPrevious () {
      var _this = this
      if (LocalStorage.has('auth')) {
        getauth(_this.pathname_previous, {
        }).then(res => {
          _this.table_list = res.results
          _this.pathname_previous = res.previous
          _this.pathname_next = res.next
        }).catch(err => {
          _this.$q.notify({
            message: err.detail,
            icon: 'close',
            color: 'negative'
          })
        })
      } else {
      }
    },
    getListNext () {
      var _this = this
      if (LocalStorage.has('auth')) {
        getauth(_this.pathname_next, {
        }).then(res => {
          _this.table_list = res.results
          _this.pathname_previous = res.previous
          _this.pathname_next = res.next
        }).catch(err => {
          _this.$q.notify({
            message: err.detail,
            icon: 'close',
            color: 'negative'
          })
        })
      } else {
      }
    },
    reFresh () {
      var _this = this
      _this.getList()
    },
    downloadData () {
      var _this = this
      if (LocalStorage.has('auth')) {
        getfile('stock/filelist/?lang=' + LocalStorage.getItem('lang')).then(res => {
          var timeStamp = Date.now()
          var formattedString = date.formatDate(timeStamp, 'YYYYMMDDHHmmssSSS')
          const status = exportFile(
            'stocklist_' + formattedString + '.csv',
            '\uFEFF' + res.data,
            'text/csv'
          )
          if (status !== true) {
            _this.$q.notify({
              message: 'Browser denied file download...',
              color: 'negative',
              icon: 'warning'
            })
          }
        })
      } else {
        _this.$q.notify({
          message: _this.$t('notice.loginerror'),
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },
  created () {
    var _this = this
    if (LocalStorage.has('openid')) {
      _this.openid = LocalStorage.getItem('openid')
    } else {
      _this.openid = ''
      LocalStorage.set('openid', '')
    }
    if (LocalStorage.has('login_name')) {
      _this.login_name = LocalStorage.getItem('login_name')
    } else {
      _this.login_name = ''
      LocalStorage.set('login_name', '')
    }
    if (LocalStorage.has('auth')) {
      _this.authin = '1'
      _this.getList()
    } else {
      _this.authin = '0'
    }
  },
  mounted () {
    var _this = this
    if (_this.$q.platform.is.electron) {
      _this.height = String(_this.$q.screen.height - 290) + 'px'
    } else {
      _this.height = _this.$q.screen.height - 290 + '' + 'px'
    }
  },
  updated () {
  },
  destroyed () {
  }
}
</script>
