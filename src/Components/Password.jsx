"use client";

import React, { useEffect, useState } from 'react'

function Password() {
    const [passwordInput, setPasswordInput] = useState("");
    const [strengthClasses, setStrengthClasses] = useState(["", "", ""]);

    useEffect(() => {
        if (!passwordInput) return;

        const password = passwordInput;
        let strength = calculatePasswordStrength(password);

        const classes = ["", "", ""];
        if (strength >= 1) {
            classes[0] = 'weak';
        }
        if (strength >= 2) {
            classes[1] = 'medium';
        }
        if (strength >= 3) {
            classes[2] = 'strong';
        }
        setStrengthClasses(classes);
    }, [passwordInput])

    function calculatePasswordStrength(password) {
        const lengthWeight = 0.2;
        const uppercaseWeight = 0.5;
        const lowercaseWeight = 0.5;
        const numberWeight = 0.7;
        const symbolWeight = 1;

        let strength = 0;

        // Calculate the strength based on the password length
        strength += password.length * lengthWeight;

        // Calculate the strength based on uppercase letters
        if (/[A-Z]/.test(password)) {
            strength += uppercaseWeight;
        }

        // Calculate the strength based on lowercase letters
        if (/[a-z]/.test(password)) {
            strength += lowercaseWeight;
        }

        // Calculate the strength based on numbers
        if (/\d/.test(password)) {
            strength += numberWeight;
        }

        // Calculate the strength based on symbols
        if (/[^A-Za-z0-9]/.test(password)) {
            strength += symbolWeight;
        }

        return strength;
    }
    return (
        <div className="container-fluid bg-body-tertiary d-block">
            <label for="password-input" className="form-label fw-bold">Password</label>
            <input type="password" 
                onChange={(e) => setPasswordInput(e.target.value)}
                value={passwordInput}
            />
            <div className="password-meter">
                <div className={`meter-section rounded me-2 ${strengthClasses[0]}`}></div>
                <div className={`meter-section rounded me-2 ${strengthClasses[1]}`}></div>
                <div className={`meter-section rounded me-2 ${strengthClasses[2]}`}></div>
            </div>

        </div>
    )
}

export default Password