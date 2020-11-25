import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //react-router-dom을 가져옴
//페이지 import
import PrezWork from './components/views/President/PresidentWork';
import PrezOutWork from './components/views/President/Holiday/PrezHoliday';
import PrezWorkManage from './components/views/President/WorkManage/workManage2';
import PrezMainPage from './components/views/President/MainPage/MainPage';
import PrezMyPage from './components/views/President/MyPage/MyPage';
import PrezCheckMyPage from './components/views/President/MyPage/CheckMyPage';
//import CheckMyPage from './components/views/Employee/MyPage/MyPageCheck';
import MyPage from './components/views/Employee/MyPage/MyPageCheck';
import MainPage from './components/views/Employee/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import HolidayUser from './components/views/Employee/HolidayUser/HolidayUser';
import WorkManage from './components/views/Employee/WorkManage/WorkManage';
import Manage from './hoc/System/Manage';
import Code from './hoc/System/Code';
import MasterCode from './hoc/System/MasterCode';
import Holiday from './hoc/System/Holiday';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/prezwork" component={PrezWork} />
          <Route exact path="/prezholiday" component={PrezOutWork} />
          <Route exact path="/prezmainpage" component={PrezMainPage} />
          <Route exact path="/prezmypage" component={PrezMyPage} />
          <Route exact path="/prezckmypage" component={PrezCheckMyPage} />
          <Route exact path="/prezworkmanage" component={PrezWorkManage} />
          {/* <Route exact path="/ckmypage" component={CheckMyPage} /> */}
          <Route exact path="/mypage" component={MyPage} />
          {/* <Route exact path="/middle" component={MiddlePage} /> */}
          <Route exact path="/main" component={MainPage} />
          {/* <Route exact path="/landing" component={LandingPage} /> */}
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/register" component={RegisterPage} /> */}
          <Route exact path="/holidayuser" component={HolidayUser} />
          <Route exact path="/manage" component={Manage} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/mastercode" component={MasterCode} />
          <Route exact path="/holiday" component={Holiday} />
          <Route exact path="/workmanage" component={WorkManage} />
          {/* <Route exact path="/mastermanage" component={MasterManage} />
          <Route exact path="/masteroutwork" component={MasterOutwork} />
          <Route exact path="/masterpage" component={MasterPage} />
          <Route exact path="/mastermain" component={MasterMain} />
          <Route exact path="/mastermiddle" component={MasterMiddle} />
          <Route exact path="/ckmasterpage" component={CheckMasterPage} /> */}
        </Switch>
      </div>
    </Router>//router(해당 페이지의 최적의 경로로 넘어갈 수 있게 해주는 기능) 설정
  );
}

export default App;