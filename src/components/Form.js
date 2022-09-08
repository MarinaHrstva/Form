import { useState } from 'react';
import { post } from '../api/api';
import './Form.css';

const Form = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        gender: '',
        city: '',
        comment: '',
        tac: '',
    });

    const [isCorrect, setIsCorrect] = useState({
        firstName: true,
        lastName: true,
        email: true,
        age: true,
        gender: true,
        city: true,
        comment: true,
        tac: true,
    });

    const onChangeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]:
                e.target.type === 'checkbox'
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    function onSubmitHandler(e) {
        e.preventDefault();

        // First name validation
        if (values.firstName.length < 3) {
            setIsCorrect((state) => ({
                ...state,
                firstName: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                firstName: true,
            }));
        }

        // Last name validation
        if (values.lastName.length < 3) {
            setIsCorrect((state) => ({
                ...state,
                lastName: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                lastName: true,
            }));
        }

        // Email  validation
        if (!values.email.includes('@')) {
            setIsCorrect((state) => ({
                ...state,
                email: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                email: true,
            }));
        }

        // Age validation
        if (Number(values.age) < 18) {
            setIsCorrect((state) => ({
                ...state,
                age: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                age: true,
            }));
        }

        // Gender validation
        if (values.gender === '') {
            setIsCorrect((state) => ({
                ...state,
                gender: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                gender: true,
            }));
        }

        // City validation
        if (values.city === '') {
            setIsCorrect((state) => ({
                ...state,
                city: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                city: true,
            }));
        }

        // Comment validation
        if (values.comment === '') {
            setIsCorrect((state) => ({
                ...state,
                comment: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                comment: true,
            }));
        }

        //Terms & Conditions validation
        if (!values.tac) {
            setIsCorrect((state) => ({
                ...state,
                tac: false,
            }));
        } else {
            setIsCorrect((state) => ({
                ...state,
                tac: true,
            }));
        }

        const error = Object.values(isCorrect);
        const missingFields = Object.values(values);
        
        if (
            error.some((x) => x === false) ||
            missingFields.some((x) => x === '')
        ) {
            return;
        } else {
            post('/jsonstore/members', values);
        }
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
                            value={values.firstName}
                            onChange={onChangeHandler}
                        />
                        {isCorrect.firstName || (
                            <p className="error-text">
                                First name should be at least 3 characters long!
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={values.lastName}
                            onChange={onChangeHandler}
                        />
                        {isCorrect.lastName || (
                            <p className="error-text">
                                Last name should be at least 3 characters long!
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={onChangeHandler}
                        />
                        {isCorrect.email || (
                            <p className="error-text">Email is not valid!</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={values.age}
                            onChange={onChangeHandler}
                        />
                        {isCorrect.age || (
                            <p className="error-text">
                                Аge must be more than 18!
                            </p>
                        )}
                    </div>
                    <div className="radio-container">
                        <label htmlFor="Female">
                            Female
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={onChangeHandler}
                                checked={values.gender === 'female'}
                            />
                        </label>

                        <label htmlFor="Male">
                            Male
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                onChange={onChangeHandler}
                                checked={values.gender === 'male'}
                            />
                        </label>
                        {isCorrect.gender || (
                            <p className="error-text">
                                You must select a gender!
                            </p>
                        )}
                    </div>
                </div>
                <div className="right-container">
                    <div>
                        <label htmlFor="city">City</label>
                        <select
                            name="city"
                            id="city"
                            onChange={onChangeHandler}
                        >
                            <option></option>
                            <option value="Sofia">Sofia</option>
                            <option value="Plovdiv">Plovdiv</option>
                            <option value="Varna">Varna</option>
                            <option value="Burgas">Burgas</option>
                        </select>
                        {isCorrect.city || (
                            <p className="error-text">
                                You must select a city!
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="comment">Add comment:</label>
                        <textarea
                            name="comment"
                            id="comment"
                            cols="20"
                            rows="6"
                            value={values.comment}
                            onChange={onChangeHandler}
                        ></textarea>
                        {isCorrect.comment || (
                            <p className="error-text">
                                The comment is required
                            </p>
                        )}
                    </div>
                    <label htmlFor="tac">
                        <input
                            type="checkbox"
                            name="tac"
                            id="tac"
                            checked={values.tac}
                            onChange={onChangeHandler}
                        />
                        I agree to the Terms and Conditions!
                    </label>
                    {isCorrect.tac || (
                        <p className="error-text">
                            Please agree to the Terms and Conditions
                        </p>
                    )}
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
