import React from "react";
import "./ContactUs.css";

const ContactPage = () => {
    return (
        <div className="container-fluid-1 ">
            <section className="contact-section">
                <div className="contact-info d-flex flex-wrap">
                    <div className="contact-details">
                        <table className="contact-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Address:</strong>
                                    </td>
                                    <td>
                                        175-A, AB Rd, Kalani Bagh, Gomti Nagar, Dewas, Madhya Pradesh 455001
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Phone:</strong>
                                    </td>
                                    <td>(+91) 9993551109</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Email:</strong>
                                    </td>
                                    <td> <a href="mailto:example@example.com" style={{color : "black" , textDecoration : "none"}}>ayush22@navgurukul.org</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="contact-form-section">
                            <h3>Contact Form</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Name <strong className="text-danger">*</strong>
                                    </label>
                                    <input
                                        placeholder="Enter you name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email <strong className="text-danger">*</strong>
                                    </label>
                                    <input
                                        placeholder="Enter your email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">
                                        Message <strong className="text-danger">*</strong>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Write your message here"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="map-section">
                        <h3>Location</h3>
                        <iframe
                            title="S3 Restaurant & Cafe"
                            width="100%"
                            height="435"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.344938965961!2d76.03933907453165!3d22.95720007921962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317824a8b49e5%3A0x3948d052463e6f19!2sS3%20Restaurant%20%26%20Cafe!5e1!3m2!1sen!2sin!4v1724410913548!5m2!1sen!2sin"
                            allowFullScreen=""
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;