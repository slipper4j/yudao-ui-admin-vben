import { defHttp } from '@/utils/http/axios'

// 创建站内信模板
export const createNotifyTemplate = (data) => {
  return defHttp.post({ url: '/system/notify-template/create', data })
}

// 更新站内信模板
export const updateNotifyTemplate = (data) => {
  return defHttp.put({ url: '/system/notify-template/update', data })
}

// 删除站内信模板
export const deleteNotifyTemplate = (id: number) => {
  return defHttp.delete({ url: '/system/notify-template/delete?id=' + id })
}

// 获得站内信模板
export const getNotifyTemplate = (id: number) => {
  return defHttp.get({ url: '/system/notify-template/get?id=' + id })
}

// 获得站内信模板分页
export const getNotifyTemplatePage = (params) => {
  return defHttp.get({ url: '/system/notify-template/page', params })
}

// 获取岗位精简信息列表
export const listSimplePosts = () => {
  return defHttp.get({ url: '/system/post/list-all-simple' })
}

// 导出站内信模板 Excel
export const exportNotifyTemplateExcel = (params) => {
  return defHttp.download({ url: '/system/notify-template/export-excel', params }, '导出站内信模板.xls')
}
