import React from 'react'
import styles from './homeSameSignup.module.css'
const HomeSameSignUp = () => {
  return (
   
        <>
        <div className={styles.HomeSamesignUp_main_mainContainer}>
        <div className={styles.HomeSamesignUp_mainContainer}>
            
            <div className={styles.HomeSamesignUp_childContainer}>
                <h2>Sign up for free</h2>
                <p>
                All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.
                </p>
                <div className={styles.HomeSamesignUp_mainContainer_button_div}>
                    <button className={styles.HomeSamesignUp_mainContainer_button}>
                    <svg className={styles.HomeSamesignUp_mainContainer_svg} width="28" height="28" viewBox="0 0 20 20"><g fill="none"><path d="M17.876 10.284c0-.574-.052-1.127-.147-1.657H10.1v3.134h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.954z" fill="#4285F4"></path><path d="M10.1 18.2c2.187 0 4.02-.725 5.36-1.962l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099A8.097 8.097 0 0010.1 18.2z" fill="#34A853"></path><path d="M5.568 11.639a4.869 4.869 0 01-.254-1.539c0-.534.092-1.053.254-1.539V6.462H2.862A8.097 8.097 0 002 10.1c0 1.307.313 2.544.862 3.638l2.706-2.099z" fill="#FBBC05"></path><path d="M10.1 5.222c1.19 0 2.257.408 3.096 1.21L15.52 4.11C14.117 2.803 12.283 2 10.1 2a8.097 8.097 0 00-7.238 4.462l2.706 2.099c.637-1.915 2.422-3.34 4.532-3.34z" fill="#EA4335"></path></g></svg>
                        Sign up via Google</button>
                    <button className={styles.HomeSamesignUp_mainContainer_button}>
                    <svg className={styles.HomeSamesignUp_mainContainer_svg} viewBox="0 0 20 20" version="1.1"><g><path d="M15.027 9.67a4.048 4.048 0 011.916-3.392 4.112 4.112 0 00-3.244-1.763c-1.365-.144-2.688.82-3.384.82-.709 0-1.78-.806-2.933-.782a4.317 4.317 0 00-3.636 2.229c-1.571 2.735-.399 6.756 1.107 8.967.753 1.083 1.634 2.293 2.786 2.25 1.127-.047 1.548-.723 2.91-.723 1.347 0 1.742.723 2.918.696 1.21-.02 1.972-1.088 2.699-2.181a8.975 8.975 0 001.234-2.527 3.908 3.908 0 01-2.373-3.594zm-2.285-6.826A3.873 3.873 0 0013.685 0a4.25 4.25 0 00-2.714 1.352 3.69 3.69 0 00-.968 2.739 3.523 3.523 0 002.739-1.247z" fill="#000"></path></g></svg>
                        Sign up via Apple</button>
                </div>                              
                <div>
                    <button className={styles.HomeSamesignUp_mainContainer_via_email}>
                    <svg className={styles.HomeSamesignUp_mainContainer_svg} viewBox="0 0 512 512"><path fill="#2C1338" d="M0 76v360h512V76H0zm456.953 30L256 281.104 55.047 106h401.906zM30 123.967l151.624 132.12L30 388.058V123.967zM55.081 406l149.378-130.016L256 320.896l51.542-44.912L456.919 406H55.081zM482 388.059L330.376 256.087 482 123.967v264.092z"></path></svg>
                        or sign up via email
                    </button>
                </div>
                <div className={styles.HomeSamesignUp_mainContaine_description}>
                    <p>By signing up, you agree to our terms of service, privacy policy and to 
                        receiving marketing communication from Toggl Track. You can opt out anytime.</p>
                </div>
            </div>
        </div>
            <div>
                <div className={styles.HomeSamesignUp_childContainer2}>
                    <h3>Prefer a product demo instead?</h3>
                    <p>Request a 30-minute personalized demo to see how Toggl Track can meet your time tracking goals</p>
                    <button>Book a demo</button>
                </div>
            </div>
    </div>    
        </>

  )
}

export default HomeSameSignUp