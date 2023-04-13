import styled from "@emotion/styled";
import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  background-color: #c33ec3 !important;
  color: #fff;
  padding: 1px solid #c33ec3 !important;
  border: none;
  margin: 0px !important;

  .ant-menu-submenu-title {
    padding-left: 0px !important;
    background-color: #c33ec3 !important;
    font-weight: 600 !important;

    border-radius: 0;
    &:hover {
      border-bottom: 2px solid #fff !important;
      color: #fff !important;
    }
  }

  /* ant-menu ant-menu-sub ant-menu-inline .ant-menu { */
  /* padding: 0px !important; */

  .ant-menu-title-content {
    background-color: #c33ec3 !important;
    padding: 0px !important;
    font-weight: 600 !important;
    color: #fff;
    &:hover {
      border-bottom: 1px solid #fff !important;
      color: #fff !important;
    }
  }

  :where(
      .css-dev-only-do-not-override-1vtf12y
    ).ant-menu-light.ant-menu-root.ant-menu-inline {
    border: none;
    margin: 0px !important;
    padding: 0px !important;
  }

  /* ant-menu ant-menu-root ant-menu-inline */
  .ant-menu-item {
    padding-left: 0px !important;
    background-color: #c33ec3 !important;
  }
  .ant-menu-submenu {
    padding-left: 0px !important;
    background-color: #c33ec3 !important;
  }
`;
