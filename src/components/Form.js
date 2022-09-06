const Form = () => {
    return (
        <div className="form-wrapper">
            <form>
                <label htmlFor="firsName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    defaultValue={18}
                />
                <label htmlFor="gender">Gender</label>
                <input
                    type="radio"
                    name="gender"
                    id="gender"
                />
               
            </form>
        </div>
    );
};

export default Form;
