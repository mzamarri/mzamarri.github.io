const form = document.getElementById("contact-form");
const nameField = document.getElementById("full-name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone-number");
const subjectField = document.getElementById("subject");
const messageField = document.getElementById("message");

const popup = document.getElementById("form-message");
const popupCloseBtn = document.getElementById("close-popup");

const validationData = [
        {
            id: 'full-name',
            errorId: "name-error",
            errorMessage: "Invalid name.",
            regex: /^\s*[-a-zA-Z]+\s+[-a-zA-Z]+\s*$/
        },
        {
            id: "email",
            errorId: "email-error",
            errorMessage: "invalid email.",
            regex: /^\s*[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        {
            id: "phone-number",
            errorId: "phone-error",
            errorMessage: "Invalid phone number.",
            regex: /^\(\d{3}\) \d{3}-\d{4}$/
        },
        {
            id: "subject",
            errorId: "subject-error",
            errorMessage: "Add a subject.",
            regex: /^\s*.+\s*$/
        },
        {
            id: "message",
            errorId: "message-error",
            errorMessage: "Do not leave blank.",
            regex: /^\s*.+\s*$/
        }
];

function getFieldData(field) {
    const fieldData = validationData.find(data => data.id === field.id);

    if (!fieldData) console.log("There is no field data");
    return fieldData;
}

function validateField(field) {
    const fieldData = getFieldData(field);

    if (!fieldData) return;

    const { regex } = fieldData;

    if (regex.test(field.value)) {
        clearError(field);
        return true;
    };

    showError(field);
    return false;
}

function formatPhoneNumber(digits) {
    if (digits.length === 0) {
        return "";
    } else if (digits.length <= 3) {
        return `(${digits}`;
    } else if (digits.length <= 6) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length <= 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return null;
}

function showError(field) {
    const fieldData = getFieldData(field);

    if (!fieldData) return;

    const { errorId, errorMessage } = fieldData;
    const error = document.getElementById(errorId);
    field.classList.add("error");
    error.textContent = errorMessage;
}

function clearError(field) {
    const fieldData = getFieldData(field);

    if (!fieldData) return;

    const { errorId } = fieldData;
    const error = document.getElementById(errorId);
    field.classList.remove("error");
    error.textContent = "";
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, textarea");

    let isValid = true;
    fields.forEach(field => {
        if (!validateField(field)) {
            console.log("validating field false")
            isValid = false;
        }
    })

    if (!isValid) {
        console.log("Cannot submit. Invalid fields!");
        return;
    };

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;


    try {
        await emailjs.sendForm(
            "portfolio_service",
            "contact_form",
            form,
            {
                publicKey: "3jXEN5WozD83fzk5B"
            }
        );
        fields.forEach(field => {
            field.value = "";
        });
        popup.showModal();
    } catch (err) {
        console.error("Email failed:", err);
    }
    
    submitButton.disabled = false;
});

form.addEventListener("focusin", (e) => {
    clearError(e.target);
})

form.addEventListener("focusout", (e) => {
    validateField(e.target);
})

nameField.addEventListener("beforeinput", (e) => {
    if (!e.data) return;

    e.preventDefault();

    if (/[a-zA-Z\s]+/.test(e.data)) {
        e.target.value = `${e.target.value}${e.data}`;
    };
});

phoneField.addEventListener("beforeinput", (e) => {
    if (!e.data) return;

    e.preventDefault();

    const insertDigits = e.data.replace(/\D/g, "");
    const currentDigits = e.target.value.replace(/\D/g, "");
    const digits = `${currentDigits}${insertDigits}`.slice(0,10);
    
    e.target.value = formatPhoneNumber(digits);
});

phoneField.addEventListener("input", (e) => {
    const digits = e.target.value
        .replace(/\D/g, "")
        .slice(0, 10);
    e.target.value = formatPhoneNumber(digits);
})

popupCloseBtn.addEventListener("click", e => {
    popup.close();
})
