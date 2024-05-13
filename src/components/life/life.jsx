import React from 'react';
import life_einstein_png from '../image/EINSTEIN.png';
import '../../styles/life.css';


function life() {
    return (

        <div id='life-container'>
            <h5 id="life-header">Life And Education</h5>
            <div className="row">

                <div className=" col-xl-5 col-lg-6 col-md-7 col-sm-12 col-xs-12">
                    <img src={life_einstein_png} className="life_einstein_png" alt="..." />
                </div>
                <div className="col-xl-7 col-lg-6 col-md-5 col-sm-12 col-xs-12">
                    <p className="life-text">
                        Einstein was born on March 14, 1879, in Ulm, Germany, a town that today has a population of just more than 120,000.
                        His parents, secular Ashkenazi Jews, were Hermann Einstein(a salesman and engineer), and Pauline Koch.
                    </p>
                    <p className="life-text">
                        In 1880, the family moved to Munich's borough of Ludwigsvorstadt-Isarvorstadt, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie,
                        a company that manufactured electrical equipment based on direct current.
                    </p>
                    <p className="life-text">
                        Albert attended Petersschule on Blumenstrasse, a Catholic elementary school in Munich from the age of five. When he was eight, he was transferred to the Luitpold Gymnasium, where he received advanced primary and then secondary school education.
                        In 1894, Hermann and Jakob's company tendered for a contract to install electric lighting in Munich, but without success—they lacked the capital that would have been required to update their technology from direct current to the more efficient, alternating current alternative.
                    </p>
                </div>
            </div>
        </div>


    )
}

export default life
