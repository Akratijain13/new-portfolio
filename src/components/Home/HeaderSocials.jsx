
const Linkedin_url = "https://www.linkedin.com/in/akarti-jain-b12907245/";
const Github_url = "https://github.com/Akratijain13";
// const CodingProfiles_url = "https://linktr.ee/rachit_saxena";

export default function HeaderSocials() {
  return (
    <div className="home__socials">
        <a href = {Linkedin_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        
        <a href = {Github_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        
        {/* <a href = {CodingProfiles_url} className="home__social-links" target="_blank">
            <i class="fa-solid fa-code"></i>
        </a> */}

    </div>
  )
}
