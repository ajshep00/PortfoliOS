  
  const TechnologiesApp: React.FC = () => {

    return (
            <div className="flex flex-col space-y-4 text-white">
               <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Languages</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Java
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Python
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            JavaScript
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            C++
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            HTML
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            CSS
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            SQL
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Bash
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Frameworks</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Express.js
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            jQuery
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Next.js
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Puppeteer
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            requests
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            TailwindCSS
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Backend Technologies</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            RESTful API&apos;s
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Docker
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Project Management Tools</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Notion
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Jira
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Version Control</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Git
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            GitHub
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold">Operating Systems</h3>
                    <ul className="flex flex-wrap gap-2">
                        <li className="rounded-lg bg-gray-800 p-2">
                            Windows
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            Linux
                        </li>
                        <li className="rounded-lg bg-gray-800 p-2">
                            MacOS
                        </li>
                    </ul>
                </div>
            </div>
  );
};

export default TechnologiesApp;
