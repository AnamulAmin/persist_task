import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="container-large">
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div className="footer-content-left">
              <div className="margin-bottom margin-small">
                <a href="/" className="footer-logo-link w-inline-block">
                  <img
                    src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png"
                    loading="lazy"
                    alt="persist ventures logo"
                    className="max-wdith-3"
                  />
                </a>
              </div>
              <div className="footer-description">
                <div className="footer-text">
                  <p className="text-size-regular">
                    We partner with entrepreneurs and businesses to help scale
                    and grow their ideas. With a diverse team skilled in every
                    sector there is no business we can not help get a leg up.
                  </p>
                </div>
                <div className="footer-social-grid">
                  <a
                    aria-label="Twitter link"
                    href="https://www.instagram.com/persistventures/"
                    target="_blank"
                    className="footer-social-link w-inline-block"
                  >
                    <div className="icon-1x1-small-2 w-embed">
                      <svg
                        aria-hidden="true"
                        role="img"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                      </svg>
                    </div>
                    <div className="social-media-link-text">
                      <div>instagram link</div>
                    </div>
                  </a>
                  <a
                    aria-label="Linkedin link"
                    href="https://www.linkedin.com/company/persist-ventures/"
                    target="_blank"
                    className="footer-social-link w-inline-block"
                  >
                    <div className="icon-1x1-small-2 w-embed">
                      <svg
                        aria-hidden="true"
                        role="img"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </div>
                    <div className="social-media-link-text">
                      <div>linkedin link</div>
                    </div>
                  </a>
                  <a
                    aria-label="Skype link"
                    href="https://www.youtube.com/@persistventures"
                    target="_blank"
                    className="footer-social-link hide w-inline-block"
                  >
                    <div className="icon-1x1-small-2 yt-logo w-embed">
                      <svg
                        aria-hidden="true"
                        role="img"
                        fill="currentColor"
                        viewBox="-143 145 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                      >
                        <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path>
                        <path d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5 C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-content-right">
              <div className="footer1_links-list">
                <div className="footer1_links-col">
                  <div className="margin-bottom-2 margin-xsmall">
                    <h3 className="heading-small">Quick links</h3>
                  </div>
                  <a href="/" target="_blank" className="footer-link">
                    Home
                  </a>
                  <a
                    href="/investor-application"
                    target="_blank"
                    className="footer-link"
                  >
                    Investor Application
                  </a>
                  <a
                    href="/apply-for-a-full-time-position"
                    target="_blank"
                    className="footer-link"
                  >
                    Job Application
                  </a>
                  <a
                    href="/apply-to-accelerator"
                    target="_blank"
                    className="footer-link"
                  >
                    Apply To Startup Accelerator
                  </a>
                  <a
                    href="https://get-a-job.persistventures.com/"
                    target="_blank"
                    className="footer-link"
                  >
                    Career Accelerator Program
                  </a>
                  <a href="/our-team" target="_blank" className="footer-link">
                    Our team
                  </a>
                </div>
                <div className="footer1_links-col">
                  <div className="margin-bottom-2 margin-xsmall">
                    <h3 className="heading-small">Legal</h3>
                  </div>
                  <a
                    href="/terms-of-service"
                    target="_blank"
                    className="footer-link"
                  >
                    Terms of service
                  </a>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="footer-link"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="https://dia.wiki"
                    target="_blank"
                    className="footer-link"
                  >
                    Decentralized Intelligence Agency
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="all-rights-reserved">
            <div className="text-size-small">
              {" "}
              All rights reserved © 2025 persistventures.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
