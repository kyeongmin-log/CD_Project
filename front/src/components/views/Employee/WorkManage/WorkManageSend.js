import React, { useState, useEffect } from "react";
import { Layout, Button, Table, Select, Input, Modal, DatePicker } from 'antd';
import { deptColums } from './WorkManageColumns';
import axios from 'axios';
import moment from 'moment';

const { Content } = Layout; //Layout부분을  Header , Content ,Sider, Footer로 나눠서 사용한다.
const { Option } = Select;
const { TextArea } = Input;

function WorkManageSend() {
    const [CheckTarget, setCheckTarget] = useState(['']); //선택한 유저 값
    //선택 박스
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          setCheckTarget(selectedRows);
        }
    };
    //검색에 들어가는 값
    const depts = ['영업부','경리부']
    //선택한 값
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    //모달창 변수
    const [Visible, setVisible] = useState(false);
    //팝업 ON
    const showModal = () => {
      setVisible(true);
    };
    //팝업 OFF
    const handleCancel = () => {
      setVisible(false);
     };
    //팝업 OFF, 데이터 보내기
    const handleOk = () => {
      setVisible(false);
      console.log('선택한 유저 :',CheckTarget);
      console.log('날짜 :',CurrentTime[0]);
      console.log('종료날짜 :', EndDate);
      console.log('제목 :',Title);
      console.log('내용 :',Des);
      let body = {
          checkUsers : CheckTarget,
          CurrentTime: CurrentTime[0],
          EndDate,
          Title,
          Des
      }
      //이제 보내서 저장하고 해당 유저는 있으면 보여줌.
      axios.post('/api/workmanagesave',body).then(response => {
          console.log(response.data);
          if(response.data){
            alert('성공적으로 보냈습니다.');
            window.location.reload();
          } else {
            alert('Error');
          }
      });
    }
    //날짜 데이터 가져오기
    const CurrentTime = useState(moment().format('YYYY/MM/DD')); //현재 날짜
    const [EndDate, setEndDate] = useState(''); //종료 날짜
    //날짜 데이터 SET
    const handleDateChange = (value) => {
        //console.log(value);
        //console.log(value.format('YYYY/MM/DD'));
        setEndDate(value.format('YYYY/MM/DD'));
    }
    //제목 데이터 가져오기
    const [Title, setTitle] = useState(''); //제목
    //제목 데이터 SET
    const handleChangeTitle = (e) => {
        setTitle(e.currentTarget.value);
      }
    //내용 데이터 가져오기
    const [Des, setDes] = useState(''); //내용
    //내용 데이터 SET
    const handleChangeDes = (e) => {
        setDes(e.currentTarget.value);
    }
    // 직원 리스트 출력
    const [UserList, setUserList] = useState(['']); //직원 리스트
    //데이터 GET
    useEffect(() => {
        axios.get('/api/workmanageuserlist').then(response => {
            //console.log(response.data);
            setUserList(response.data);
        });
    }, [])

    return (
        <div>
            <Content style={{ margin: '0 auto', width: '1200px'}}>
                <div id = "wrap">
                    <div id = "left" style = {{float: "left", width: "25%"}}>
                        <div>
                            <div style = {{display: "inline-block"}}>
                                <Button disabled style = {{backgroundColor: "orange", color: "black"}}>부서선택</Button> 
                            </div>
                            <div style = {{display: "inline-block"}}>
                                <Select name = 'dept' defaultValue="부서" onChange={handleChange} style = {{width: "88px"}}>
                                    {depts.map(dept => (<Option key={dept}>{dept}</Option>))}
                                </Select>
                            </div>
                        </div>
                        <div style = {{marginTop: "7.3%"}}>
                            <div style = {{fontSize: "160%", textAlign: "center", backgroundColor: "orange"}}>
                                직원리스트
                            </div>
                            <Table columns={deptColums} dataSource={UserList} rowSelection={rowSelection} pagination={false} />
                        </div>
                    </div>
                    <div id = "right" style = {{float: "left", width: "64%", marginLeft: "12px"}}>
                        <div style = {{ display: "inline-block", width: "100%", height: "50%", marginTop: "7%"}}>
                            <div>
                                <div style = {{display: "inline-block", width: "15%", height: "35px", fontSize: "160%", textAlign: "center", backgroundColor: "orange"}}>
                                    보낸날짜
                                </div>
                                <div style = {{display: "inline-block", width: "35%", height: "35px", textAlignLast:'center', backgroundColor: 'white', verticalAlign: 'top', paddingTop: "6px"}}>
                                    {CurrentTime}
                                </div>
                                <div style = {{display: "inline-block", width: "15%", fontSize: "160%", textAlign: "center", backgroundColor: "orange"}}>
                                    종료날짜
                                </div>
                                <div style = {{display: "inline-block", width: "35%", textAlignLast:'center',height:'10px'}}>
                                    <DatePicker
                                    size={'large'}
                                    style = {{width:'100%'}}
                                    onChange={handleDateChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div style = {{display: "inline-block", width: "15%", fontSize: "160%", textAlign: "center", backgroundColor: "orange"}}>
                                    제목
                                </div>
                                <div style = {{display: "inline-block", width: "85%" }}>
                                    <Input style = {{fontSize: "140%"}} onChange={handleChangeTitle} />
                                </div>
                            </div>
                            <div>
                                <div style = {{display: "inline-block", width: "15%", fontSize: "160%", textAlign: "center", backgroundColor: "orange"}}>
                                    내용
                                </div>
                                <div>
                                    <TextArea rows={10}  onChange={handleChangeDes}/>
                                    <Button style = {{float: "right"}} onClick = {showModal}>보내기</Button>
                                    <Modal
                                        visible={Visible}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                    >
                                        보내시겠습니까?
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default WorkManageSend