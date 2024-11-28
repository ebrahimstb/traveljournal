const Entry = (props)=>{
    return(
        <article className="journal-entry">
            <div className="mainimage-container">
                <img 
                className="main-img"
                src={props.entry.img.src}
                alt={props.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                className="marker"
                src="" 
                alt="mi" 
                />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>view on google map</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-date">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
    )
}
export default Entry