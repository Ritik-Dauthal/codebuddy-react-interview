import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    emailId: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .matches(/.*[A-Z].*[A-Z].*/, "Must contain at least 2 uppercase letters")
        .matches(/.*[a-z].*[a-z].*/, "Must contain at least 2 lowercase letters")
        .matches(/.*[0-9].*[0-9].*/, "Must contain at least 2 numbers")
        .matches(/.*[!@#$%^&*()].*[!@#$%^&*()].*/, "Must contain at least 2 special characters")
        .required("Required"),
});

const Form1 = ({ onSubmit, initialValues, onSaveAndNext }) => {
    const { handleSubmit, handleBlur, handleChange, values, touched, errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const handleSaveAndNext = () => {
        handleSubmit();
        onSaveAndNext(values);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[90%] space-y-2 rounded-lg bg-white p-8 shadow-md md:w-1/2"
        >
            <div>
                <label htmlFor="emailId" className="block text-sm font-medium text-gray-700">
                    Email ID
                </label>
                <input
                    type="email"
                    name="emailId"
                    id="emailId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailId}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.emailId && errors.emailId ? (
                    <div className="mt-1 text-sm text-red-600">{errors.emailId}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.password && errors.password ? (
                    <div className="mt-1 text-sm text-red-600">{errors.password}</div>
                ) : null}
            </div>
            <div className="mt-6 flex flex-col justify-between sm:flex-row">
                <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded bg-gray-300 px-4 py-2 text-gray-500"
                >
                    Back
                </button>
                <div className="mt-2 flex flex-col space-y-2 sm:mt-0 sm:flex-row sm:space-y-0">
                    <button
                        type="button"
                        onClick={handleSaveAndNext}
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 sm:mr-2"
                    >
                        Save and Next
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form1;
