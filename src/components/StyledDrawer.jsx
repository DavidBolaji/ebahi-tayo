import styled from "@emotion/styled";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)`
  padding: 20px;
  background-color: #c33ec3 !important;
  .ant-drawer-body {
    margin-top: 50px;
  }

  li {
    /* font-size: larger; */
    font-weight: 800;
    /* text-align: center; */
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  a:hover {
    border-bottom: 2px solid #fff;
  }
  .ant-drawer-close {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #fff;
  }
  /* background-color: #eb2f96de !important; */
  .ant-drawer-content-wrapper {
    width: 100% !important;
    max-width: 578px;
    text-align: center;
  }
  .ant-drawer-footer {
    text-align: center;
    color: #555555;
    /* background-color: #555555; */
    margin-top: 50px !important;
    /* transform: translateY(20px); */
  }
`;
