const state = {
  // 接口调用参数
  params: {
    page: 1,
    per_page: 10,
    condition: {}
  },
  roles: {}, // 权限
  apiName: 'tractor',
  privileges: [
    'tractor_add',
    'tractor_export',
    'tractor_import',
    'tractor_delete'
  ],
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  multipleSelection: [],
  tableHeadList: [
    {
      label: '车牌号',
      prop: 'number',
      width: '100',
      checked: 1
    },
    {
      label: '车辆状态',
      prop: 'state_name',
      width: '100',
      checked: 1
    },
    {
      label: '配车状态',
      prop: 'match_display',
      width: '100',
      checked: 1
    },
    {
      label: '上车状态',
      prop: 'on_the_tractor_display',
      width: '100',
      checked: 1
    },
    {
      label: '关联挂车',
      prop: 'trailer_number',
      width: '100',
      checked: 1
    },
    {
      label: '关联驾驶员',
      prop: 'driver_name',
      width: '100',
      checked: 1
    },
    {
      label: '更新时间',
      prop: 'update_time',
      width: '100',
      checked: 1
    }
  ]
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  // 更新页面搜索内容
  updateSearchData(state, payload) {
    state.searchData = payload
  },
  // 更新表格 loading 状态
  updateLoading(state, payload) {
    state.isLoading = payload
  },
  // 更新数据总条数
  updateTotal(state, payload) {
    state.total = payload
  },
  // 更新data数据
  updateTableData(state, payload) {
    payload.forEach(item => {
      item.oncar = item.on_the_tractor ? '已上车' : '未上车'
      item.matchcar = item.match ? '已配车' : '未配车'
    })
    state.tableData = payload
  },
  // 更新列表表头数据
  updateEditTableList(state, payload) {
    state.tableHeadList = payload
  },
  // 首列是否固定
  updateColumnFixed(state, payload) {
    state.firstColumnFixed = payload
  },
  // 更新列表参数数据
  updateParams(state, payload) {
    state.params = Object.assign({}, state.params, payload)
  },
  // 更新列表多选数据
  updateSelection(state, payload) {
    state.multipleSelection = payload
  },
  // 更新权限
  updateRoles(state, payload) {
    state.roles = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
