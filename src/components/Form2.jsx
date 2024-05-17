import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
        .min(2)
        .max(50)
        .required("Required"),
    lastName: Yup.string().matches(/^[A-Za-z]*$/, "Only alphabets are allowed"),
    address: Yup.string().min(10, "Must be at least 10 characters long").required("Required"),
});

const Form2 = ({ onSubmit, initialValues, handleBack, onSaveAndNext }) => {
    const { handleSubmit, handleBlur, handleChange, touched, errors, values } = useFormik({
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
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.firstName && errors.firstName ? (
                    <div className="mt-1 text-sm text-red-600">{errors.firstName}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.lastName && errors.lastName ? (
                    <div className="mt-1 text-sm text-red-600">{errors.lastName}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                </label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.address && errors.address ? (
                    <div className="mt-1 text-sm text-red-600">{errors.address}</div>
                ) : null}
            </div>
            <div className="mt-6 flex flex-col justify-between sm:flex-row">
                <button
                    type="button"
                    onClick={handleBack}
                    className="cursor-pointer rounded bg-gray-300 px-4 py-2 text-gray-500"
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

export default Form2;
