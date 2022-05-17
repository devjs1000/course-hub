import React,{useState} from 'react'
import useStore from "../../context/useStore";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavTabs from "../NavTabs";
import BenTable from './BenTable'
import ModifyBenefitModal from './ModifyBenefitModal'

const Benefits = () => {
   const { user, theme } = useStore();
  const { id } = useParams();
  let [selectedBenefit,setSelectedBenefit] = useState({})
  let [isOpen,setIsOpen] = useState(false)
  let token =localStorage.getItem("accessToken")
  const mainDivStyles = `${
    theme ? "bg-slate-800 text-white" : "bg-white"
  } py-8 px-16 overflow-hidden`;
  let formStyles = `flex flex-col h-full justify-around`
  let btnStyles=`focus:outline-none cursor-pointer w-32 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-900`
  console.log(selectedBenefit)
  return (
    <div className={mainDivStyles}>
      <NavTabs id={id} />
      <BenTable id={id} setSelectedBenefit={setSelectedBenefit} setIsOpen={setIsOpen} isOpen={isOpen} />
      <ModifyBenefitModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Benefits