import FooterBottom from "../components/footer/FooterBottom";
import FooterGoverment from "../components/footer/FooterGoverment";
import FooterLogo from "../components/footer/FooterLogo";
import FooterSosmed from "./../components/footer/FooterSosmed";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-16 flex flex-col bg-slate-900 gap-16">
      <div className="flex gap-32 justify-around ">
        <FooterLogo />
        <FooterSosmed />
        <FooterGoverment />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
