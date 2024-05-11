import React from "react";
import award from "../image/download.png";
import '../../styles/achievement.css';
function achievement() {
  return (
    <div className="container">
      <br /><br />
      <h1 className="heading1">Einstein's Achievements</h1>
      <hr className="hr2" />
      <ol class="list-group list-group-numbered list-group list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Prussian Academy of Sciences</div>
            On November 12, 1913, Einstein was granted full membership in the
            Prussian Academy of Sciences. On March 28, 1933, he resigned
            membership, explaining in a letter to the academy that he did not
            want to be associated with the Prussian government of the time.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">University of Rostock</div>
            On November 12, 1919, the University of Rostock awarded an honorary
            doctorate of medicine (Dr. med. h.c.) to Einstein, on the occasion
            of its 500th anniversary and following a suggestion by Moritz
            Schlick. This is the only honorary doctorate he received from a
            German university.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">University of Manchester</div>
            In 1921, Einstein accepted a Doctor of Science degree from the
            University of Manchester. In addition to receiving the degree,
            Einstein gave a lecture in Manchester on June 9.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Royal Society</div>
            In 1925 the Royal Society awarded Einstein the Copley Medal.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">
              Gold Medal of the Royal Astronomical Society.
            </div>
            In 1926, he was awarded the Gold Medal of the Royal Astronomical
            Society.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Max Planck medal</div>
            In 1929, Max Planck presented Einstein with the Max Planck medal of
            the German Physical Society in Berlin, for extraordinary
            achievements in theoretical physics.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Prix Jules Janssen</div>
            In 1931, he received the Prix Jules Janssen, In 1934 Einstein gave
            the Josiah Willard Gibbs lecture.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Franklin Institute's Franklin Medal</div>
            In 1936, Einstein was awarded the Franklin Institute's Franklin
            Medal for his extensive work on relativity and the photo-electric
            effect.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">World Year of Physics</div>
            The International Union of Pure and Applied Physics named 2005 the
            "World Year of Physics" in commemoration of the 100th anniversary of
            the publication of the annus mirabilis papers.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Einsteinium</div>
            The chemical element 99, einsteinium, was named for him in August
            1955, four months after Einstein's death. 2001 Einstein is an inner
            main belt asteroid discovered on 5 March 1973.
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Person of the Century</div>
            In 1999 Time magazine named him the Person of the Century, ahead of
            Mahatma Gandhi and Franklin Roosevelt, among others. In the words of
            a biographer, "to the scientifically literate and the public at
            large, Einstein is synonymous with genius". Also in 1999, an opinion
            poll of 100 leading physicists ranked Einstein the "greatest
            physicist ever". A Gallup poll recorded him as the fourth most
            admired person of the 20th century in the U.S.
          </div>
        </li>
      </ol>
      <h1 className="heading1">Einstein's Nobel Prize</h1>
      <hr className="hr2" />
      <br />
      <div className="row">
        <div className="col-xl-6 col-md-12 col-sm-12">
          <img className="einstein_png" src={award} alt="award" />
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
          <div className="txt1">
            In 1922 Albert Einstein was awarded the 1921 Nobel Prize in Physics,
            "for his services to Theoretical Physics, and especially for his
            discovery of the law of the photoelectric effect". This refers to
            his 1905 paper on the photoelectric effect, "On a Heuristic
            Viewpoint Concerning the Production and Transformation of Light",
            which was well supported by the experimental evidence by that time.
            The presentation speech began by mentioning "his theory of
            relativity [which had] been the subject of lively debate in
            philosophical circles [and] also has astrophysical implications
            which are being rigorously examined at the present time".
          </div>
          <div className="txt2">
          It was long reported that in accord with the divorce settlement,
          the Nobel Prize money had been deposited in a Swiss bank account for
          his wife Mileva Marić to invest for herself and their two sons, while
          she could only use the capital by agreement with Einstein. However,
          personal correspondence made public in 2006 shows that he invested
          much of it in the United States, and saw much of it wiped out in the
          Great Depression. Ultimately, however, he paid Marić more money than
          he received with the prize.
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default achievement;
