import User from "./User";

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>We are a leading company in the food industry, dedicated to providing the best quality products to our customers.</p>
            <p>Our mission is to deliver delicious and healthy food options that cater to all tastes and preferences.</p>
            <p>With a commitment to sustainability and community engagement, we strive to make a positive impact on the world.</p>
            <User name="Omeshwar" location="Hyderabad" contact="abc@xyz.com" />
        </div>
    );
}

export default About;