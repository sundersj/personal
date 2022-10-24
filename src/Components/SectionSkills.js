import { useState } from "react";

const SectionSkills = () =>
{


    const [skills, setSkills] = useState([
        { name: 'HTML', per: 90, type: 'frontend' },
        { name: 'CSS', per: 90, type: 'frontend' },
        { name: 'JAVASCRIPT', per: 75, type: 'frontend' },
        { name: 'JQUERY', per: 75, type: 'frontend' },
        { name: 'REACT', per: 65, type: 'frontend' },
        { name: 'BOOTSTRAP', per: 80, type: 'frontend' },
        { name: 'FIGMA', per: 70, type: 'frontend' },
        { name: 'PHP', per: 80, type: 'backend' },
        { name: 'MYSQL', per: 80, type: 'backend' },
        { name: 'OOP', per: 80, type: 'backend' },
        { name: 'GIT', per: 75, type: 'backend' },
        { name: 'BITBUCKET', per: 75, type: 'backend' },
        { name: 'SQL', per: 80, type: 'backend' },
        { name: 'LINUX', per: 70, type: 'backend' },
        { name: 'DBMS', per: 80, type: 'backend' },
    ]);


    return (

        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {
                            skills && skills.map(skill =>
                            {

                                return skill.type == 'frontend' ? <div className="progress">
                                    <span className="skill">{skill.name}<i className="val">{skill.per}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" style={{ width: `${skill.per}%` }} role="progressbar"></div>
                                    </div>
                                </div>
                                    : ''
                            }
                            )
                        }
                    </div>

                    <div className="col-lg-6" data-aos="fade-up">
                        {
                            skills && skills.map(skill =>
                            {
                                return skill.type == 'backend' ? <div className="progress">
                                    <span className="skill">{skill.name}<i className="val">{skill.per}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" style={{ width: `${skill.per}%` }} role="progressbar"></div>
                                    </div>
                                </div>
                                    : ''
                            }
                            )
                        }
                    </div>

                </div>

            </div>
        </section>

    );
}

export default SectionSkills;