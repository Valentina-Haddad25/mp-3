const Education = () => {
    return (
        <div>
            <h1 id="pageWrapperHeading">Education</h1>
            {/* My Education as well as a picture of BU seal */}
            <div className="education">
                <p>
                    Boston University, Boston, MA <br />
                    Bachelor of Arts in Computer Science <br />
                    Bachelor of Arts in English <br />
                    Expected Graduation Date: May 2025 <br />
                </p>

                <img src="/Boston_University_seal.svg.png" alt="Boston University Seal" /> <br />
            </div>
        </div>
    );
}

export default Education;
