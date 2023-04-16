import { Formik } from 'formik'
import * as Yup from "yup"
import React, { useState } from 'react'
import axios from '@/helpers/httpHelper'

const Footer = () => {

    const [success, setSuccess] = useState(false)

    const handleSubscribe = (values, resetForm, setSubmitting, setErrors) => {
        axios.post("/subscriber/create", { email: values.email })
            .then(res => { resetForm(); setSuccess(true) })
            .catch(err => {
                setErrors({ email: err?.response?.data?.error })
            })
            .finally(() => setSubmitting(false))
    }

    return (
        <footer className="bg-[#272727]">
            <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-10 py-2.5">
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-widest ">CONTACT US</h2>
                        <ul className="text-gray-300 font-medium text-base">
                            <li className="mb-4">
                                <h3>Email :</h3>
                                <a href="#" className=" hover:underline">hello@builtfromscratch.com</a>
                            </li>
                            <li className="mb-4">
                                <h3>Contact Number :</h3>
                                <a href="#" className=" hover:underline">1234567890</a>
                            </li>
                            <li className="mb-4">
                                <h3>Address :</h3>
                                <a href="#" className=" hover:underline">Some where on earth,<br /> Mumbai, India</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-widest ">LINKS</h2>
                        <ul className="text-gray-300 font-medium text-base">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Blogs</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Videos</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-widest">SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <Formik
                            initialValues={{ email: "" }}
                            validationSchema={Yup.object({
                                email: Yup.string().email("Not a valid Email.").required("This is required.")
                            })}
                            onSubmit={(values, { resetForm, setSubmitting, setErrors }) => { handleSubscribe(values, resetForm, setSubmitting, setErrors) }}
                        >
                            {({ handleChange, handleSubmit, values, isSubmitting, touched, errors }) => {
                                return (
                                    <>
                                        <input
                                            id='email'
                                            name='email'
                                            type="email"
                                            placeholder='hello@builtfromscratch.com'
                                            value={values.email}
                                            onChange={handleChange}
                                            className='border-2 border-secondary bg-transparent w-full lg:w-2/3 rounded-none text-white p-2 focus:border-white focus:outline-0'
                                        />
                                        {
                                            success && !touched.email && !errors.email && values.email.length === 0 ? (
                                                <p className='text-sm text-green-400 mt-1'>Successfully Subscribed to the Newsletter</p>
                                            ) : null
                                        }
                                        {touched.email && errors.email ? (
                                            <p className='text-sm text-red-400 mt-1'>{errors.email}</p>
                                        ) : null}
                                        <button
                                            type='submit'
                                            onClick={handleSubmit}
                                            className={`w-2/3 lg:w-44 my-6 text-whitetext-2xl border-2 border-secondary p-2 text-white uppercase hover:border-white ${isSubmitting ? "opacity-50" : "opacity-100"} `}
                                            disabled={isSubmitting}>
                                            SUBSCRIBE
                                        </button>
                                    </>)
                            }}</Formik>
                    </div >
                </div>
                <div className="px-4 py-6 pt-0 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-200 sm:text-center">© 2023 <a href="">Built From Scratch</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer