const Contact = () => {
    return (
        <div>
            {/* Page heading */}
            <h1 id="pageWrapperHeading">Contact Me!</h1>

            <div className="Contain">
                <div id="page-wrapperContact">

                    {/* Email section */}
                    <div className="Contact">
                        <strong>Email: </strong>{" "}
                        <a href="mailto:vhaddad@bu.edu" target="_blank" rel="noopener noreferrer">
                            vhaddad@bu.edu
                        </a>
                    </div>

                    {/* LinkedIn section */}
                    <div className="Contact">
                        <strong>LinkedIn: </strong>{" "}
                        <a
                            href="https://www.linkedin.com/in/valentinahaddad/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Valentina Haddad
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
