import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';

const Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    const dayWeekNumber = new Date().getDay();
    const forecastDays = Weekdays.slice(dayWeekNumber, Weekdays.length).concat(Weekdays.slice(0, dayWeekNumber));

    return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="day-info">
                                    <img alt="weather" className="icon-weather" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="detail">{item.weather[0].description}</label>
                                    <label className="temperatures">{item.main.temp_min}°C / {item.main.temp_max}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="detail-grid">
                                <div className="detail-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="detail-grid-item">
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="detail-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
    )
}

export default Forecast;