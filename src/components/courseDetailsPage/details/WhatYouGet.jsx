import { Children } from 'react';
import {
	PersonVideo3,
	QuestionOctagon,
	JournalCheck,
	Calendar4,
	Award,
	EmojiSmile,
} from 'react-bootstrap-icons';
import {getBenefits} from "../../../graphql/Queries";
import {useQuery} from "@apollo/client";

function Feature({ icon, title,description }) {
	return (
		<div className=" flex flex-col text-center items-center gap-2 py-8 px-2 border-b sm:border-none shadow-sm lg:flex-row lg:text-left lg:px-4 lg:gap-4">
			<div className="">
				<div className="h-14 w-14 bg-gray-50 rounded-full border border-gray-300 relative lg:h-12 lg:w-12">
					{icon}
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<h4 className="text-slate-900 font-semibold text-xl">{title}</h4>
				<p>
					{description}
				</p>
			</div>
		</div>
	);
}

function WhatYouGet({ className,id }) {
	const iconClasses = `text-red-800 text-2xl mb-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-xl`;
	const features = [
		<PersonVideo3 className={iconClasses} />,
 <QuestionOctagon className={iconClasses} />,
 <JournalCheck className={iconClasses} />,
 <Calendar4 className={iconClasses} />,
 <Award className={iconClasses} />,
 <EmojiSmile className={iconClasses} />,
	];
	const token = localStorage.getItem("accessToken");
	const { loading, data, error } = useQuery(getBenefits, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
     courseId:id
    },
  });
	console.log(data?.getFullCourseDetails.courseBenefits)
	let list = data?.getFullCourseDetails?.courseBenefits
	const asideClasses = `${className} text-gray-500`;
	let i=-1
	return (
		<aside className={asideClasses}>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
				{Children.toArray(list?.map(obj=>{
					i++
					return <Feature icon={features[i]} title={obj.name} description={obj.description}/>
				}))}
			</div>
		</aside>
	);
}

export default WhatYouGet;
