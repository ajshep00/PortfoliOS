  
  const EducationApp: React.FC = () => {

    return (
            <div className="flex flex-col space-y-4 text-white">
                <div>
                    <div>
                        <h2 className="font-bold">Siena College</h2>
                    </div>
                    <div className="flex justify-between">
                        <h3>Loudonville, NY</h3>
                        <h3>May 2024</h3>
                    </div>
                    <div className="flex justify-between">
                        
                        <h3>B.A. in Psychology & Computer Science</h3>
                        <h3>GPA 3.71</h3>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Coursework</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Advanced Cyber Security
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            UX Design
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Web Design
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Data Structures
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Unix/Linux
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Assembly Language
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Design & Analysis of Algorithms
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Database Management Systems
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Advanced Programming
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Honors</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2 flex-col space-y-2">
                            <div className="flex space-x-4">
                                <h3 className="font-semibold">Siena College</h3>
                                <h4>Member</h4>
                            </div>
                            <div>
                                <ul  className=" flex text-sm">
                                    <li>Upsilon Pi Epsilon</li>
                                </ul>
                            </div>
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2 flex-col space-y-2">
                            
                                <div className="flex space-x-4">
                                    <h3 className="font-semibold">Siena College</h3>
                                    <h4>Dean's List</h4>
                                </div>
                                
                                <div>
                                    <ul  className="flex text-sm space-x-4">
                                        <li>Fall 2021</li>
                                        <li>Spring 2022</li>
                                        <li>Fall 2023</li>
                                    </ul>
                                </div>
                                
                            
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2 flex-col space-y-2">
                                <div className="flex space-x-4">
                                    <h3 className="font-semibold">Siena College</h3>
                                    <h4>President's List</h4>
                                </div>
                                <div>
                                    <ul  className="flex text-sm space-x-2">
                                        <li>Spring 2021</li>
                                        <li>Spring 2023</li>
                                    </ul>
                                </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
  );
};

export default EducationApp;
