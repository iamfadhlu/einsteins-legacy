import React from "react";
import '../../styles/publication.css'
function publication() {
  return (
    <div className="container">
      <h1 className="heading1">Publications</h1>
      <hr className="hr2" />
      <div className="row">
        <h2 className="txt2">
          Einstein's scientific publications are listed below in four tables
        </h2>
        <div class="container text-center">
          <div class="row row-cols-4">
            <div class="col">
              <h3>
                <a href="https://en.wikipedia.org/wiki/List_of_scientific_publications_by_Albert_Einstein#Journal_articles">
                  Journal Articles
                </a>
              </h3>
              <p className="txt3">
                Most of Einstein's original scientific work appeared as journal
                articles. Articles on which Einstein collaborated with other
                scientists are highlighted in lavender, with the co-authors
                listed in the "Classification and notes" column. These are the
                total of 272 scientific articles.
              </p>
            </div>
            <div class="col">
              <h3>
                <a href="https://en.wikipedia.org/wiki/List_of_scientific_publications_by_Albert_Einstein#Book_chapters">
                  Book Chapters
                </a>
              </h3>
              <p className="txt3">
                With the exception of publication #288, the following book
                chapters were written by Einstein; he had no co-authors. Given
                that most of the chapters are already in English, the English
                translations are not given their own columns, but are provided
                in parentheses after the original title; this helps the table to
                fit within the margins of the page. These are the total of 31.
              </p>
            </div>
            <div class="col">
              <h3>
                <a href="https://en.wikipedia.org/wiki/List_of_scientific_publications_by_Albert_Einstein#Books">
                  Books
                </a>
              </h3>
              <p className="txt3">
                With the exception of publication #278, he had no co-authors.
                These are the total of 16 books.
              </p>
            </div>
            <div class="col">
              <h3>
                <a href="https://en.wikipedia.org/wiki/List_of_scientific_publications_by_Albert_Einstein#Authorized_translations">
                  Authorized Translations
                </a>
              </h3>
              <p className="txt3">
                A total of 14 translations of his work were authorized by
                Einstein.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12 col-sm-12">
        </div>
      </div>
    </div>
  );
}

export default publication;
