import React from "react";
import "../../styles/publication.css";
import book1 from "../image/book1.jpg";
import book2 from "../image/book2.jpeg";
import book3 from "../image/book3.jpg";
import book4 from "../image/book4.jpg";
import book5 from "../image/book5.jpg";
import book6 from "../image/book6.jpg";
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
      </div>
      <h2 className="txt2">These are some books related to Albert Einstein</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img className="books" src={book1} alt="book1" />
            <br />
            <a href="https://www.amazon.com/Albert-Einstein-Biography-Sellers-Childrens/dp/1541912381">
              <p className="txt2">
                Albert Einstein: The Genius Who Failed School - Biography
              </p>
            </a>
          </div>
          <div class="col">
            <img className="books" src={book2} alt="book2" />
            <br />
            <a href="https://books.google.com.ng/books/about/The_World_As_I_See_It.html?id=aNKOo94tO6cC&source=kp_cover&redir_esc=y">
              <p className="txt2">The World As I see It</p>
            </a>
          </div>
          <div class="col">
            <img className="books" src={book3} alt="book3" />
            <br />
            <a href="https://www.amazon.co.uk/Mathematical-Foundation-General-Theory-Relativity/dp/1006727140/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
              <p className="txt2">
                Mathematical Foundation of the General Theory of Relativity
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img className="books" src={book4} alt="book4" />
            <br />
            <a href="https://www.amazon.co.uk/Meaning-Relativity-Albert-Einstein-ebook/dp/B074G1B55B/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
              <p className="txt2">
              The Meaning of Relativity: Including the Generalization of Gravitation Theory
              </p>
            </a>
          </div>
          <div class="col">
            <img className="books" src={book5} alt="book5" />
            <br />
            <a href="https://www.amazon.co.uk/Letters-Wave-Mechanics-Correspondence-Schr%C3%B6dinger-ebook/dp/B004Q9U0ME/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
              <p className="txt2">Letters on Wave Mechanics: Correspondence with H. A. Lorentz, Max Planck, and Erwin Schrödinger</p>
            </a>
          </div>
          <div class="col">
            <img className="books" src={book6} alt="book6" />
            <br />
            <a href="https://www.amazon.co.uk/Ideas-Opinions-Albert-Einstein-Philosophy-ebook/dp/B0C37LFY46/?_encoding=UTF8&pd_rd_w=ankvy&content-id=amzn1.sym.3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_p=3413293e-3815-4359-96ba-1ec5110e0b30&pf_rd_r=258-9728002-4223536&pd_rd_wg=ZhJbP&pd_rd_r=3d683c24-a501-48ac-b10d-69967cfe027c&ref_=aufs_ap_sc_dsk">
              <p className="txt2">
              Ideas and Opinions by Albert Einstein: Insights into Science, Philosophy, and Humanity
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default publication;
