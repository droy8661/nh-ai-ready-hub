function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderEventCard(event) {
  const title = event.Title || 'Untitled event';
  const date = event.Date || 'Date TBD';
  const time = event.Time || '';
  const location = [event.Location, event.City].filter(Boolean).join(', ') || 'Location TBD';
  const audience = event.Audience || '';
  const status = event.Status || '';
  const link = event.RegistrationURL || event.SourceURL || '';

  const linkHtml = link
    ? `<a class="button button-secondary" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">View event</a>`
    : '';

  const statusBadge = status ? `<span class="course-badge">${escapeHtml(status)}</span>` : '';
  const timeText = time ? `<span>${escapeHtml(time)}</span>` : '';

  return `
    <article class="course-card">
      <div class="course-head">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p class="course-meta-text">${escapeHtml(location)}${audience ? ` • ${escapeHtml(audience)}` : ''}</p>
        </div>
        ${statusBadge}
      </div>
      <div class="course-footer">
        <span>${escapeHtml(date)}${timeText ? ` • ${escapeHtml(time)}` : ''}</span>
        ${linkHtml}
      </div>
    </article>
  `;
}

async function loadEvents() {
  const container = document.getElementById('eventsList');
  if (!container) {
    return;
  }

  try {
    const sheetUrl = container.dataset.sheetUrl;
    if (!sheetUrl) {
      container.innerHTML = '<p class="muted">No Google Sheet URL configured for events.</p>';
      return;
    }

    const rows = await fetchCsv(sheetUrl);
    if (rows.length < 2) {
      container.innerHTML = '<p class="muted">No events found in the sheet.</p>';
      return;
    }

    const headers = rows[0].map((header) => header.trim());
    const records = rows.slice(1).filter((row) => row.some((cell) => cell && cell.trim()));

    if (!records.length) {
      container.innerHTML = '<p class="muted">No events found in the sheet.</p>';
      return;
    }

    container.innerHTML = records
      .map((row) => {
        const event = {};
        headers.forEach((key, index) => {
          event[key] = row[index] || '';
        });
        return renderEventCard(event);
      })
      .join('');
  } catch (error) {
    container.innerHTML = `<p class="muted">Unable to load events: ${escapeHtml(error.message)}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadEvents);
