import "./footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SpeedIcon from '@mui/icons-material/Speed';
import LinkIcon from '@mui/icons-material/Link';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerContainer">
                <div className="siteMap">
                    <div><SpeedIcon/>Credit Ease</div>
                    <span>Ansh Tanwar</span>
                    <span>Ekam Singh Ahuja</span>
                    <span>Paras Roy</span>
                </div>
                <div className="links">
                    <h4><LinkIcon/>Links</h4>
                    <div className="github">
                        <GitHubIcon/>
                        <span>Github</span>
                    </div>
                    <div className="email">
                        <SendIcon/>
                        <span>Email</span>
                    </div>
                    <div className="contact">
                        <PermContactCalendarIcon/>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className="copyrightBox">
                <span>
                    2023 Credit Ease | All RIghts Reserved
                </span>
            </div>
        </div>
     );
}
 
export default Footer;