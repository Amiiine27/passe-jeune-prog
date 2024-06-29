import React from 'react';
import '../Style/ical.css'; // Importez le fichier CSS
import ical from '../assets/iCal.png'

const ICalButton = ({ title, descr, loc, DDB, DDF }) => {
  const handleDownload = () => {
    // Définir les détails de l'événement
    const event = {
      title: title,
      description: descr,
      location: loc,
      startTime: `${DDB}`, // Format : YYYYMMDDTHHmmssZ
      endTime: `${DDF}`,
    };

    // Créer le contenu du fichier iCal
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Amiiine27//Date//FR
BEGIN:VEVENT
UID:${new Date().toISOString()}
DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}Z
DTSTART:${event.startTime}
DTEND:${event.endTime}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    // Créer un Blob avec le contenu iCal
    const blob = new Blob([icsContent], { type: 'text/calendar' });

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'event.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /*return (
    <>
    <button className="image-button" onClick={handleDownload}> Ajouter à iCal</button>
    </>
  );*/

  return(
    <>
        <button className="image-button" onClick={handleDownload}> 
            <img src={ical} />
            Ajouter a iCal !
        </button>
    </>
  )
};

export default ICalButton;
