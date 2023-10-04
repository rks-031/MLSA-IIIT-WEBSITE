import React from "react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "../CSS_files/Chapter.css";
import "../CSS_files/Carousel.css";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Carousel from "../components/Carousel.js";
import { VscGithub, VscMail } from "react-icons/vsc";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Projects() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["OUR MLSA's"],
      typeSpeed: 70,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const cardsData = [
    {
      title: "Ayusha Kar",
      imageUrlFront: "./assets/members/ayusha.jpeg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B520015</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Engineering</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/ayushakar1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/ayushaakar/
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/ayusha-kar-98b488207/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b520015@iiit-bh.ac.in
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Abhipsha Dash",
      imageUrlFront: "./assets/members/AbhipshaDash.jpg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B321003</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Electrical and Electronics</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              {/* <a href="https://github.com/SumitPanda03"><VscGithub/> </a>&nbsp; */}
              {/* <a href="https://instagram.com/_sumit_panda_?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram/> </a>&nbsp; */}
              <a
                href="https://www.linkedin.com/in/abhipsha-dash/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b321003@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Shreeya Mishra",
      imageUrlFront: "./assets/members/Shreeya.jpg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B421046</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Information Technology</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/mshreeya
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              {/*<a href="https://instagram.com/_sumit_panda_?igshid=OGQ5ZDc2ODk2ZA==">
                <FaInstagram />{" "}
      </a>*/}
              &nbsp;
              <a
                href="https://www.linkedin.com/in/mishrashreeya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b421046@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Roshan Dash",
      imageUrlFront: "./assets/members/Roshan.jpg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B121046</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/dashroshan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://twitter.com/roshandashx
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/roshandash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b121046@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Sumit Bhusan Panda",
      imageUrlFront: "./assets/members/Sumit.jpeg",
      imageUrlBack: "./assets/badges/LevelAlpha.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B421057</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Information Technology</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/SumitPanda03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://instagram.com/_sumit_panda_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/sumit-panda-50ba2b224"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:sbpanda1308@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Rajnish Kumar Singh",
      imageUrlFront: "./assets/members/Rajnish.jpg",
      imageUrlBack: "./assets/badges/LevelAlpha.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B421037</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/rks-031"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/rks_031/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href=" https://www.linkedin.com/in/rajnish-kumar-singh-2241b321b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b421037@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Swoyam Siddharth Nayak",
      imageUrlFront: "./assets/members/Swoyam_Sidharth_B121065.jpeg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B121065</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/swoyam2609"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/self._._.sid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/swoyam2609/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b121065@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Baivab Kundu",
      imageUrlFront: "./assets/members/Baivab.jpg",
      imageUrlBack: "./assets/badges/LevelAlpha.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B421017</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Information Technology</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/kundu-baivab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/vaib_23/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/baivab-kundu-3699a222a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b421017@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Aman Modi",
      imageUrlFront: "./assets/members/Aman.jpg",
      imageUrlBack: "./assets/badges/LevelAlpha.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B521010</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Engineering</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/amanmodiii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/amanmodiii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b521010@iiit-bh.ac.in
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Rohan Mohanty",
      imageUrlFront: "./assets/members/Rohan Mohanty.jpeg",
      imageUrlBack: "./assets/badges/LevelBeta.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B121045</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href=" https://github.com/mohantyrohan3
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/mohantyrohan3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/rohan-mohanty-325927202/
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b121045@iiit-bh.ac.in
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Anirudh Pradhan",
      imageUrlFront: "./assets/members/Anirudh.jpg",
      imageUrlBack: "./assets/badges/LevelNew.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B421057</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/AnirudhPradhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/_.anirudh.roshan._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/anirudhpradhan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:anipradhan.04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Dasari Sasi Ranga Raidu",
      imageUrlFront: "./assets/members/Dasari_Sasi_Ranga_Raidu_B322020.jpg",
      imageUrlBack: "./assets/badges/LevelNew.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B322020</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/sasiidasariii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/sasiidasariii/
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/sasi-ranga-raidu-dasari-26285a253"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b322020@iiit-bh.ac.in
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Mohammad Ehtisham",
      imageUrlFront: "./assets/members/Mohd_Ehtisham.jpg",
      imageUrlBack: "./assets/badges/LevelNew.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B522035</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Engineering</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/Ehtisham9198"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://instagram.com/ehtisham_119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/ehtishaam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b522035@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Punit Kumar",
      imageUrlFront: "./assets/members/Punit.jpg",
      imageUrlBack: "./assets/badges/LevelNew.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B422041</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Information Technology</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/punitkr03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/punit_k.r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/punit-kr03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b422041@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
    {
      title: "Rajesh Kumar Jena",
      imageUrlFront: "./assets/members/RajeshKumarJena.jpg",
      imageUrlBack: "./assets/badges/LevelNew.png",
      description: (
        <div className="description">
          <ul>
            <li>
              <strong className="bold-black">ID:</strong>{" "}
              <span className="list-content">B122088</span>
            </li>
            <li style={{ marginTop: "10px" }}>
              <strong className="bold-black">Branch:</strong>{" "}
              <span className="list-content">Computer Science</span>
            </li>
            <div className="social">
              <li style={{ marginTop: "10px" }}>
                <strong className="bold-black"> Socials : </strong>
              </li>
              &nbsp;&nbsp;
              <a
                href="https://github.com/Rajesh-1234567https://github.com/Rajesh-1234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.instagram.com/kumar_rajesh_1234567/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/rajesh-kumar-jena-793257212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              &nbsp;
              <a
                href="mailto:b122088@iiit-bh.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail />
              </a>
              &nbsp;
            </div>
          </ul>
        </div>
      ),
    },
  ];

  const Card = ({ title, imageUrlFront, imageUrlBack, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="card-inner">
          <div className="card-front">
            <img className="uniform-image" src={imageUrlFront} alt={title} loading="lazy" />
            <div className="title">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="card-back">
            <img className="uniform-image" src={imageUrlBack} alt={title} loading="lazy" />
            {description}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <h1 className="typed-content container my-5">
        <span ref={el} />
      </h1>
      <br />
      <div className="app">
        <Carousel>
          {cardsData.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              imageUrlFront={card.imageUrlFront}
              imageUrlBack={card.imageUrlBack}
              description={card.description}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
