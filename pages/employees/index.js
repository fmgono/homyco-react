import React, { useState } from 'react'
// import 'antd/dist/antd.css'

import { Input, Button, Table, Tag, Space, Col, Card, Divider, Dropdown, Layout, Menu, PageHeader, Row, Side } from 'antd'
import { SearchOutlined, EditOutlined, NotificationOutlined, DesktopOutlined, DownOutlined, FileOutlined, MenuFoldOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout

import Avatar from 'antd/lib/avatar/avatar'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name) => (
      <div className="">
        <Avatar size="large" src="" className="mr-3" />
        {name}
      </div>
    )
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const data = [
  {
    id: '1',
    key: '1',
    name: 'Diva Fathan Margono',
    email: 'Diva@gmail.com',
    position: 'Web Developer',
    department: 'Development',
    status: 'Full-time',
  },
  {
    id: '2',
    key: '2',
    name: 'Jim Green',
    email: 'Jim@gmail.com',
    position: 'Web Developer',
    department: 'Development',
    status: 'Full-time',
  },
  {
    id: '3',
    key: '3',
    name: 'Joe Black',
    email: 'Joe@gmail.com',
    position: 'Web Developer',
    department: 'Development',
    status: 'Full-time',
  },
];

// const data = [
//   {
//     name: 'Diva Fathan Margono',
//     jobTitle: 'Web Developer'
//   },
// ]

const menu = (
  <Menu className="rounded-xl">
    <Menu.Item key={0}>Profile</Menu.Item>
    <Menu.Item key={1}>Setting</Menu.Item>
    <Menu.Divider />
    <Menu.Item key={2}>Logout</Menu.Item>
  </Menu>
)

export default function Home() {
  const [isCollapsed, setCollapse] = useState(false)

  const onCollapse = () => setCollapse(!isCollapsed)
  return (
    <div>
      <Layout className="min-h-screen	bg-blue-50">
        <Sider className="min-h-screen rounded-xl my-4 ml-4" theme="light" collapsible collapsed={isCollapsed} trigger={null}>
          <div className="w-40 h-16"></div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" className="px-3">
            <Menu.Item className="rounded-xl" key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item className="rounded-xl" key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item className="rounded-xl" key="3">Tom</Menu.Item>
              <Menu.Item className="rounded-xl" key="4">Bill</Menu.Item>
              <Menu.Item className="rounded-xl" key="5">Alex</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item className="rounded-xl" key="6">Team 1</Menu.Item>
              <Menu.Item className="rounded-xl" key="8">Team 2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item className="rounded-xl" key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="bg-blue-50 m-4">
          <Header className="border-b bg-blue-50 border-blue-50 bg-white h-16 rounded-xl px-0 ">
            <Row justify="space-between" align="top" className="h-16">
              <Col span={18}>
                {/* <div className="w-auto h-12 bg-gray-300 "></div> */}
                {/* <MenuFoldOutlined onClick={onCollapse} className="text-xl" /> */}
                <Input className="flex border-none text-gray-600 rounded-xl" size="large" placeholder="Search" style={{ width: 300, height: 48 }} suffix={<SearchOutlined />} />
              </Col>
              <Col span={6}>
                <div className="flex justify-between items-stretch">
                  {/* <Button className="h-auto border-0 py-2 px-3 rounded-xl">
                    <NotificationOutlined />
                  </Button> */}
                  <Dropdown overlay={menu} trigger={['click']} className="h-auto">
                    <Button className="border-0 py-2 px-4 rounded-xl">
                      <NotificationOutlined />
                      {/* <DownOutlined /> */}
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={menu} trigger={['click']} className="h-auto">
                    <Button className="border-0 py-2 px-4 rounded-xl">
                      <Avatar size="default" src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" className="mr-3" />
                      <span className="font-semibold">Fathan Margono</span>
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Header>
          <Content>
            <PageHeader
              className="px-0"
              title="Employees (26)"
              // breadcrumb={{ routes }}
              subTitle="List Of Employees"
            />

            <Row className="mb-4" justify="start" align="stretch">
              <Col>
                <Input className="border-none text-gray-600 rounded-md" size="middle" placeholder="Search" style={{ width: 300 }} suffix={<SearchOutlined />} />
              </Col>
              <Col></Col>
            </Row>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg bg-white p-1">
                <div className="flex flex-col justify-center items-center bg-blue-50 rounded-xl p-5">
                  <Avatar size="default" src="https://avatars.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4" className="mr-3" />
                  <span>Fathan Margono</span>
                  <span>Web Developer</span>
                  {/* <small>fathan@gmail.com</small> */}
                </div>
              </div>

            </div>

          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
