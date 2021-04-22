import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './addwaitlist.scss';

const AddWaitlist = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [message, setMessage] = useState('');
    const onSubmit = (data) => {
        console.log(data);
        axios.post('https://api-dot-genial-caster-293508.et.r.appspot.com/emails/add', data)
        .then(res => console.log(res.data));
        setMessage("Email submitted!");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="waitlist">
            <div className="input-group-lg">
                <section>
                <input 
                    type="text"
                    name="email"
                    className="form-control" 
                    placeholder="john.doe@edias.space" 
                    aria-describedby="basic-addon1"
                    aria-invalid={errors.name ? "true" : "false"} 
                    {...register('email', { 
                        required: true,
                        maxLength: 320, 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i
                    }})}
                />
                <div className="waitlist__message">
                    <p className="submit-alert">{message}</p>
                    {errors.email && errors.email.type === "required" && (
                        <p className="email-alert" role="alert">Please type in your email address.</p>
                    )}
                    {errors.email && errors.email.type === "maxLength" && (
                        <p className="email-alert" role="alert">Max length exceeded.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="email-alert" role="alert">Please enter a valid email address.</p>
                    )}
                </div>
                </section>
                <section>
                <button type="submit" className="btn btn-primary">Add to waitlist</button>
                </section>
            </div>
        </form>
    );
}

export default AddWaitlist;