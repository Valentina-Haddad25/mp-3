
const Certifications = () => {
    return (
        <div>
            <h1 id="pageWrapperHeading">Certifications & Research</h1>
            <br />

            <div id="page-wrapperCR">
                {/*  My actual picture of my cert  */}
                <img
                    src="pic-in-main-two.png"
                    alt="Treasury Scholar internship Cert"
                    id="cert2"
                />
            </div>
            {/* My research */}
            <div className="workPartA">
                <strong>Robot Jules!</strong> <br />
                Research Assistant Boston University, Boston, MA <br />
                September 2023 – December 2023
                <br />
            </div>

            <div className="workPartB">
                <ul>
                    <li>
                        Led data collection across three Boston-based labs, focusing on
                        robot battery data analysis.
                    </li>
                    <li>
                        Developed and implemented protocols for efficient data gathering
                        through Cloud platforms (Azure SQL/NoSQL).
                    </li>
                    <li>
                        Utilized personal robot, Bittle, to investigate correlations between
                        battery use and software/hardware dynamics in robots.
                    </li>
                    <li>
                        Collaborated with three PhD students, contributing insights and
                        refining research methodologies. Worked closely with Professor
                        Neuman, refining analytical skills within robotics research.
                    </li>
                </ul>
            </div>

            <div className="workPartA">
                <p>
                    <strong>ChatGPT & Artificial Intelligence</strong> <br />
                    Research Assistant Boston University, Boston, MA <br />
                    September 2022 – December 2022
                    <br />
                </p>
            </div>

            <div className="NeedsSpace">
                <div className="workPartB">
                    <ul>
                        <li>
                            Uniquely granted early access to study the development process of
                            ChatGPT, an innovative AI system engineered by OpenAI.
                        </li>
                        <li>
                            Witnessed the evolution of this AI model before its public
                            release, gaining in-depth insights into its construction.
                        </li>
                        <li>
                            Actively participated in dissecting and reconstructing the
                            foundational steps involved in creating a state-of-the-art
                            generative AI model.
                        </li>
                        <li>
                            Leveraged this hands-on experience to deepen my understanding of
                            AI development processes and intricacies.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
