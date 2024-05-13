import React from 'react';
import '../../styles/education.css';
import education_einstein_wife from '../image/EINSTEIN_WIFE.png';
import education_einstein_school from '../image/eisteins-catholic-schl.png';
import education_polytechnic from '../image/polytechnic.jpg';


function education() {
    return (
        <div>
            <div className="container" >
                <hr />
                <div className="clearfix">
                    <img src={education_einstein_school} className="col-md-6 float-md-end mb-3 ms-md-3 einstein_school_png" alt="..." />
                    <section className="Education-text" >
                        Albert attended Petersschule on Blumenstrasse, a Catholic elementary school in Munich from the age of five.
                        When he was eight, he was transferred to the Luitpold Gymnasium, where he received advanced primary and then secondary school education.
                        In 1894, Hermann and Jakob's company tendered for a contract to install electric lighting in Munich, but without success—they lacked the capital that would have been required to update their technology from direct current to the more efficient, alternating current alternative.

                    </section>
                    <section className="Education-text">
                        <p />The failure of their bid forced them to sell their Munich factory and search for new opportunities elsewhere.
                        The Einstein family moved to Italy, first to Milan and a few months later to Pavia, where they settled in Palazzo Cornazzani.
                        Einstein, then fifteen, stayed behind in Munich in order to finish his schooling. His father wanted him to study electrical engineering, but he was a fractious pupil who found the Gymnasium's regimen and teaching methods far from congenial.
                        He later wrote that the school's policy of strict rote learning was harmful to creativity. At the end of December 1894, a letter from a doctor persuaded the Luitpold's authorities to release him from its care, and he joined his family in Pavia.
                        While in Italy as a teenager, he wrote an essay entitled "On the Investigation of the State of the Ether in a Magnetic Field".Einstein excelled at physics and mathematics from an early age, and soon acquired the mathematical expertise normally only found in a child several years his senior.
                        He began teaching himself algebra, calculus and Euclidean geometry when he was twelve; he made such rapid progress that he discovered an original proof of the Pythagorean theorem before his thirteenth birthday.
                    </section>
                </div>

            </div>



            <div class="container">
                <div class="clearfix">
                    <img src={education_polytechnic} className="col-md-6 float-start mb-3 me-3 polytechnic " alt="..." />
                    <section className="Education-text">
                        A family tutor, Max Talmud, said that only a short time after he had given the twelve year old Einstein a geometry textbook, the boy "had worked through the whole book. He thereupon devoted himself to higher mathematics ... Soon the flight of his mathematical genius was so high I could not follow."
                        Einstein recorded that he had "mastered integral and differential calculus" while still just fourteen.His love of algebra and geometry was so great that at twelve, he was already confident that nature could be understood as a "mathematical structure".
                    </section>
                    <section className="Education-text">
                        <p /> At thirteen, when his range of enthusiasms had broadened to include music and philosophy,Einstein was introduced to Kant's Critique of Pure Reason. Kant became his favorite philosopher.
                        In 1895, at the age of sixteen, Einstein sat the entrance examination for the federal polytechnic school (later the Eidgenössische Technische Hochschule, ETH) in Zürich, Switzerland.
                        He failed to reach the required standard in the general part of the test,but performed with distinction in physics and mathematics.On the advice of the polytechnic's principal, he completed his secondary education at the Argovian cantonal school (a gymnasium) in Aarau, Switzerland, graduating in 1896.
                        While lodging in Aarau with the family of Jost Winteler, he fell in love with Winteler's daughter, Marie. (His sister, Maja, later married Winteler's son Paul).
                        In January 1896, with his father's approval, Einstein renounced his citizenship of the German Kingdom of Württemberg in order to avoid conscription into military service.
                    </section>

                </div>
            </div>
            <div className="container">
                <div class="clearfix">
                    <img src={education_einstein_wife} className="col-md-5.3 float-md-end mb-0 ms-md-0 einstein_wife_png" alt="..." />
                    <section className="Education-text">
                        The Matura (graduation for the successful completion of higher secondary schooling) awarded to him in the September of that year acknowledged him to have performed well across most of the curriculum, allotting him a top grade of 6 for history, physics, algebra, geometry, and descriptive geometry.
                        At seventeen, he enrolled in the four-year mathematics and physics teaching diploma program at the federal polytechnic school. Marie Winteler, a year older than him, took up a teaching post in Olsberg, Switzerland.
                    </section>
                    <section className="Education-text">
                        <p />The five other polytechnic school freshmen following the same course as Einstein included just one woman, a twenty year old Serbian, Mileva Marić.
                        Over the next few years, the pair spent many hours discussing their shared interests and learning about topics in physics that the polytechnic school's lectures did not cover.
                        In his letters to Marić, Einstein confessed that exploring science with her by his side was much more enjoyable than reading a textbook in solitude. Eventually the two students became not only friends but also lovers.
                        Einstein married Mileva Maric,a colleague he met at the federal polytechnic school he enrolled in,  in January 1903. Their children, Hans Albert and Eduard, were born in 1904 and 1910.
                        (The fate of a child born to them in 1902 before their marriage, Lieserl, is unknown).
                        When Marić learned of his infidelity soon after moving to Berlin with him in April 1914.
                        She returned to Zürich, taking Hans Albert and Eduard with her
                        Einstein and Marić were granted a divorce on 14 February 1919 on the grounds of having lived apart for five years.
                        As part of the divorce settlement, Einstein agreed that if he were to win a Nobel Prize, he would give the money that he received to Marić. He won the prize two years later
                        Einstein divorced Maric in 1919 and soon after married Elsa Löwenthal. Löwenthal died in 1933.
                    </section>

                </div>
            </div>
        </div>
    )
}

export default education