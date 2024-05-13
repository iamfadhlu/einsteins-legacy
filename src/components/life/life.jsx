import React from 'react';
import einstein from '../image/EINSTEIN.png';
import '../../styles/life.css';


function life() {
    return (

        <div>
            <div className="container">

                <div className="subheading1">(Childhood,Youth and Education)</div>
                <hr />

                <br />
                <div className="container">
                    <div class="clearfix">
                        <img src={einstein} className="col-md-6 float-md-start mb-3 me-md-3  einstein_png" alt="..." />
                        <section className="text">
                            Einstein was born on March 14, 1879, in Ulm, Germany, a town that today has a population of just more than 120,000.
                            His parents, secular Ashkenazi Jews, were Hermann Einstein(a salesman and engineer), and Pauline Koch.
                        </section>

                        <section className="text">
                            <p />In 1880, the family moved to Munich's borough of Ludwigsvorstadt-Isarvorstadt, where Einstein's father and his uncle Jakob founded Elektrotechnische Fabrik J. Einstein & Cie,
                            a company that manufactured electrical equipment based on direct current.
                        </section>

                    </div>
                </div>
            </div>

        </div >

    )
}

export default life
