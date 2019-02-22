import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    
    // FOLLOWING IS A MUST FOR FLEX FIXED FOOTER TO WORK
    height: 100%; 
  }  
  html {
    scroll-behavior: smooth;
    @media screen and (max-width: 991px) {
    	margin-top: 65px;
    }
  }
  body {

    // H1 SIZE FIX FOR MOBILE DEVICES
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 2rem !important;
      }
    }
    
    // FOR A BOOTSTRAP BUGFIX
    line-height: 0;
    
    // FOR REMOVING ROUNDED CORNERS GLOBALLY 
    input, button {
      border-radius: 0px !important;
    }

    // SECTION BORDER LEFT
    .section-container {
      border-left: 1px solid #e3e3e3;
    }

    // DESKTOP SUBNAV STYLES
    
    @media (min-width: 992px) {
      .modal {
        left: 310px !important;
      }
      .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 310px !important;
        z-index: 1040;
        background-color: #000;
      }
    }
    // ACTIVE LINK ARROW CLASS
    .nav-item .active-nav-item {
      &:before {
        content: '\f04b';
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        text-decoration: inherit;
        color: dodgerblue;
        margin-left: -1.25rem;
        padding-right: .5rem;
    }
  }



  #__next {
    // FOR SIDE BAR NAV TO WORK
    @media screen and (min-width: 992px) {

      // MUST FOR FIXED FOOTER
      height: 100% !important; 
      
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }
  }
  
  #main-content-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    // border-left: 1px solid #e3e3e3;

    // MUST FOR THE SITE TO HAVE FULL SCREEN WIDTH
    flex-grow: 1; 
  }

  main {
    // MUST FOR FIXED FOOTER
    flex-grow: 1; 
	}

	main,
	footer {
		flex-shrink: 0;
  }

	

  
  h1, h2, h3, h4, h5, h6 {
    //BOOTSTRAP 4 BUGFIX
    margin-bottom: 0; 
    padding-bottom: 1rem;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

// NAV BAR STYLES [DESKTOP NAV]

  .navbar-light .navbar-nav .nav-link {
    color: grey;
  }

  #main-navigation {
    position: relative;
    width: 310px;

    .navbar {
      position: fixed;
      top: 0px;
    }
    .desktop-nav-divider {
      position: fixed;
      top: 400px;
      width: 307px;
      z-index: -1;
    }
    .nav-contact-box {
      position: fixed;
      top: 410px;
      padding-left: 3rem;

      .active {
        color: dodgerblue !important;
      }
      
      .lang-links {
        margin-top: 1.75rem;

        a {
          padding-right: 1rem;
        }
      }
      .text {
        margin-top: 3rem;
  
        .address {
          margin-top: 1rem;
        }
      }
      .buttons {
        margin-top: 1rem;
        .btn {
          margin-bottom: .5rem;
          width: 150px;
          background-color: transparent;
          color: #A8A8A8;
          font-weight: 300;
          border-radius: 0;
        }
        .btn.active {
          border: 1px solid dodgerblue;
        }
      }
    }

  }

  

// HOME PAGE STYLES

  .home-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }

  .home-video-section {
    

    .home-video-block {
      @media screen and (min-width: 1600px) {
        padding-top: 8rem !important;
        padding-bottom: 8rem !important;
      }
    }
    .home-video-text-block {
      @media screen and (min-width: 1700px) {
        padding: 4rem !important;
      }
    }
  }

  .home-partners-section {
    

    .headline-block {
      @media screen and (min-width: 700px) {
        padding: 0 5rem;
      }
      @media screen and (min-width: 1300px) {
        padding: 0 12rem;
      }
      @media screen and (min-width: 1600px) {
        padding: 0 20rem;
      }
      @media screen and (min-width: 1800px) {
        padding: 0 25rem;
      }
    }
    img {
      width: 95px !important;
    }
  }

  .home-subscription-section {
    
    
    form {
      @media screen and (min-width: 350px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
        }
      }
      @media (min-width: 481px) and (max-width: 575px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
          margin-top: -.5rem;
        }
      }
      @media (min-width: 769px) and (max-width: 1254px) {
        .submit-btn {
          margin-top: .5rem;
        }
      }
    }
  }


// PRODUCT PAGES STYLES

  .product-hero {

    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }

  // DATA INTEGRATION PAGE
  .data-int-clean-data-section {
    // border: 1px solid hotpink;
    
    @media (max-width: 768px) {
      background-position: 25% 100%; 
      .text-box {
        padding: 1rem;
      }
    }
  }

  // FIELD EVALUATION PAGE

  // FIELD DEVELOPMENT PAGE
  .field-dev-physics-section {
    .table-box {
      text-align: center;
      
      @media (max-width: 600px) {
        padding: 0rem;
       
        th {
          padding: 0;
          font-size: .8rem !important;
        }
        td {
          padding: 0;
          font-size: .8rem !important;
        }
      }

      table {
        th {
          padding: 1.5rem !important;
          background: dodgerblue;
          color: white;
          font-weight: 300 !important;
          font-size: 1.2rem;
        }
        tr:first-child {
            td {
              color: dodgerblue !important;
            }
        }
        td {
          padding: 1.5rem !important;
          background: white;
          font-size: 1.2rem;
          color: silver;  
        }
        
      }
    } 
    
    

  }


// ABOUT PAGE STYLES  

  .about-hero-section {
    

    .about-hero-text {
      @media (min-width: 1351px) and (max-width: 1550px) {
        padding: 1rem;
      }
      @media (max-width: 400px) {
        padding: 1rem;
      }
    }

    .about-hero-slider {
      .carousel {
        .slide {
          background: white;
        }
        .control-dots {
          margin-right: .5rem;
          padding: .5rem;
          .dot {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }

  }

  .about-team-section {

    img {
      width: 150px !important;
    }
    .about-icon-holder {
      img.about-icon {
        width: 60px !important;
  
        @media (max-width: 1398px) {
          width: 50px !important;
          padding: 0 !important;
        }
  
        @media (max-width: 1248px) {
          width: 45px !important;
          padding: 0 !important;
        }
  
        @media (max-width: 1173px) {
          width: 40px !important;
          padding: 0 !important;
        }
      }
    }
    .member {
        min-width: 165px !important;
        margin: 0 !important;
      .text {
        min-height: 130px;
      }
    }

    @media screen and (min-width: 501px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 769px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 1201px) {
      .member {
        .text {
          min-height: 125px;
        }
      }
    }
  } //team-members ends

  .about-join-us-section {
    
    
    form {
      .file-input {
        border: 1px solid red;
        padding: 1rem;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .file-input-label {
        padding: .5rem 2rem;
        border: 1px solid lightgray;
      }
      .textarea-input {
        width: 99%
        height: 150px;
        background-color: lightgray;  
      }
      .email-input {
        width: 99%;
        margin-right: 10px;  
        background-color: lightgray;  

        @media (min-width: 1200px) {
          float: left !important;
          width: 75%;
        }
      }
      .submit-btn {
        width: 99%;

        @media (min-width: 1200px) {
          width: 22%;
          float: left;
          margin-top: -1rem;
        }
      }
    }
  }


// MEDIA PAGE STYLES
  
  .media-hero-section {
    @media (max-width: 759px) {
     h1 {
       padding-left: 1.8rem;
     }
    }
  
  }

  .media-posts-section {
  }
  
  .media-pagination {
    display: flex;
    justify-content: center;

    // .page-numbers {
    //   padding: 1rem 1rem 0 1rem;
    // }
  }

// FOOTER STYLES

  .footer-content {

    ul {
      list-style-type: none;
      padding: 0 !important;
    }
    .social-block {
      margin-top: 4.7rem;
    }

    @media screen and (max-width: 450px) {
      text-align: center;
      .social-icons {
        justify-content: center;
      }
    }
    @media screen and (max-width: 768px) {
      .footer-block {
        padding-top: 4rem;
      }
      .social-block {
        margin-top: 0rem;
      }
    }
  }

// OTHER COMPONENTS NOT SPECIFIC TO A PAGE  

  .img-caption {
    margin-left: .5rem;
    margin-top: -.5rem;
    font-size: .8rem;
    font-weight: 600;
  }
  .related-media {
    

    .headline {
      padding-bottom: 0;
    }
    .date {
      padding-top: 0;
    }
  }
  .article-single {
    
    .headline {
      padding-bottom: 0;
    }
    .date {
      padding-top: 0;
      color: lightgray;
    }
  }

  // GENERAL SUBSCRIPTION FORM

  .general-subscription-section {
    
    input {
      background-color: lightgray;  
    }
    form {
      @media screen and (min-width: 350px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
        }
      }
      @media (min-width: 481px) and (max-width: 575px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
          margin-top: -.5rem;
        }
      }
      @media (min-width: 769px) and (max-width: 1254px) {
        .submit-btn {
          margin-top: .5rem;
        }
      }
    }
  }

  // MORE INFO FORM SECTION  

  .more-info-form-section {

    form {
      .file-input {
        border: 1px solid red;
        padding: 1rem;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
     
      .textarea-input {
        width: 99%
        height: 150px;
        background-color: lightgray;  
      }
      .email-input {
        width: 99%;
        margin-right: 10px;  
        background-color: lightgray;  

        @media (min-width: 1200px) {
          float: left !important;
          width: 75%;
        }
      }
      .submit-btn {
        width: 99%;

        @media (min-width: 1200px) {
          width: 22%;
          float: left;
          margin-top: -1rem;
        }
      }
    }
  }

  // BORDER BOX SECTION

  .border-box-section {
    padding-bottom: 6rem;

    @media (max-width: 1199px) {
      border: 10px solid #E9F8FD;
      margin-bottom: 4rem;
    }

    .img-block {
      border-top: 10px solid #E9F8FD;
      border-left: 10px solid #E9F8FD;
      border-bottom: 10px solid #E9F8FD;

      @media (min-width: 1200px) {
        img {
          margin-left: -12rem;
        }
       }

    }

    .txt-block {
      border-top: 10px solid #E9F8FD;
      border-right: 10px solid #E9F8FD;
      border-bottom: 10px solid #E9F8FD;

    }

    @media (max-width: 1199px) {
      .img-block {
        border-top: 0px solid #E9F8FD;
        border-left: 0px solid #E9F8FD;
        border-bottom: 0px solid #E9F8FD;
  
        img {
          width: 100%;
        }
      }
  
      .txt-block {
        border-top: 0px solid #E9F8FD;
        border-right: 0px solid #E9F8FD;
        border-bottom: 0px solid #E9F8FD;
  
      }
    }

    @media (max-width: 500px) {
        .text-box {
          padding: 1rem !important;
        }
      }
    }

  } // end of BORDER BOX

  // BORDER BOX REVERSE SECTION

  .border-box-section-reverse {
    padding-bottom: 6rem;

    @media (max-width: 1199px) {
      border: 10px solid #E9F8FD;
      margin-bottom: 4rem;
    }

    .img-block {
      border-top: 10px solid #E9F8FD;
      border-right: 10px solid #E9F8FD;
      border-bottom: 10px solid #E9F8FD;

      @media (min-width: 1200px) {
        img {
          margin-right: -12rem;
        }
       }

    }

    .txt-block {
      border-top: 10px solid #E9F8FD;
      border-left: 10px solid #E9F8FD;
      border-bottom: 10px solid #E9F8FD;

    }

    @media (max-width: 1199px) {
      .img-block {
        border-top: 0px solid #E9F8FD;
        border-right: 0px solid #E9F8FD;
        border-bottom: 0px solid #E9F8FD;
  
        img {
          width: 100%;
        }
      }
  
      .txt-block {
        border-top: 0px solid #E9F8FD;
        border-left: 0px solid #E9F8FD;
        border-bottom: 0px solid #E9F8FD;
  
      }
    }

    @media (max-width: 500px) {
        .text-box {
          padding: 1rem !important;
        }
      }
    }

  } // end of BORDER BOX REVERSE

  // BLUE TEXT BOX SECTION

  .blue-box-section {

    .bluebox {
      width: 55%;

      img {
        display: none;
      }
      .title {
        // padding-right: 10rem;
        // border: 1px solid red;
      }

      @media (min-width: 1200px) {
          margin-right: -7rem;
      }

    }

    @media (max-width: 1365px) {
      .bg-block {
        width: 90%;
      }  
      .bluebox {
        width: 75%;
        margin-top: 5rem;
        margin-bottom: 5rem;
        margin-right: -5rem;
      }  
    }

    @media (max-width: 550px) {
      padding: 0rem;

      .bg-block {
        width: 100%;
        background: none;
      }  
      .bluebox {
        width: 100%;
        margin-top: 0rem;
        margin-bottom: 0rem;
        margin-right: 0rem;
        padding: 0;

        h4, h6 {
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 2rem;
        }
      }  
      img {
        display: block !important;
        padding: 1rem 0 0 0 !important;
        width: 100%;
      }

    }
  }

  // TRIPPLE BLUE BOX SECTION

  .triple-blue-box-section {
    
    .page-link {
      background-color: transparent;
      transition: background-color 0.5s ease;
      padding: 0 !important;
      margin: 0 !important;

      &:hover {
        background-color: #1873cc;
      }
    }
    .learn-more {
      margin-bottom: 2rem;
      h6 {
        text-decoration: underline;
      }
    }
    @media (max-width: 1206px) {
      
      .title {
        min-height: 3rem;
      }
      .description {
        min-height: 5rem;
      }
    }
    
  }
`;

export default GlobalStyle;
