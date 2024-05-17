const FormNavigation = ({ step, setStep }) => {
    const handleTabClick = (selectedStep) => {
        setStep(selectedStep);
    };

    return (
        <ul className="flex w-[90%] justify-around md:w-1/2">
            <li
                className={`${step === 1 ? "font-semibold text-blue-500 " : ""} cursor-pointer`}
                onClick={() => handleTabClick(1)}
            >
                Form 1
            </li>
            <li
                className={`${step === 2 ? "font-semibold text-blue-500 " : ""} cursor-pointer`}
                onClick={() => handleTabClick(2)}
            >
                Form 2
            </li>
            <li
                className={`${step === 3 ? "font-semibold text-blue-500 " : ""} cursor-pointer`}
                onClick={() => handleTabClick(3)}
            >
                Form 3
            </li>
        </ul>
    );
};

export default FormNavigation;
