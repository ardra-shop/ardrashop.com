import React from "react";

const FooterComponent = () => {
  return(
      <div class="p-3 mb-2 bg-dark text-white">
          <div className="container">
              <div className="row">
                  {/*1st column*/}
                  <div className="col">
                    <h3 class="text-warning">About us</h3> 
                    <p class="text-white"> We provide handicraft stuff........ etc etc </p>
                  </div>
                  {/*2nd column */}
                  <div className="col">
                      <h4 class="text-warning">Information</h4> 
                      <ul className="list-unstyled text-white ">
                          <a className="text-white" href="#"> <li> Homepage </li> </a>
                          <a className="text-white" href="#"> <li> Register </li> </a>
                          <a className="text-white" href="#"> <li> Login </li> </a>
                      </ul>
                    </div>
                    {/*3rd Column */}
                 <div className="col">
                     <h4 class="text-warning">  Contact us</h4>
                     <ul className="list-unstyled text-white">
                         <li> 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                            </svg>
                            &nbsp;
                            1234567890 
                         </li> 
                         <li> 
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                            </svg>
                            &nbsp;
                            ardrashop@gmail.com 
                        </li> 
                        <li>
                            <a href="https://instagram.com/ardrashopdotcom?igshid=yq9v34n55f5d" class="instagram text-white"> <i class="bx bxl-instagram"> </i> instagram </a> 
                        </li>
                       
                         

                     </ul>
                </div>
              </div>
              <br/>
              <div class="row text-center">
                  <div class="col-lg-12">
                    <h6 class="text-white"> Subscribe for getting notified regularly &nbsp; <button type="button" class="btn btn-primary" > Subscribe </button> </h6>
                    
                  </div>
                   
              </div>
        </div>

      </div>
  )
}
export default FooterComponent;
