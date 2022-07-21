import styles from "../CSS/pricingplans.module.css";
import Toggl from "./Toggle";
import ReviewBox from "./ReviewBox";

import PricingBox from "./PricingBox";
import { AiFillCaretRight } from "react-icons/ai";

const PricingPlan = () => {
    return (
        <>
            <h1 className={styles.heading}>Pricing Plans</h1>
            <p>No credit card required. All plans come with a free, 30-day trial of our Premium features.</p>
            <p className={styles.togglebtnheading}>Choose your billing:</p>
            <Toggl />

            <PricingBox />
            <br />
            <br />
            <div className={styles.description}>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. You can choose to upgrade at the end of the trial or continue using Track for free.</div>

            <button className={styles.planFeatureBtn}>Compare all plan features <AiFillCaretRight />  </button>

            <ReviewBox />

        </>
    )
}


export default PricingPlan;