import React from "react";
import "./NewsLetter.css";
export default function NewsLetter() {
  return (
    <div className="container mx-auto flex justify-center mt-20">
      <div className="subscribe-wrap popup-content ">
        <h4 className="heading-18">
          Sign up to get notified first about new Startupathon projects and
          receive updates through our newsletter.
        </h4>
        <div className="form-block-3 w-form">
          <form
            method="post"
            fs-formsubmit-element="form"
            name="wf-form-Newsletters-Subscription"
            data-name="Newsletters Subscription"
            action="https://hook.eu2.make.com/a3z5hntfgfufx36ug8oqo0o82cj96i7s"
            id="wf-form-Newsletters-Subscription"
            fs-formsubmit-enhance="true"
            className="form-4"
            data-wf-page-id="669b3dcf2bcb988e7f93c08f"
            data-wf-element-id="12d14682-c103-2a9d-f9ad-96f691a7b94b"
            aria-label="Newsletters Subscription"
          >
            <input
              className="text-field w-input newsletter-input"
              maxlength="256"
              name="email-2"
              data-name="Email 2"
              placeholder="enter your email ID "
              type="email"
              id="mail-id-to-subscribe"
              required=""
              data-has-listeners="true"
            />
            <input
              type="submit"
              data-wait="Please wait..."
              className="submit-button w-button"
              value="Subscribe "
              data-has-listeners="true"
            />
          </form>
          <div
            className="success-message-3 w-form-done"
            tabindex="-1"
            role="region"
            aria-label="Newsletters Subscription success"
          >
            <div className="text-block-43">
              Thank you! <br />
              We'll notify you as soon as a new Startupathon challenge is added.
            </div>
          </div>
          <div
            className="error-message-2 w-form-fail"
            tabindex="-1"
            role="region"
            aria-label="Newsletters Subscription failure"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
