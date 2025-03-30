
const submit_color = "#0097b2";

export const Form = () => {
    return (
        <form>
            <div className="space-y-12">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name*
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="shadow-sm block w-full sm:text-sm border-2 rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-mail*
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="shadow-sm block w-full sm:text-sm border-2 rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="room_funct" className="block text-sm font-medium text-gray-700">
                        Room function(s)
                    </label>
                    <div className="mt-1">
                        <input
                            id="room_funct"
                            name="room_funt"
                            type="room_funct"
                            autoComplete="off"
                            className="shadow-sm block w-full sm:text-sm border-2 rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="upload_files" className="block text-sm font-medium text-gray-700">
                        Photos, floor plan, inspiration, etc.
                    </label>
                    <div className="mt-1">
                        <input
                            type="file"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            maxLength={500}
                            style={{ resize: "none" }}
                            className="shadow-sm block w-full sm:text-sm border-2 rounded-md"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className={`mt-2 w-20 h-10 bg-[${submit_color}] rounded-b-full`}
                >
                    <p className="font-bold text-xs">CONTACT US</p>
                </button>
            </div>
        </form>
    )
}

export default Form;

// className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"