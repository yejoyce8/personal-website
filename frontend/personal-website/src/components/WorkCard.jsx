import "../pages/workpage.css"

export default function WorkCard({ startDate, endDate, company, position, tech }) {
    return (
        <div className="work-card">
            <p>{startDate} - {endDate}</p>
            <h1>{company}</h1>
            <h3 style={{fontWeight: 400, fontSize: "2.5em"}}>{position}</h3>
            {tech.map((str, index) => (
                <p key={index} style={{ display: "inline" }}>
                    {str}
                    {index < tech.length - 1 && ", "}
                </p>
            ))}
        </div>
    );
}