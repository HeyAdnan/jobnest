import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer"
import BarChart from'./BarChart';
import LineCharts from'./LineCharts';
import { useSelector } from "react-redux";
import BarCharts from "./BarChart";

const ChartsContainer = () => {
  const[barChart, setBarChart] = useState(false);
  const{monthlyApplications:data} = useSelector((store)=>store.allJobs);
  // console.log(data);
  return (
  <Wrapper>
      <h4>Monthly Applications</h4>
      <button onClick={()=>{setBarChart(!barChart)}}>
        {barChart?'Line Chart':'Bar Chart'}
      </button>
      {barChart?<BarCharts data={data}/>:<LineCharts data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer