function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCourseCard(course) {
  const title = course['Course Name'] || course['Title'] || course['Name'] || 'Untitled course';
  const provider = course['Provider'] || course['Organization'] || 'Unknown provider';
  const mode = course['Mode'] || 'Mode not specified';
  const location = course['Location'] || 'Location not specified';
  const category = course['Category'] || '';
  const startDate = course['Start Date'] || course['Date'] || '';
  const description = course['Description'] || course['Summary'] || '';
  const link = course['Link'] || course['URL'] || '';

  const linkHtml = link
    ? `<a class="button button-secondary" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">Learn more</a>`
    : '';

  return `
    <article class="course-card">
      <div class="course-head">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p class="course-meta-text">${escapeHtml(provider)} • ${escapeHtml(mode)} • ${escapeHtml(location)}</p>
        </div>
        ${category ? `<span class="course-badge">${escapeHtml(category)}</span>` : ''}
      </div>
      <p>${escapeHtml(description)}</p>
      <div class="course-footer">
        ${startDate ? `<span>${escapeHtml(startDate)}</span>` : ''}
        ${linkHtml}
      </div>
    </article>
  `;
}

async function loadCourses() {
  const container = document.getElementById('coursesList');
  if (!container) {
    return;
  }

  const sheetUrl = container.dataset.sheetUrl;
  if (!sheetUrl) {
    container.innerHTML = '<p class="muted">No Google Sheet URL configured for courses.</p>';
    return;
  }

  try {
    const rows = await fetchCsv(sheetUrl);
    if (rows.length < 2) {
      container.innerHTML = '<p class="muted">No course listings found in the sheet.</p>';
      return;
    }

    const headers = rows[0].map((header) => header.trim());
    const records = rows.slice(1).filter((row) => row.some((cell) => cell && cell.trim()));

    if (!records.length) {
      container.innerHTML = '<p class="muted">No course listings found in the sheet.</p>';
      return;
    }

    container.innerHTML = records
      .map((row) => {
        const course = {};
        headers.forEach((key, index) => {
          course[key] = row[index] || '';
        });
        return renderCourseCard(course);
      })
      .join('');
  } catch (error) {
    container.innerHTML = `<p class="muted">Unable to load courses: ${escapeHtml(error.message)}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadCourses);
