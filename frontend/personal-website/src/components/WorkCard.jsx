import "../pages/workpage.css"

export default function WorkCard({ startDate, endDate, company, position, tech }) {
    return (
        <div className="work-card">
            <p className="details">{startDate} - {endDate}</p>
            <h1 className="company">{company}</h1>
            <h3 className="position">{position}</h3>
            <div style={{textAlign: "left"}}>
                {tech.map((str, index) => (
                    <p key={index} className="details">
                        {str}
                        {index < tech.length - 1 && ", "}
                    </p>
                ))}
            </div>

        </div>
    );
}