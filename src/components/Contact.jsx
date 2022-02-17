import React from 'react';
import { useForm } from 'react-hook-form';
import contactIcon from '../images/contact_icon.png';
import linkedInIcon from '../images/linkedin_icon.png';
import facebookIcon from '../images/fb_icon.png';
import twitterIcon from '../images/twiter_icon.png';
import roxanaPic from '../images/roxana_picture.jpg';


function ContactPage() {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmitData = (data) => {
        console.log("RESULT", data);
        console.log("Stringify data: ",JSON.stringify(data));
        handleSubmitBtn();
    };
    //console.log('Errors: ',errors);

    const handleSubmitBtn = () => {
        const submitButton = document.querySelector(".submitButton");
        const submitButtonText = document.querySelector("#buttonText");
    
        //event.preventDefault();  
        
        submitButton.onclick = () => {
            submitButtonText.innerHTML = "Thanks";
            submitButton.classList.add("active");
        };
    }
//  class ContactPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             valueFirstName: '',
//             valueLastName: '',
//             valueEmail: '',
//             valueSubject: '',
//             valueMessage: '',
//             isCorrect: true
//         };
//         this.handleInputFNameChange = this.handleInputFNameChange.bind(this);
//         this.handleInputLNameChange = this.handleInputLNameChange.bind(this);
//         this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
//         this.handleInputSubjectChange = this.handleInputSubjectChange.bind(this);
//         this.handleMessageChange = this.handleMessageChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputFNameChange(event) {    
//         this.setState({valueFirstName: event.target.value});  
//     }
//     handleInputLNameChange(event) {
//         this.setState({valueLastName: event.target.value}); 
//     }
//     handleInputEmailChange(event) {
//          this.setState({valueEmail: event.target.value});
//     }
//     handleInputSubjectChange(event) {
//         this.setState({valueSubject: event.target.value});
//     }
//     handleMessageChange(event) {
//         this.setState({valueMessage: event.target.value});
//     }
//     handleSubmit(event) {
//         const submitButton = document.querySelector(".submitButton");
//         const submitButtonText = document.querySelector("#buttonText");
    
//         console.log('Data submitted! state: ', this.state);
//         event.preventDefault();  
      
//         submitButton.onclick = () => {
//           submitButtonText.innerHTML = "Thanks";
//           submitButton.classList.add("active");
//         };
//     }

// render() { 
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
                                    // value={this.state.valueFirstName} 
                                    // onChange={this.handleInputFNameChange} />
                                    {...register("firstname", { required: true, maxLength: 80 })} 
                                />
                                <div className='errorText'>
                                    {errors.firstname?.type === 'required' && "First name is required"}
                                </div>

                                <label htmlFor="lname">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lname" 
                                    // name="lastname" 
                                    placeholder="Last name"
                                    // value={this.state.valueLasttName} 
                                    // onChange={this.handleInputLNameChange} />
                                    {...register("lastname", { required: true, maxLength: 100 })}
                                />
                                <div className='errorText'>
                                    {errors.lastname?.type === 'required' && "Last name is required"}
                                </div>

                                <label htmlFor="email">Enter your email:</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    // name="email" 
                                    placeholder="Your email"
                                    // value={this.state.valueEmail} 
                                    // onChange={this.handleInputEmailChange} />
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
                                    // value={this.state.valueSubject}
                                    // onChange={this.handleInputSubjectChange} />

                                    {...register("subject", { required: true, maxLength: 200 })}
                                />
                                <div className='errorText'>
                                    {errors.subject?.type === 'required' && "Subject is required"}
                                </div>

                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    // name="message"  
                                    placeholder="Your message"
                                    style={{height:"200px"}}
                                    // value={this.state.valueMessage}
                                    // onChange={this.handleMessageChange} ></textarea>
                                    {...register("message", { required: true, maxLength: 400 })}
                                />
                                <div className='errorText'>
                                    {errors.message?.type === 'required' && "Message is required"}
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
//}
 
export default ContactPage;