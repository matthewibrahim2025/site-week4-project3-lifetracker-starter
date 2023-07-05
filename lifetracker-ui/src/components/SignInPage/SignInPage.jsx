import React from "react";
import "./SignInPage.css"


export default function SignInPage() {
     
    return (

      <div className="signIn-container">

        <h2 class="chakra-heading css-3q8efk">Create an Account</h2>

        <div class="signIn-sect">

            <form>
                
                
                <div class="signIn-contents">

                    <input type="text" placeholder="Email" name="firstname" required />
                    <input type="text" placeholder="Username" name="lastname" required />
                    

                </div>
                
                
            </form>



        </div>

        </div>
  
    )
  }