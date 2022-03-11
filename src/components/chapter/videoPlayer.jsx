import { Clock } from "react-bootstrap-icons";
export default ({vidSrc, title, videoLength, completion, status})=>{
    console.table({vidSrc, title});
    return <>
<div className="bg-gray-900  h-auto w-full">
    <video src={vidSrc} controls={true } className='w-full min-h-[50vh] max-h-[60vh]'></video>
    <div className="bg-gray-900 flex justify-between text-slate-100 py-2 px-4">
       
        <div> {title}</div>
       <div className="flex gap-2 items-center"><Clock />{videoLength}</div>
        </div>
</div>
    </>
}