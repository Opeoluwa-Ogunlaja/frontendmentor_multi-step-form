const FormSection = () => {
    return <section className="form-section grid">
        <div className="form-container">
            <div className="flex info-container">
                <h2 className="form-title font-bold eading-wide font-xl">Personal Info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
        </div>
        <div className="form-controls">
            <button>Next</button>
        </div>
    </section>
}

export default FormSection