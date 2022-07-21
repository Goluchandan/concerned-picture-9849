import React from "react";

export const SignupTopDescription = () => {
  return (
    <div id="signupTopDescription">
      <p>
        Sign up for a <em>free</em> Toggl Track account
      </p>

      <p>
        All plans come with a free, 30-day trial of Toggl Track Premium—no
        credit card required.
      </p>

      <p>
        Upgrade at the end of the trial or continue using Track for free
        forever.
      </p>

      {/* routing to be put below on "Log in here" */}
      <p>
        Already have an account? <u>Log in here</u>.
      </p>
    </div>
  );
};
