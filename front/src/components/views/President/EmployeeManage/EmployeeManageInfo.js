import React from "react";
import { Button, Table, Layout, Modal, Typography } from "antd";
import "antd/dist/antd.css";
import { EmployeeManageListColum } from "./EmployeeManageColums"; //칼럼

const { Content } = Layout;
const { Text } = Typography;
//인쇄 기능
const printDiv = () => {
  var initBody = document.body.innerHTML;

  window.onbeforeprint = function () {
    //document.title = LoginedUser;
    document.body.innerHTML = document.getElementById("printArea").innerHTML;
  };
  window.onafterprint = function () {
    document.body.innerHTML = initBody;
    window.location.reload();
  };
  window.print();
};

function EmployeeManageInfo(props) {
  return (
    <Modal
      visible={props.Visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={1112}
    >
      <>
        <Content style={{ margin: "0" }}>
          <div style={{ margin: "0 auto", width: "1000px" }}>
            <div style={{ marginBottom: "20px" }}>
              {/* 년 월 인쇄 통합 div */}
              <div style={{ display: "inline-block", float: "right" }}>
                <Text style={{ marginRight: "10px" }}>
                  {props.User.rank} - {props.User.name}
                </Text>
                <Button onClick={printDiv}>인쇄</Button>
              </div>
            </div>
            <div id="printArea">
              <div style={{ width: "1000px", margin: "0 auto" }}>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "40%",
                    textAlign: "center",
                  }}
                >
                  <h2>
                    {props.SelectYear}년 {props.SelectMonth}월 근무현황
                  </h2>
                </div>
              </div>

              <Table
                columns={EmployeeManageListColum}
                dataSource={props.UserData}
                pagination={false}
              />

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    display: "inline-block",
                    width: "40%",
                    backgroundColor: "orange",
                  }}
                >
                  근무시간합계
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "10%",
                    backgroundColor: "white",
                  }}
                >
                  {props.WorkTimeSum}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "40%",
                    backgroundColor: "orange",
                  }}
                >
                  초과근무시간합계
                </div>
                <div
                  style={{
                    display: "inline-block",
                    width: "10%",
                    backgroundColor: "white",
                  }}
                >
                  초과합
                </div>
              </div>
            </div>
          </div>
        </Content>
      </>
    </Modal>
  );
}

export default EmployeeManageInfo;
