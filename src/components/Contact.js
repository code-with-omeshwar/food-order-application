const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl m-4 b-2 font-bold">Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-black mx-2 p-2" />
                <input type="email" placeholder="Email" className="border border-black mx-2 p-2" />
                <button className="border border-black mx-2 p-2 cursor-pointer">Submit</button>
            </form>
        </div>
    );
}
export default Contact;