import React from 'react';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';

import contactIcon from '../images/contact_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
import facebookIcon from '../images/fb_icon.png';
import twitterIcon from '../images/twiter_icon.png';
import roxanaPic from '../images/roxana_picture.jpg';


function ContactPage() {

    const { register, handleSubmit, formState: {errors} } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });
    const ServiceID = 'service_jcpr17p';
    const TemplateID = 'template_4simdo5';
    const UserID = 'user_EFpF63aCYyJ5x2R8CpnDJ';

    const onSubmitData = (data) => {
        //console.log("Send data: ", data);
        //console.log("Stringify data: ",JSON.stringify(data));
        send(
            ServiceID,
            TemplateID,
            data,
            UserID    
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            handleSubmitBtn();
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };
    // console.log('Errors: ',errors);

    const handleSubmitBtn = () => {
        const submitButton = document.querySelector(".submitButton");
        const submitButtonText = document.querySelector("#buttonText");
    
        //event.preventDefault();  
        
        submitButton.onclick = () => {
            submitButtonText.innerHTML = "Thanks";
            submitButton.classList.add("active");
        };
    }

        return (
            <div className="ContactPage">
                <section>
                    <article>
                    <img src={contactIcon} alt="Contact" title="Contact" width="50" height="50" />
                    <h1>Contact</h1>
                    </article>
                    <article>
                    <div className='contact_container'>
                        <div className='contact_text'>
                            <h3>Roxana Scraba</h3>
                            <p> Stockholm, Sweeden<br />
                            roxana.scraba@gmail.com</p>

                            <div className='formContainer'>
                            <form className='myForm' onSubmit={handleSubmit(onSubmitData)}>

                                <label htmlFor="fname">First Name</label>
                                <input 
                                    type="text" 
                                    id="fname" 
                                    // name="firstname"  //add register
                                    placeholder="First name"
                                    {...register("firstname", { 
                                        required: true, 
                                        minLength: {
                                            value:2, 
                                            message: "Min lenght is 2" 
                                        },
                                        maxLength: {
                                            value:80, 
                                            message: "Max lenght is 80" 
                                        } })} 
                                />
                                <div className='errorText'>
                                    {errors.firstname?.type === 'required' && "First name is required"}
                                    {errors.subject?.type === 'minLength' && "First name should be at least 2 chars long."}
                                    {errors.subject?.type === 'maxLength' && "First name should be max 80 chars long."}
                                </div>

                                <label htmlFor="lname">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lname" 
                                    // name="lastname" 
                                    placeholder="Last name"
                                    {...register("lastname", { 
                                        required: true, 
                                        minLength: {
                                            value:2,
                                            message: 'Max lenght is 2'
                                        },
                                        maxLength: {
                                            value:100,
                                            message: 'Max lenght is 100'
                                        } })}
                                />
                                <div className='errorText'>
                                    {errors.lastname?.type === 'required' && "Last name is required"}
                                    {errors.subject?.type === 'minLength' && "Last name should be at least 2 chars long."}
                                    {errors.subject?.type === 'maxLength' && "Last name should be max 100 chars long."}
                                </div>

                                <label htmlFor="email">Enter your email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    // name="email" 
                                    placeholder="Your email"
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                      })}
                                />
                                <div className='errorText'>
                                    {errors.email?.type === 'required' && "Email is required"}
                                </div>

                                <label htmlFor="subject">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    // name="subject" 
                                    placeholder="Subject" 
                                    {...register("subject", { 
                                        required: true, 
                                        minLength: {
                                            value:4, 
                                            message: "Min lenght is 4" 
                                        },
                                        maxLength: {
                                            value:200, 
                                            message: "Max lenght is 200" 
                                        }})}
                                />
                                <div className='errorText'>
                                    {errors.subject?.type === 'required' && "Subject is required"}
                                    {errors.subject?.type === 'minLength' && "Subject should be at least 4 chars long."}
                                    {errors.subject?.type === 'maxLength' && "Subject should be max 200 chars long."}
                                </div>

                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    // name="message"  
                                    placeholder="Your message"
                                    style={{height:"200px"}}
                                    {...register("message", { 
                                        required: true, 
                                        minLength: {
                                            value:4, 
                                            message:"min lenght is 4"
                                        },
                                        maxLength: {
                                            value:400, 
                                            message:"max lenght is 400"
                                        }})}
                                />
                                <div className='errorText'>
                                    {errors.message?.type === 'required' && "Message is required"}
                                    {errors.subject?.type === 'minLength' && "Message should be at least 4 chars long."}
                                    {errors.subject?.type === 'maxLength' && "Message should be max 400 chars long."}
                                </div>

                                <button type="Submit" className="submitButton" >
                                    <p id="buttonText">Submit</p>
                                    <div className="check-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                            <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                        </svg>
                                    </div>
                                </button>
                            </form>
                         </div>
                            
                        </div>
                        <div className='contact_img'>
                            <img src={roxanaPic} alt="Roxana Scraba" title="Roxana Scraba" width="375" height="380" />
                            <div className='follow'>
                                <p className='follow_me'><a href="http://ro.linkedin.com/in/roxanascraba" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" title="LinkedIn" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on LinkedIn</span></p>
                                <p className='follow_me'><a href="http://www.facebook.com/roxana.scraba" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="Facebook" title="Facebook" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on Facebook</span></p>
                                <p className='follow_me'><a href="http://www.twitter.com/roxanascraba" target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter" title="Twitter" width="30" height="30" /></a>
                                <span className="gray_text">Follow me on Twitter</span></p>
                            </div>
                        </div>
                    </div>                                        
                    </article>
                </section>
            </div>
        );
    }
 
export default ContactPage;