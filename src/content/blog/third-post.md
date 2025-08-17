---
title: 'Termine und Auftritte'
description: 'Termine und Auftritte der Orangesingers'
pubDate: 'Aug 08 2021'
heroImage: '../../assets/blog-placeholder-about.jpg'
---

## Probenzeiten

Die Orangesingers proben jeden Dienstag in der 1. und 8. Stunde in der Oranienschule. Wenn du in der 5. oder 6. Klasse bist, kannst du nach Absprache bei uns hineinschnuppern und dich vom Chorgesang begeistern lassen.

<div class="calendar-wrapper">
  <!-- Kalender Header -->
  <div class="calendar-controls">
    <div class="view-controls">
      <span class="filter-label">Filter</span>
      <div class="month-navigation">
        <button class="nav-btn" id="prevMonth">‹</button>
        <button class="nav-btn" id="nextMonth">›</button>
      </div>
      <span class="current-period">Heute</span>
    </div>
    
    <h1 class="calendar-title" id="calendarTitle">August 2025</h1>
    
    <div class="view-buttons">
      <button class="view-btn">Schuljahr</button>
      <button class="view-btn active">Monat</button>
      <button class="view-btn">Woche</button>
      <button class="view-btn highlight">Neue Termine</button>
    </div>
  </div>

  <!-- Kalender Grid -->
  <div class="calendar-container">
    <div class="calendar-header-row">
      <div class="week-column">KW</div>
      <div class="day-header">Mo.</div>
      <div class="day-header">Di.</div>
      <div class="day-header">Mi.</div>
      <div class="day-header">Do.</div>
      <div class="day-header">Fr.</div>
      <div class="day-header">Sa.</div>
      <div class="day-header">So.</div>
    </div>
    
    <div class="calendar-body" id="calendarBody">
      <!-- Wird durch JavaScript gefüllt -->
    </div>
  </div>

  <div class="export-section">
    <h3>Eigenen Kalender exportieren</h3>
    <div class="export-buttons">
      <button class="export-btn">📄 als PDF</button>
      <button class="export-btn">📅 als iCal/ICS</button>
      <button class="export-btn">📊 als CSV</button>
    </div>
  </div>
</div>

## Unsere Auftritte

Wir treten etwa 6 Mal pro Schuljahr bei verschiedenen Veranstaltungen auf und sorgen für musikalische Höhepunkte im Schulleben. Unsere regelmäßigen Auftrittstermine sind im Kalender oben zu sehen.

### Veranstaltungen im Schuljahr

**Einschulung:** Wir begrüßen die neuen Schülerinnen und Schüler mit einem herzlichen musikalischen Willkommen zu Beginn des Schuljahres.

**Ringkirchenkonzert:** Ein besonderes Highlight, bei dem wir gemeinsam mit anderen Chören in der atmosphärischen Ringkirche auftreten.

**Tag der offenen Tür:** Hier präsentieren wir unser Können interessierten Besuchern und zukünftigen Schülerinnen und Schülern.

**Weihnachtsmarkt:** Mit festlichen Liedern stimmen wir die Besucher auf die Weihnachtszeit ein und sorgen für eine besinnliche Atmosphäre.

**Chorkonzert:** Unser großer Jahresauftritt, bei dem wir unser gesamtes Repertoire präsentieren und zeigen, was wir das Jahr über erarbeitet haben.

**Kulturnacht:** Ein kultureller Höhepunkt, bei dem verschiedene künstlerische Darbietungen der Schule präsentiert werden und wir unseren Beitrag zur Schulkultur leisten.

## Mitmachen

Du hast Interesse am Singen und möchtest Teil unserer Chorgemeinschaft werden? Dann komm einfach dienstags in der 7. und 8. Stunde vorbei oder sprich uns an. Besonders Schülerinnen und Schüler der 5. und 6. Klassen sind herzlich eingeladen, nach Absprache bei einer Probe zu schnuppern und zu erleben, wie viel Freude gemeinsames Musizieren macht.

<style>
  .calendar-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f8f9fa;
    border-radius: 12px;
    margin: 30px 0;
  }

  .calendar-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .view-controls {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .filter-label {
    font-weight: 600;
    color: #666;
  }

  .month-navigation {
    display: flex;
    gap: 5px;
  }

  .nav-btn {
    background: #f0f0f0;
    border: 1px solid #ddd;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .nav-btn:hover {
    background: #ff8c00;
    color: white;
    border-color: #ff8c00;
  }

  .current-period {
    color: #666;
    font-size: 14px;
  }

  .calendar-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    color: #333;
  }

  .view-buttons {
    display: flex;
    gap: 10px;
  }

  .view-btn {
    padding: 8px 16px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  }

  .view-btn.active {
    background: #ff8c00;
    color: white;
    border-color: #ff8c00;
  }

  .view-btn.highlight {
    background: #ff4500;
    color: white;
    border-color: #ff4500;
  }

  .view-btn:hover:not(.active):not(.highlight) {
    background: #f0f0f0;
  }

  .calendar-container {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .calendar-header-row {
    display: grid;
    grid-template-columns: 60px repeat(7, 1fr);
    background: #f8f9fa;
    border-bottom: 1px solid #ddd;
  }

  .week-column {
    padding: 12px 8px;
    text-align: center;
    font-weight: 600;
    color: #666;
    border-right: 1px solid #ddd;
    font-size: 12px;
  }

  .day-header {
    padding: 12px 8px;
    text-align: center;
    font-weight: 600;
    color: #333;
    border-right: 1px solid #ddd;
    font-size: 14px;
  }

  .day-header:last-child {
    border-right: none;
  }

  .calendar-week {
    display: grid;
    grid-template-columns: 60px repeat(7, 1fr);
    border-bottom: 1px solid #ddd;
  }

  .week-number {
    padding: 8px;
    text-align: center;
    background: #f8f9fa;
    border-right: 1px solid #ddd;
    font-size: 12px;
    font-weight: 600;
    color: #666;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 120px;
  }

  .calendar-day {
    min-height: 120px;
    padding: 8px;
    border-right: 1px solid #ddd;
    background: white;
    position: relative;
  }

  .calendar-day:last-child {
    border-right: none;
  }

  .calendar-day.other-month {
    background: #f9f9f9;
    color: #ccc;
  }

  .calendar-day.today {
    background: #fff8f0;
  }

  .day-number {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 4px;
  }

  .calendar-day.other-month .day-number {
    color: #ccc;
  }

  .event-item {
    font-size: 11px;
    padding: 2px 6px;
    margin: 1px 0;
    border-radius: 3px;
    color: white;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: all 0.2s;
  }

  .event-item.holiday {
    background: #ff8c00;
  }

  .event-item.rehearsal {
    background: #ff7f00;
  }

  .event-item.event {
    background: #ff6347;
  }

  .event-item.concert {
    background: #ff4500;
  }

  .event-item.school {
    background: #ffa500;
  }

  .event-item:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  .event-time {
    font-size: 10px;
    opacity: 0.9;
  }

  .export-section {
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .export-section h3 {
    margin: 0 0 15px 0;
    color: #333;
  }

  .export-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .export-btn {
    padding: 8px 16px;
    border: 1px solid #ff8c00;
    background: white;
    color: #ff8c00;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }

  .export-btn:hover {
    background: #ff8c00;
    color: white;
  }

  @media (max-width: 768px) {
    .calendar-controls {
      flex-direction: column;
      gap: 15px;
      align-items: stretch;
    }
    
    .view-buttons {
      justify-content: center;
    }
    
    .calendar-header-row {
      grid-template-columns: 40px repeat(7, 1fr);
    }
    
    .calendar-week {
      grid-template-columns: 40px repeat(7, 1fr);
    }
    
    .calendar-day {
      min-height: 80px;
      padding: 4px;
    }
    
    .event-item {
      font-size: 10px;
      padding: 1px 4px;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const events = {
      '2024-08': [
        { date: 15, title: 'Sommerferien', type: 'holiday', time: '' },
        { date: 20, title: 'Probe', type: 'rehearsal', time: '14:00' },
      ],
      '2024-09': [
        { date: 3, title: 'Schulbeginn', type: 'school', time: '8:00' },
        { date: 15, title: 'Einschulung', type: 'event', time: '10:00' },
        { date: 17, title: 'Probe', type: 'rehearsal', time: '14:00' },
      ],
      '2024-10': [
        { date: 8, title: 'Herbstferien', type: 'holiday', time: '' },
        { date: 22, title: 'Ringkirchenkonzert', type: 'concert', time: '19:00' },
      ],
      '2024-11': [
        { date: 8, title: 'Tag der offenen Tür', type: 'event', time: '15:00' },
        { date: 12, title: 'Probe', type: 'rehearsal', time: '14:00' },
      ],
      '2024-12': [
        { date: 14, title: 'Weihnachtsmarkt', type: 'event', time: '16:00' },
        { date: 18, title: 'Chorkonzert', type: 'concert', time: '19:30' },
        { date: 23, title: 'Weihnachtsferien', type: 'holiday', time: '' },
      ],
    };

    const monthNames = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    let currentDate = new Date();
    currentDate.setDate(1);

    function getWeekNumber(date) {
      const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    function renderCalendar() {
      const title = document.getElementById('calendarTitle');
      const body = document.getElementById('calendarBody');
      
      if (!title || !body) return;
      
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      
      title.textContent = `${monthNames[month]} ${year}`;
      
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      
      const startDate = new Date(firstDay);
      const dayOfWeek = (firstDay.getDay() + 6) % 7;
      startDate.setDate(1 - dayOfWeek);
      
      const endDate = new Date(lastDay);
      const endDayOfWeek = (lastDay.getDay() + 6) % 7;
      endDate.setDate(lastDay.getDate() + (6 - endDayOfWeek));
      
      body.innerHTML = '';
      
      let current = new Date(startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      while (current <= endDate) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'calendar-week';
        
        const weekNum = document.createElement('div');
        weekNum.className = 'week-number';
        weekNum.textContent = getWeekNumber(current);
        weekDiv.appendChild(weekNum);
        
        for (let i = 0; i < 7; i++) {
          const dayDiv = document.createElement('div');
          dayDiv.className = 'calendar-day';
          
          if (current.getMonth() !== month) {
            dayDiv.classList.add('other-month');
          }
          
          if (current.getTime() === today.getTime()) {
            dayDiv.classList.add('today');
          }
          
          const dayNumber = document.createElement('div');
          dayNumber.className = 'day-number';
          dayNumber.textContent = current.getDate();
          dayDiv.appendChild(dayNumber);
          
          const eventKey = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}`;
          const dayEvents = events[eventKey]?.filter(event => event.date === current.getDate()) || [];
          
          dayEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = `event-item ${event.type}`;
            
            const eventContent = document.createElement('span');
            if (event.time) {
              eventContent.innerHTML = `<span class="event-time">${event.time}</span> ${event.title}`;
            } else {
              eventContent.textContent = event.title;
            }
            
            eventDiv.appendChild(eventContent);
            dayDiv.appendChild(eventDiv);
          });
          
          weekDiv.appendChild(dayDiv);
          current.setDate(current.getDate() + 1);
        }
        
        body.appendChild(weekDiv);
      }
    }

    function previousMonth() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    }

    function nextMonth() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    }

    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    
    if (prevBtn) prevBtn.addEventListener('click', previousMonth);
    if (nextBtn) nextBtn.addEventListener('click', nextMonth);
    
    renderCalendar();
  });
</script>