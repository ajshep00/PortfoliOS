  
  const ExperienceApp: React.FC = () => {

    return (
            <div className="text-white flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">Data Annotation</h2>
                        <h3>New York, NY</h3>
                    </div>
                    <div className="rounded-lg bg-gray-800 p-2 flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Data Annotator</h3>
                            <h3>June 2023 - Present</h3>
                        </div>
                        <ul className="text-sm flex flex-col space-y-2">
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Enhance data quality and refine AI models for diverse applications.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Efficiently categorize numerous prompts and responses based on predefined criteria.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Leveraged medical tech to track patient progress and ensure accurate record-keeping.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">Siena College</h2>
                        <h3>Loudonville, NY</h3>
                    </div>
                    <div className="rounded-lg bg-gray-800 p-2 flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Information Technology Consultant</h3>
                            <h3>August 2022 - May 2024</h3>
                        </div>
                        <ul className="text-sm flex flex-col space-y-2">
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Analyzed and resolved complex technical issues, providing support for hardware, software, and network problems.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Documented technical support requests and resolutions in a HelpDesk system.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Delivered prompt and professional responses to end-user requests for technical support.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">Fulton Center for Rehabilitation</h2>
                        <h3>Gloversville, NY</h3>
                    </div>
                    <div className="rounded-lg bg-gray-800 p-2 flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">Certified Nursing Assistant</h3>
                            <h3>August 2022 - May 2024</h3>
                        </div>
                        <ul className="text-sm flex flex-col space-y-2">
                            <li className="bg-gray-700 p-2  rounded-lg">
                                Collaborated with dieticians, nurses, and doctors to ensure proper patient care.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Adhered to policies and procedures related to data security and confidentiality of
                                patient information.
                            </li>
                            <li className="bg-gray-700 p-2 rounded-lg">
                                Delivered prompt and professional responses to end-user requests for technical support.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  );
};

export default ExperienceApp;
