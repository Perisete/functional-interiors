// import React from 'react';

const baseInputStyles = "shadow-sm block w-full border-2 sm:text-sm border-gray-300 focus:ring-brand-secondary focus:border-brand-secondary";
const textInputStyles = `${baseInputStyles} rounded-full px-3 py-1.5`;
const textareaStyles = `${baseInputStyles} rounded-md px-3 py-1.5`;
const fileInputStyles = `block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 focus:outline-none
                         file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                         file:text-black hover:opacity-90 transition-opacity`;

interface FormDictionary {
    nameLabel: string;
    emailLabel: string;
    roomLabel: string;
    filesLabel: string;
    messageLabel: string;
    submitButton: string;
}

interface FormProp {
    subtitle?: string;
    submit_color?: string;
    file_color?: string;
    dictionary: FormDictionary;
}

interface FormField {
    id: string;
    name: string;
    elementType: 'input' | 'textarea' | 'file';
    type?: string;
    required?: boolean;
    autoComplete?: string;
    rows?: number;
    maxLength?: number;
}

const formFields: FormField[] = [
    { id: 'name', name: 'name', elementType: 'input', type: 'text', required: true, autoComplete: 'given-name', maxLength: 50 },
    { id: 'email', name: 'email', elementType: 'input', type: 'email', required: true, autoComplete: 'email', maxLength: 50 },
    { id: 'room_funct', name: 'room_funct', elementType: 'input', type: 'text', autoComplete: 'off', maxLength: 100 },
    { id: 'upload_files', name: 'upload_files', elementType: 'file', type: 'file' },
    { id: 'message', name: 'message', elementType: 'textarea', type: 'textarea', rows: 5, maxLength: 500, required: true }
];

export const FormProp = ({ subtitle, submit_color = "blue", file_color = "blue", dictionary }: FormProp) => {

    const labelKeyMap: Record<string, keyof FormDictionary> = {
        name: 'name',
        email: 'email',
        room_funct: 'room_functions',
        upload_files: 'file',
        message: 'message',
    };

    return (
        <div className='w-full max-w-xl mx-auto'>
            {subtitle && <h3>{subtitle}</h3>}

            <form className="flex flex-col items-center justify-center">
                <div className="space-y-6 w-full">
                    {formFields.map((field) => {
                        const labelDictionaryKey = labelKeyMap[field.id];
                        const labelText = dictionary[labelDictionaryKey] || field.id;

                        return (
                            <div key={field.id}>
                                <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                                    {labelText}
                                </label>
                                <div className="mt-1">
                                    {/* Input */}
                                    {field.elementType === 'input' && (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            id={field.id}
                                            autoComplete={field.autoComplete}
                                            required={field.required}
                                            maxLength={field.maxLength}
                                            className={textInputStyles}
                                        />
                                    )}
                                    {/* Textarea */}
                                    {field.elementType === 'textarea' && (
                                        <textarea
                                            id={field.id}
                                            name={field.name}
                                            rows={field.rows}
                                            maxLength={field.maxLength}
                                            required={field.required}
                                            style={{ resize: "none" }}
                                            className={textareaStyles}
                                        />
                                    )}
                                    {/* File Input */}
                                    {field.elementType === 'file' && (
                                        <input
                                            type="file"
                                            name={field.name}
                                            id={field.id}
                                            required={field.required}
                                            className={fileInputStyles + ` form-input-file file-button-brand-${file_color}`}
                                            multiple
                                        />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-end w-full">
                    <button
                        type="submit"
                        className={`mt-2 w-20 h-10 bg-brand-${submit_color} rounded-b-full font-bold text-xs hover:opacity-90 transition-opacity`}
                    >
                        {dictionary.submit}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormProp;

