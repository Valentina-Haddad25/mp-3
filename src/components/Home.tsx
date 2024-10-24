
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            {/* My home page */}
            <h1 id="pageWrapperHeading">Home</h1>

            <div id="index-wrapper">
                <img
                    src="/WithoutSeal.jpeg"
                    alt="Me in the White House"
                    id="child-one"
                />
                <div className="intro">
                    <h1>
                        Hello, my name is Valentina Haddad!
                        <br />
                    </h1>
                    <p>
                        I am currently a senior at Boston University, where I am double
                        majoring in Computer Science and English, and serve as a Resident
                        Assistant. Over the years, I have gained a diverse range of
                        experiences in both technical and leadership roles, which have
                        helped me develop a unique skill set. I have interned as an
                        Artificial Intelligence Community Analyst for the Library of
                        Congress and as a Cybersecurity intern for the Department of
                        Treasury. I have enjoyed my time in the government sectors!
                        <br />
                        Welcome to my website, where you will find my{" "}
                        <u>
                            <Link to="/education">Educational</Link>
                        </u>{" "}
                        and{" "}
                        <u>
                            <Link to="/employment">Employment</Link>
                        </u>{" "}
                        history, as well as other information that might be of interest to
                        you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
