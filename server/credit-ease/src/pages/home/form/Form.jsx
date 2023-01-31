import { useState, useRef } from 'react';
import './form.scss'

const Form = () => {

    const formRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [resultData, setResultData] = useState({
        value: 1,
        recc: ["All good"],
        grade: "hi"

    })
    const [showResult, setShowResult] = useState(false)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //check for complete data
        getPreds();
        console.log(formData)
    };


    const handleReset = (event) => {
        event.preventDefault();
        setShowResult(false);
        formRef.current.reset();
        setFormData({});
    };

    const getPreds = () => {

        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {

                setShowResult(true);
                console.log(data)
                setResultData(data)
                // Handle the response data
            });
    }

    // 6999938 25 3 single rented yes Air_traffic_controller Delhi 3 13

    if (!showResult) {
        return (

            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form">
                    <header>
                        <h1>Generate Your Personal Score</h1>
                    </header>
                    <div className="formContainer">
                        <div className="formLeft">
                            <div className="formCard">
                                <div className="formTitle">
                                    <div>Set Personal Info</div>
                                    <span>Fill in required personal info</span>
                                </div>
                                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                                <input type="number" name="age" placeholder="Your Age" onChange={handleChange} required />
                                <select defaultValue="def" name="married" onChange={handleChange} required>
                                    <option value="def" disabled>Marital Status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Unmarried</option>
                                </select>
                            </div>
                            <div className="formCard">
                                <div className="formTitle">
                                    <div>Set Profession Info</div>
                                    <span>Fill in required profession info</span>
                                </div>
                                <select defaultValue="def" name="profession" onChange={handleChange} required>
                                    <option value="def" disabled>Choose Profession</option>
                                    <option value="Physician">Physician</option>
                                    <option value="Police_officer">Police_officer</option>
                                    <option value="Statistician">Statistician</option>
                                    <option value="Computer_hardware_engineer">Computer_hardware_engineer</option>
                                    <option value="Air_traffic_controller">Air_traffic_controller</option>
                                    <option value="Hotel_Manager">Hotel_Manager</option>
                                    <option value="Software_Developer">Software_Developer</option>
                                    <option value="Web_designer">Web_designer</option>
                                    <option value="Psychologist">Psychologist</option>
                                    <option value="Technical_writer">Technical_writer</option>
                                    <option value="Magistrate">Magistrate</option>
                                    <option value="Fashion_Designer">Fashion_Designer</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Drafter">Drafter</option>
                                    <option value="Biomedical_Engineer">Biomedical_Engineer</option>
                                    <option value="Army_officer">Army_officer</option>
                                    <option value="Mechanical_engineer">Mechanical_engineer</option>
                                    <option value="Graphic_Designer">Graphic_Designer</option>
                                    <option value="Flight_attendant">Flight_attendant</option>
                                    <option value="Comedian">Comedian</option>
                                    <option value="Surveyor">Surveyor</option>
                                    <option value="Geologist">Geologist</option>
                                    <option value="Microbiologist">Microbiologist</option>
                                    <option value="Politician">Politician</option>
                                    <option value="Chartered_Accountant">Chartered_Accountant</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Civil_engineer">Civil_engineer</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Firefighter">Firefighter</option>
                                    <option value="Surgeon">Surgeon</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Analyst">Analyst</option>
                                    <option value="Chef">Chef</option>
                                    <option value="Design_Engineer">Design_Engineer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Civil_servant">Civil_servant</option>
                                    <option value="Librarian">Librarian</option>
                                    <option value="Petroleum_Engineer">Petroleum_Engineer</option>
                                    <option value="Official">Official</option>
                                    <option value="Technology_specialist">Technology_specialist</option>
                                    <option value="Economist">Economist</option>
                                    <option value="Engineer">Engineer</option>
                                </select>
                                <input type="number" name="current_job_years" placeholder="Current Job Years" onChange={handleChange} required />
                                <input type="number" name="experience" placeholder="Total Work Experience" onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="formRight">
                            <div className="formCard">
                                <div className="formTitle">
                                    <div>Set Assets Info</div>
                                    <span>Fill in required assets info</span>
                                </div>

                                <input type="number" name="income" placeholder="Your Income" onChange={handleChange} required />
                                <select defaultValue="def" name="state" onChange={handleChange} required>
                                    <option value="def" disabled>Choose State</option>
                                    <option value="Uttar_Pradesh">Uttar_Pradesh</option>
                                    <option value="Andhra_Pradesh">Andhra_Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="West_Bengal">West_Bengal</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Tamil_Nadu">Tamil_Nadu</option>
                                    <option value="Madhya_Pradesh">Madhya_Pradesh</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Jammu_and_Kashmir">Jammu_and_Kashmir</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Himachal_Pradesh">Himachal_Pradesh</option>
                                    <option value="Uttar_Pradesh[5]">Uttar_Pradesh[5]</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Sikkim">Sikkim</option>


                                </select>
                                <select defaultValue="def" name="house_ownership" onChange={handleChange} required>
                                    <option value="def" disabled>House Ownership</option>
                                    <option value="rented">Rent</option>
                                    <option value="owned">Own</option>
                                    <option value="norent_noown">None</option>
                                </select>
                                <input type="number" name="current_house_years" placeholder="Current House Years" onChange={handleChange} required />
                                <select defaultValue="def" name="car_ownership" onChange={handleChange} required>
                                    <option value="def" disabled>Car Ownership</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div className="btns">
                                    <button className="reset btn" onClick={handleReset}>
                                        Reset
                                    </button>
                                    <button className="submit btn" type="submit">
                                        Generate
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

    else if (showResult) {
        return (
            <div className="result">
                <div className="resultContainer">
                    <div className="topSection">
                        <div className="left">
                            <h1>{formData.name}</h1>
                            <div className="score">
                                <span>{resultData.value}</span>
                                <div>Predicted Score</div>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Credit Worthiness</h1>
                            <div className="score">
                                <span>{resultData.grade}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottomSection">

                        <div className="reccContainer">
                            <div className='title'>Nearest Neighbour</div>
                            <div className="card">
                                <span>{resultData.recc}</span>
                            </div>
                                <div className="btn reset" onClick={handleReset}>Reset</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Form;