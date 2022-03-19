import React from "react";
import {
  Person,
  Tag,
  Hash,
  QuestionOctagon,
  CurrencyDollar,
  HandThumbsUp,
  FileEarmark,
  SortNumericDown,
  Link45deg,
  CameraVideo,
  Journal,
  Check2Circle,
  XOctagon,
  JournalText,
  Lock,
  Envelope,
  Telephone,
  CardText,
  PersonSquare,
} from "react-bootstrap-icons";

function FormControl({ type, label, onChange, icon }) {
  let iconImg;
  let iconClass = "text-lg";

  if (icon === "PERSON") iconImg = <Person className={iconClass} />;
  if (icon === "TAGLINE") iconImg = <Tag className={iconClass} />;
  if (icon === "TYPE") iconImg = <Hash className={iconClass} />;
  if (icon === "QUESTION") iconImg = <QuestionOctagon className={iconClass} />;
  if (icon === "CURRENCY") iconImg = <CurrencyDollar className={iconClass} />;
  if (icon === "ADVANTAGE") iconImg = <HandThumbsUp className={iconClass} />;
  if (icon === "FILE_NAME") iconImg = <FileEarmark className={iconClass} />;
  if (icon === "NUM") iconImg = <SortNumericDown className={iconClass} />;
  if (icon === "LINK") iconImg = <Link45deg className={iconClass} />;
  if (icon === "VIDEO") iconImg = <CameraVideo className={iconClass} />;
  if (icon === "JOURNAL") iconImg = <Journal className={iconClass} />;
  if (icon === "CORRECT") iconImg = <Check2Circle className={iconClass} />;
  if (icon === "INCORRECT") iconImg = <XOctagon className={iconClass} />;
  if (icon === "DESC") iconImg = <JournalText className={iconClass} />;
  if (icon === "LOCK") iconImg = <Lock className={iconClass} />;
  if (icon === "EMAIL") iconImg = <Envelope className={iconClass} />;
  if (icon === "PHONE") iconImg = <Telephone className={iconClass} />;
  if (icon === "DESCRIPTION") iconImg = <CardText className={iconClass} />;
  if (icon === "IMAGE") iconImg = <PersonSquare className={iconClass} />;

  return (
    <div className="relative top-0 left-0 w-full">
      <div className="absolute top-[50%] translate-y-[-50%] left-[2px] w-[3rem] h-[calc(100%-2px)] flex items-center justify-center rounded-tl-md rounded-bl-md border-r-[1px]">
        {iconImg}
      </div>
      <input
        type={type}
        className="form-input border border-slate-300 w-full py-3 pr-2 pl-14 rounded-md bg-transparent hover:border-primary-color-dark focus:outline-none"
        id={label}
        autoComplete="off"
        placeholder=" "
        onChange={onChange}
        name={label}
        required
      />
      <label
        htmlFor={label}
        className="form-label text-slate-700 absolute left-[3.2rem] top-[0.7rem] transition-all duration-300 px-2 cursor-text bg-white"
      >
        {`${label.slice(0, 1).toUpperCase()}${label.slice(1, label.length)}`}
      </label>
    </div>
  );
}

export default FormControl;
