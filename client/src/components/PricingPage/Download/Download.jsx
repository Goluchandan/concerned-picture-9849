
import style from "./download.module.css";


const Download = () => {
    return (
        <div className={style.download_main_container}>
            <div
                className={`${style.download_container} ${style.download_description}`}
            >
                <h1>Online, offline or on the go?
                    We <img src="https://i.ibb.co/XFt0vTK/text1.png"></img> app for that!
                </h1>
                <p>Your data instantly syncs across all apps and devices</p>
            </div>
            <div
                className={`${style.download_container} ${style.download_types}`}
            >
                <div className={`${style.download_type}`}>

                    <div className={`${style.download_type_heading}`} >
                        <img src="https://i.ibb.co/CQZ6Qhy/mobile.png"></img>
                        <h5>MOBILE APPS</h5>
                        <p>Start and stop tracking from anywhere

                        </p>
                    </div>
                    <div className={`${style.download_btn}`}>
                        <button className={`${style.download_btn_ios}`}>iOS</button>
                        <button className={`${style.download_btn_android}`}>Android</button>
                    </div>



                </div>
                <div className={`${style.download_type}`}></div>
                <div className={`${style.download_type}`}></div>
                <div className={`${style.download_type}`}></div>
            </div>

        </div>
    )
}



export default Download;