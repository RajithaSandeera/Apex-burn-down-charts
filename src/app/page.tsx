'use client';
import BurnDownChart from "@/component/BurnDownChart/BurnDownChart";
import PieChart from "@/component/PieChart/PieChart";
import StackColumnChart from "@/component/StackColumnChart/StackColumnChart";


export default function Home() {
  return (
    <><StackColumnChart /><PieChart /><BurnDownChart/></>
  );
}
