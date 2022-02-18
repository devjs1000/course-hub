import {
    BoxArrowLeft,
    CardText,
    CaretRight,
    FileEarmark,
    Moon,
    Pen,
    PersonCircle,
    Phone,
  } from "react-bootstrap-icons";

  import { profileDesign } from "../styles/styleObjects";


export default ({children, icon, onClick})=>{
    let iconImg=''
    if (icon === 'PERSONCIRCLE') iconImg = <PersonCircle className={profileDesign.mainIcon} />;
	if (icon === 'CARDTEXT') iconImg = <CardText className={profileDesign.mainIcon} />;
	if (icon === 'FILEEARMARK') iconImg = <FileEarmark className={profileDesign.mainIcon} />;
    if (icon === 'BOXARROWLEFT') iconImg = <BoxArrowLeft className={profileDesign.mainIcon} />;
	if (icon === 'MOON') iconImg = <Moon className={profileDesign.mainIcon} />;
	if (icon === 'PEN') iconImg = <Pen className={profileDesign.mainIcon} />;
	if (icon === 'PHONE') iconImg = <Phone className={profileDesign.mainIcon} />;


    return (
        <>
         <div className={profileDesign.mainBtn}>
            <div className="flex items-center" onClick={()=>{if(onClick) onClick()}}>
                {iconImg}
              <p className={profileDesign.mainBtnText}>{children}</p>
            </div>
            <CaretRight />
          </div>
        </>
    )
}