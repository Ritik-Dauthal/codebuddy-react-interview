import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    countryCode: Yup.string().oneOf(["+91", "+1"], "Invalid country code").required("Required"),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Must be a 10-digit number")
        .required("Required"),
    acceptTermsAndCondition: Yup.boolean()
        .oneOf([true], "Must accept terms and conditions")
        .required("Required"),
});

const Form3 = ({ onSubmit, initialValues, handleBack }) => {
    const { handleBlur, handleChange, handleSubmit, touched, values, errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[90%] space-y-2 rounded-lg bg-white p-8 shadow-md md:w-1/2"
        >
            <div>
                <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">
                    Country Code
                </label>
                <select
                    name="countryCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.countryCode}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">Select Country Code</option>
                    <option value="+91">India (+91)</option>
                    <option value="+1">America (+1)</option>
                </select>
                {touched.countryCode && errors.countryCode ? (
                    <div className="mt-1 text-sm text-red-600">{errors.countryCode}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {touched.phoneNumber && errors.phoneNumber ? (
                    <div className="mt-1 text-sm text-red-600">{errors.phoneNumber}</div>
                ) : null}
            </div>
            <div>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        name="acceptTermsAndCondition"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.acceptTermsAndCondition}
                        className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Accept Terms and Conditions</span>
                </label>
                {touched.acceptTermsAndCondition && errors.acceptTermsAndCondition ? (
                    <div className="mt-1 text-sm text-red-600">{errors.acceptTermsAndCondition}</div>
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
                        disabled
                        className="cursor-not-allowed rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 sm:mr-2"
                    >
                        Save and Next
                    </button>
                    <button
                        type="submit"
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form3;
