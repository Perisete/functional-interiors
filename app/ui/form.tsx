import React from 'react'; // Make sure React is imported if not implicitly available

const submit_color = "#0097b2";

// --- DATA STRUCTURE (Provided by you) ---
interface FormField {
    id: string;
    name: string;
    label: string;
    elementType: 'input' | 'textarea' | 'file';
    type?: string; // HTML type attribute (text, email, file, etc.) - optional for textarea
    required?: boolean; // To show the asterisk
    autoComplete?: string;
    rows?: number; // Specific to textarea
    maxLength?: number; // Specific to textarea
}

const formFields: FormField[] = [
    { id: 'name', name: 'name', label: 'Name', elementType: 'input', type: 'text', required: true, autoComplete: 'given-name', maxLength: 50 },
    { id: 'email', name: 'email', label: 'E-mail', elementType: 'input', type: 'email', required: true, autoComplete: 'email', maxLength: 50 },
    { id: 'room_funct', name: 'room_funct', label: 'Room function(s)', elementType: 'input', type: 'text', autoComplete: 'off', maxLength: 100 },
    { id: 'upload_files', name: 'upload_files', label: 'Photos, floor plan, inspiration, etc.', elementType: 'file', type: 'file' },
    { id: 'message', name: 'message', label: 'Message', elementType: 'textarea', type: 'textarea', rows: 5, maxLength: 500 },
];
const baseInputStyles = "shadow-sm block w-full border-2 sm:text-sm";
const textInputStyles = `${baseInputStyles} rounded-full pl-2`;
const textareaStyles = `${baseInputStyles} rounded-md pl-2`;
const fileInputStyles = `block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 focus:outline-none
                         file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                         file:bg-[#0097b2] file:text-black hover:opacity-90 transition-opacity`;
// --- END STYLE DEFINITIONS ---

export const Form = () => {
    return (
        // Added max-width and centering for better form appearance
        <form className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
            {/* Container for the fields, controls vertical spacing and width */}
            {/* Adjusted space-y and removed sm:w-xl, added w-full */}
            <div className="space-y-6 w-full">

                {/* --- Loop through formFields array --- */}
                {formFields.map((field) => (
                    <div key={field.id}> {/* Use a unique key for each item */}
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                            {field.label}{field.required ? '*' : ''} {/* Display label and asterisk if required */}
                        </label>
                        <div className="mt-1">
                            {/* Render INPUT element */}
                            {field.elementType === 'input' && (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    id={field.id}
                                    autoComplete={field.autoComplete}
                                    required={field.required} // Apply required attribute
                                    className={textInputStyles} // Apply specific styles
                                    // placeholder={field.placeholder} // Add if you include placeholder in FormField
                                />
                            )}
                            {/* Render TEXTAREA element */}
                            {field.elementType === 'textarea' && (
                                <textarea
                                    id={field.id}
                                    name={field.name}
                                    rows={field.rows}
                                    maxLength={field.maxLength}
                                    required={field.required} // Apply required attribute
                                    style={{ resize: "none" }} // Keep inline style if needed
                                    className={textareaStyles} // Apply specific styles
                                    // placeholder={field.placeholder} // Add if you include placeholder in FormField
                                />
                            )}
                            {/* Render FILE input element */}
                            {field.elementType === 'file' && (
                                <input
                                    type="file"
                                    name={field.name}
                                    id={field.id}
                                    required={field.required} // Apply required attribute
                                    className={fileInputStyles} // Apply specific styles
                                    multiple // Allow multiple file uploads if needed
                                />
                            )}
                        </div>
                    </div>
                ))}
                {/* --- End loop --- */}

            </div>
    
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className={`mt-2 w-20 h-10 bg-[${submit_color}] rounded-b-full font-bold text-xs hover:opacity-90 transition-opacity`}
                >
                    CONTACT US
                </button>
            </div>
        </form>
    )
}

export default Form;