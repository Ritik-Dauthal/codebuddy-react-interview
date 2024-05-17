import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import FormNavigation from "./FormNavigation";
import { useNavigate } from "react-router-dom";

const StepForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        emailId: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        countryCode: "",
        phoneNumber: "",
        acceptTermsAndCondition: false,
    });

    const handleSaveAndNext = (values) => {
        setFormValues({ ...formValues, ...values });
        const { emailId, password, firstName, address } = values;
        if (step === 1 && emailId !== "" && password !== "") {
            setStep(step + 1);
        }
        if (step === 2 && firstName !== "" && address !== "") {
            setStep(step + 1);
        }
    };

    const handleSaveForm = (values) => {
        setFormValues({ ...formValues, ...values });
    };

    const validateForm = (values) => {
        const requiredFields = [
            "emailId",
            "password",
            "firstName",
            "address",
            "countryCode",
            "phoneNumber",
            "acceptTermsAndCondition",
        ];
        const missingFields = requiredFields.filter((field) => !values[field]);

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
            return false;
        }
        return true;
    };

    const handleSubmitForm = (values) => {
        const updatedValues = { ...formValues, ...values };
        setFormValues(updatedValues);

        if (!validateForm(updatedValues)) {
            return;
        }

        const { acceptTermsAndCondition, ...formData } = updatedValues;

        fetch("https://codebuddy.review/submit", {
            method: "POST",
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Form submitted successfully");
                    setFormValues({
                        emailId: "",
                        password: "",
                        firstName: "",
                        lastName: "",
                        address: "",
                        countryCode: "",
                        phoneNumber: "",
                        acceptTermsAndCondition: false,
                    });
                    navigate("/posts");
                } else {
                    console.log("Form submission failed");
                }
            })
            .catch((error) => {
                console.error("Error occurred", error);
            });
    };

    return (
        <div className="flex flex-col items-center">
            <FormNavigation step={step} setStep={setStep} />
            {step === 1 && (
                <Form1
                    onSubmit={handleSaveForm}
                    onSaveAndNext={handleSaveAndNext}
                    initialValues={formValues}
                />
            )}
            {step === 2 && (
                <Form2
                    onSubmit={handleSaveForm}
                    onSaveAndNext={handleSaveAndNext}
                    initialValues={formValues}
                    handleBack={() => setStep(step - 1)}
                />
            )}
            {step === 3 && (
                <Form3
                    onSubmit={handleSubmitForm}
                    initialValues={formValues}
                    handleBack={() => setStep(step - 1)}
                />
            )}
        </div>
    );
};

export default StepForm;
