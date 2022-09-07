import './Form.css';

const Form = () => {
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitHandler}>
                <div className="left-container">
                    <div>
                        <label htmlFor="firstName">First Name</label>
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
                    <div className="radio-container">
                        <label htmlFor="Female">
                            Female
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                            />
                        </label>

                        <label htmlFor="Female">
                            Male
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                            />
                        </label>
                    </div>
                </div>
                <div className="right-container">
                    <div>
                        <label htmlFor="city">City</label>
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
                            id="comment"
                            cols="20"
                            rows="6"
                        ></textarea>
                    </div>
                        <label htmlFor="newsletter">
                            <input
                                type="checkbox"
                                name="newsletter"
                                id="newsletter"
                            />
                            Sign me up for the newsletter!
                        </label>
                    <input
                        type="submit"
                        value="SUBMIT"
                        id="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
