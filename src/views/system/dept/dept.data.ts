import { listSimpleDeptApi } from '@/api/system/dept'
import { getListSimpleUsersApi } from '@/api/system/user'
import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    width: 260,
    align: 'left'
  },
  {
    title: '负责人',
    dataIndex: 'leader',
    width: 120
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 60
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.COMMON_STATUS)
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '部门名称',
    field: 'name',
    component: 'Input',
    colProps: { span: 8 }
  },
  {
    label: '状态',
    field: 'status',
    component: 'Select',
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    },
    colProps: { span: 8 }
  }
]
export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '上级部门',
    field: 'parentId',
    required: true,
    component: 'ApiTreeSelect',
    componentProps: {
      api: () => listSimpleDeptApi(),
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id'
      },
      handleTree: 'id'
    }
  },
  {
    label: '部门名称',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: '岗位顺序',
    field: 'sort',
    required: true,
    component: 'InputNumber'
  },
  {
    label: '负责人',
    field: 'leaderUserId',
    component: 'ApiSelect',
    componentProps: {
      api: () => getListSimpleUsersApi(),
      labelField: 'nickname',
      valueField: 'id'
    }
  },
  {
    label: '联系电话',
    field: 'phone',
    required: true,
    rules: [
      {
        pattern: /^(?:(?:\+|00)86)?1(?:3[\d]|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8[\d]|9[189])\d{8}$/,
        message: '请输入正确的手机号码',
        trigger: 'blur'
      }
    ],
    component: 'Input'
  },
  {
    label: '邮箱',
    field: 'email',
    required: true,
    component: 'Input'
  },
  {
    label: '部门状态',
    field: 'status',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getIntDictOptions(DICT_TYPE.COMMON_STATUS)
    }
  }
]