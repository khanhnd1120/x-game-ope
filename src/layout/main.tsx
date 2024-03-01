import { Routes, Route } from "react-router-dom";
import Profile from "profile";
import Home from "home";
import List from "list";
import Form from "form";
import Chart from "chart";
import Table from "table";
import ImportData from "import";
import Setting from "setting";
import SettingTwitterQuest from "setting/setting-twitter-quest";

export default function Main({ showMenu }: { showMenu: boolean }) {
  return (
    <div>
      <div className={`p-4 pt-20 duration-200 ${showMenu && "pl-[260px]"}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/list/:name" element={<List />}></Route>
          <Route path="/form/:name/:mode" element={<Form />}></Route>
          <Route path="/chart/:type" element={<Chart />}></Route>
          <Route path="/table/:type" element={<Table />}></Route>
          <Route path="/import-data" element={<ImportData />}></Route>
          <Route path="/view-data" element={<ImportData />}></Route>
          <Route path="/setting/:name" element={<Setting />}></Route>
          <Route
            path="/custom-setting/setting-twitter-quest"
            element={<SettingTwitterQuest />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}
