import React, { useEffect, useState } from "react";
import Sigupimg from "../assets/signup.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

<script src="https://cdn.tailwindcss.com"></script>

function Signup() {
   
    // creating a funcition event validation event for confirm password
   
    // I'm creating a function to register a user using the api
    // I'll make the const t to translate the page in arabic
    const {t}=useTranslation();

    const url="https://reqres.in/api/register";
    const [data,setdata]=useState({
        email:"",
        password:"",
        username:"",
        Address:"",
        first_name: "",
        last_name:"",
        phone:"",
        city:"",
        DOB:"",
        Gender:"",
        confirm_password:""

    });
    function submitt(e){
        e.preventDefault()
        if(data.password!=data.confirm_password){
            alert("The password and confirm password does not match")
           
          
        }
        const regex= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test(data.email)===false){
            alert("your email format is not correct");
        }
        
       
        else{
            axios.post(url,{
                email:data.email,
                password:data.password,
                username:data.username,
                address:data.address,
                first_name:data.first_name,
                last_name:data.last_name,
                country_code:data.country_code,
                city_id:data.city_id,
                city:data.city,
                DOB:data.DOB,
                Gender:data.Gender,
                confirm_password:data.confirm_password
            })
            .then((response)=>{
                console.log(response.data)
                alert ("success")
            }).catch((error)=>{
                alert("error",error.response)
            })

        }
       
    }
   
    
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata)
    }
    // funciton to change the language from using the radio button
    function handle_ar(){
        i18next.changeLanguage('ar');
    }
    function handle_en(){
        i18next.changeLanguage("en");
    }
    // End of the functions to handle the language change
    const languages=[{
        code:"en",
        name:"English",
        coutry_code:"Usa"
    },
    {
        name:"العربيه",
        code:"ar",
        coutry_code:"Sa",
        dir:"rtl"
    }
]
    const current_language_code=cookies.get('i18next')|| 'en';
    const current_language=languages.find(l=>l.code==current_language_code);
    // Now I'lll check if the current language is arabic strat the page from rtl by using the useEffect
    useEffect(()=>{
     document.body.dir=current_language.dir|| "ltr";
    },[current_language])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
           

            <div className="hidden sm:block relative">
                <img className="w-full h-full object-cover opacity-32" src={Sigupimg} alt="no iimage" />
            </div>
            <div id="form"onSubmit={(e)=>submitt(e)} className="max-w-[550px]  w-full mx-auto bg-white p-4 relative">
                <div className="absolute mt-4 top-0 right-0 w-32">
                    <label className="  px-2 text-blue-700">Ar</label>
                    <input className="    " type="radio"value="Ar"name="lang_change"onChange={handle_ar}/>
                    <label className="  px-2  text-blue-700">En</label>
                    <input className="   "type="radio"value="en"name="lang_change"onChange={handle_en}/>
             </div>

                
                <form action="">
                    <h2 className="text-blue-700 text-3xl font-semibold my-4">{t('Register')}</h2>

                    <div id="fullName" className="flex flex-row">

                        <div id="firstName" className="w-1/2 mr-1">
                            <label htmlFor="fname" className="text-sm">{t('first_name')}</label><br />
                            <input type="text" name="first_name" id="first_name"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                        <div id="lastName" className="w-1/2 mr-1">
                            <label htmlFor="lname" className="text-sm">{t('last_name')}</label><br />
                            <input type="text" name="last_name" id="last_name"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>
                    </div>
                    <div id="user_email" className="flex flex-row">

                        <div id="username" className="w-1/2 mr-1">
                            <label htmlFor="username" className="text-sm">{t('username')}</label><br />
                            <input type="text" name="username" id="username"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                        <div id="email" className="w-1/2 mr-1">
                            <label htmlFor="email" className="text-sm">{t('Email')}</label><br />
                            <input type="text" name="email" id="email"onChange={(e)=>handle(e)} 
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                                
                        </div>

                    </div>
                    <div id="phone_city" className="flex flex-row">

                        <div id="phone" className="w-1/2 mr-1">
                            <label htmlFor="phone" className="text-sm">{t('phone')}</label><br />
                            <input type="number" name="country_code" id="country_code"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                        <div id="city" className="w-1/2 mr-1">
                            <label htmlFor="city" className="text-sm">{t('city')}</label><br />
                            <input type="number" name="city_id" id="city_id"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>
                    </div>
                    <div id="profession_DOB" className="flex flex-row">

                        <div id="profession" className="w-1/2 mr-1">
                            <label htmlFor="profession" className="text-sm">{t('profession')}</label><br />
                            <input type="text" name="profession" id="profession"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                        <div id="DOB" className="w-1/2 mr-1">
                            <label htmlFor="DOB" className="text-sm">{t('Dob')}</label><br />
                            <input type="date" name="DOB" id="DOB"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                    </div>
                    <div id="password_confirm_password" className="flex flex-row">

                        <div id="password" className="w-1/2 mr-1">
                            <label htmlFor="fname" className="text-sm">{t('password')}</label><br />
                            <input type="text" name="password" id="password"onChange={(e)=>handle(e)} 
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                        <div id="confirm_password" className="w-1/2 mr-1">
                            <label htmlFor="confirm_password" className="text-sm">{t('confirm_password')}</label><br />
                            <input type="text" name="confirm_password" id="confirm_password"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>
                    </div>
                    <div id="address_city" className="flex flex-row">
                    <div id="password" className="w-1/2 mr-1">
                            <label htmlFor="fname" className="text-sm">{t('address')}</label><br />
                            <input type="text" name="address" id="address"onChange={(e)=>handle(e)}
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>
                        <div id="confirm_password" className="w-1/2 mr-1">
                            <label htmlFor="confirm_password" className="text-sm">{t('city')}</label><br />
                            <input type="text" name="city" id="city"onChange={(e)=>handle(e)} 
                                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required />
                        </div>

                    </div>
                    <div id="gender" className="text-sm mb-2">
                        <p className="mt-2">{t('Gender')}</p>
                        <input type="radio" name="gender" id="male" className="text-sm mx-1"onChange={(e)=>handle(e)} checked /><label htmlFor="male">{t('Male')}</label>
                        <input type="radio" name="gender" id="female" className="text-sm mx-1"onChange={(e)=>handle(e)} required /><label htmlFor="female">{t('Female')}</label>
                        <input type="radio" name="gender" id="other" className="text-sm mx-1"onChange={(e)=>handle(e)} required /><label htmlFor="other">{t('other')}</label>
                    </div>

                    <input  type="submit" name="signup" id="signUp" value={t('register_now')}
                        className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm" /><br />
                    <p className="text-xs my-2">{t('Already_account')}? <Link to="/login" className="text-blue-600">{t('login')}</Link></p>
                   
                </form>
               
            </div>
        </div>




    );

}
export default Signup;