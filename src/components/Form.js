const Form = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div>
                    <label htmlFor="firsName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        defaultValue={18}
                    />
                </div>

                <div>
                    <label htmlFor="Female">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                    />
                    <label htmlFor="Female">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <select
                        name="city"
                        id="city"
                    >
                        <option value="Sofia">Sofia</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Varna">Varna</option>
                        <option value="Burgas">Burgas</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Add comment:</label>
                    <textarea
                        name="comment"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                    />
                    <label htmlFor="newsletter">
                        Sign me up for the newsletter!
                    </label>
                </div>

                <input
                    type="submit"
                    value="SUBMIT"
                />
            </form>
        </div>
    );
};

export default Form;
