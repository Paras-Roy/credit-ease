import './banner.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerContainer">
                <div className="bannerBox">
                    <h1>No Credit History?</h1>
                    <h2>NO PROBLEM.</h2>
                    <span>Get A.I. powered credit score and tips, <br />even without a credit history <br />using Credit Ease</span>
                    <div className="button">
                        Check Your Score
                        <KeyboardArrowDownIcon/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Banner;