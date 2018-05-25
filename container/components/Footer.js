const DatasFooter = [
  {
    href: "https://my-resume-aurelien.herokuapp.com/",
    src: "/static/images/resume.png",
    alt: "online cv"
  },
  {
    href: "https://www.linkedin.com/in/aur%C3%A9lien-brachet-146556141/",
    src: "/static/images/linkedin-logo.png",
    alt: "linkedin"
  },
  {
    href: "https://www.instagram.com/orel_bip/",
    src: "/static/images/instagram-logo.png",
    alt: "instagram"
  }
];

const Footer = () => (
  <div className="container">
    <h2>You can also contact me here :</h2>
    <div>
      {DatasFooter.map(data => (
        <a href={data.href} target="_blank">
          <img src={data.src} alt={data.alt} />
        </a>
      ))}
    </div>
    <style jsx>
      {`
        .container {
          height: 150px;
          border-top: 1px solid #e056fd;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          cursor: pointer;
          margin-left: 15px;
          margin-right: 15px;
        }
      `}
    </style>
  </div>
);

export default Footer;
