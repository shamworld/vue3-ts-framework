/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-07-14 11:01:12
 * @LastEditors: Roy
 * @LastEditTime: 2021-09-02 11:27:45
 * @Deprecated: 否
 * @FilePath: /WKEX/src/configVant.ts
 */
// import all used components in whole projects

import {
  PullRefresh,
  Dialog,
  ActionSheet,
  List,
  Popup,
  Popover,
  NoticeBar,
  Grid,
  GridItem,
  AddressEdit,
  AddressList,
  Icon,
  SubmitBar,
  CheckboxGroup,
  SwipeCell,
  Stepper,
  Checkbox,
  Field,
  Form,
  Tag,
  Button,
  Image as VanImage,
  Card,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Badge,
  Sidebar,
  SidebarItem,
  Collapse,
  CollapseItem,
  NavBar,
  Uploader
} from 'vant'
import { App } from 'vue'
const components = [
  PullRefresh,
  ActionSheet,
  List,
  Popup,
  Popover,
  NoticeBar,
  Grid,
  GridItem,
  AddressEdit,
  AddressList,
  Icon,
  SubmitBar,
  CheckboxGroup,
  SwipeCell,
  Stepper,
  Checkbox,
  Field,
  Form,
  Tag,
  Button,
  VanImage,
  Card,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  Badge,
  Sidebar,
  SidebarItem,
  Collapse,
  CollapseItem,
  NavBar,
  Uploader
]
const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}
export default {
  install
}

