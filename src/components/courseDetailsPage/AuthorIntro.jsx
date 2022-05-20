import noImagePlaceHolder from '../../images/noImagePlaceHolder.png';
import {getTeacherDetails} from "../../graphql/Queries";
import {useQuery} from "@apollo/client";
import {Linkedin,Github} from "react-bootstrap-icons";
function AuthorIntro({id}) {
	const backgroundImage = `h-28 w-28 border rounded-full bg-no-repeat bg-cover bg-center outline-offset-2 outline outline-slate-300`;
	const token = localStorage.getItem("accessToken");
	console.log(id)
  const { loading, data, error } = useQuery(getTeacherDetails, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
     courseId:id
    },
  });
  // console.log(data.getFullCourseDetails.teacherDetails)
  let details=data?.getFullCourseDetails.teacherDetails
	return (
		<section className="mt-24 h-" id="instructor">
			<h2 className="uppercase font-semibold text-lg">Instructor</h2>

			<div className="my-4 flex items-center gap-6">
				<div
					className={backgroundImage}
					style={{ backgroundImage: `url(${details?.image?details?.image:noImagePlaceHolder})` }}
				>
					&nbsp;
				</div>
				<div className="outline-o">
					<h6 className="text-lg font-semibold">{details?.name}</h6>
					<p className="text-sm"></p>
				</div>
			</div>
			<div className='flex w-[20%] md:w-[10%] justify-around'>
			<a href={details?.linkedIn} target='_blank'>
			<Linkedin className='text-2xl cursor-pointer'/>
			</a>
			<a href={details?.gitub}>
			<Github className='text-2xl cursor-pointer' target='_blank'/>
			</a>
			</div>
			<p>
				{details?.description}
			</p>
		</section>
	);
}

export default AuthorIntro;
