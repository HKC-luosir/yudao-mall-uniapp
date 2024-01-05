import request from '@/sheep/request';

const AddressApi = {
  // 获得用户收件地址列表
  getAddressList: () => {
    return request({
      url: '/app-api/member/address/list',
      method: 'GET'
    });
  },
  // 创建用户收件地址
  createAddress: (data) => {
    return request({
      url: '/app-api/member/address/create',
      method: 'POST',
      data
    });
  },
  // 更新用户收件地址
  updateAddress: (data) => {
    return request({
      url: '/app-api/member/address/update',
      method: 'PUT',
      data
    });
  },
  // 获得用户收件地址
  getAddress: (id) => {
    return request({
      url: '/app-api/member/address/get',
      method: 'GET',
      params: { id }
    });
  },
  // 删除用户收件地址
  deleteAddress: (id) => {
    return request({
      url: '/app-api/member/address/delete',
      method: 'DELETE',
      params: { id }
    });
  },
};

export default AddressApi;
